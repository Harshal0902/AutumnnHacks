import React, { useEffect, useState } from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white'>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Often times we have plants that we don't know how to take care of and they got neglected. Resulting in getting infected and dying. We want to help people to take care of their plants by providing them with the information about the disease and its cure.</p>

                    <Link to="/plantDiseasePrediction">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Upload Image</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="400" height="400" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 py-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={FeatImg} alt="img" width="400" height="400" />
                </div>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'> Plant bay is a web app where you can:
                    </p>
                    <ul className="text-xl">
                        <li className="list-disc">Upload a picture of the plant and get the information about the  disease.</li>
                        <li className="list-disc">Know the steps to cure the disease.</li>
                        <li className="list-disc">Get the weather of the user's location.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
