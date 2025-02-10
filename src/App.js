import React from 'react'
import Firstregister from './components/Register/Firstregister'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Client/Home/HomeHeader/Navbar';
import Header from './components/Client/Home/HomeHeader/Header';
import Houseregister from './components/Client/Houseregister/Houseregister';
import { Navigate, Route, Routes } from 'react-router-dom';
import SecondRegister from './components/Register/SecondRegister';
import Allproduct from './components/Client/Home/HomeHeader/Apphouse/Allproduct/Allproduct';
import Homeregister from './components/Routerregister/Homeregister';

export default function App() {
  return (

    <div>

      <Routes>
        <Route path='/' element={<Firstregister />} />
        <Route path='/secondregister' element={<SecondRegister />} />
        <Route path="/routerregister" element={<Homeregister />} />
        {/* <Route path='/sellerrouter' element={<Sellerrouter />} /> */}
        <Route path="/register" element={<Houseregister />} />
        <Route path='/allproduct' element={<Allproduct />} />
        
      </Routes>
    </div>
  )
}
