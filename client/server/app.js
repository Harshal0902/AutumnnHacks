const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()

const ApiKey = process.env.APIKEY;

const AzureEndpoint = process.env.AZUREENDPOINT + '/plant/v1.0';

const baseInstanceOptions = {
  baseURL: AzureEndpoint,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': ApiKey
  }
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()

  app.options('*', (res, req) => {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
  })
})

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.post('/api/create-plantlist', async (req, res) => {
  try {
    const instanceOptions = {...baseInstanceOptions}
    const instance = axios.create(instanceOptions)
    const body = req.body

    const response = await instance.post(
      `/detect?returnplantId=true&returnplantLandmarks=false&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01&returnplantAttributes=age,gender`,
      {
        url: body.image
      }
    )

    res.send({
      response: 'ok',
      data: response.data
    })
  } catch (err) {
    console.log("error :c : ", err)
    res.send({response: 'not ok'})
  }
})

const PORT = 51357
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Listening on port ${PORT}...`);
  }
})
