import React from 'react'
import Houseregister from '../Client/Houseregister/Houseregister'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Client/Home/HomeHeader/Navbar'
import Header from '../Client/Home/HomeHeader/Header'
import Apphouse from '../Client/Home/HomeHeader/Apphouse/Apphouse'
import Allproduct from '../Client/Home/HomeHeader/Apphouse/Allproduct/Allproduct'
import Achievement from '../Client/Home/Achievement/Achievement'

export default function Homeregister() {
    return (
        <>
            <Navbar />
            <Header /> 
            <Apphouse/> 
            <Achievement/>
        </>



    )
}