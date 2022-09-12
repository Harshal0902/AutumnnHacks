import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Weather from '../pages/Weather';
import PlantDiseasePrediction from '../pages/PlantDiseasePrediction';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/plantDiseasePrediction" element={<PlantDiseasePrediction />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
