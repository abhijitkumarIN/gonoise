import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error'
import Footer from './components/Footer'
import Ads from './components/Ads/Ads';
import Products from './components/ProductsPages/Products';
import Auth from './components/Auth/Auth';

 function AppRoutes() {
    return (
        <>
           
                <Routes>
                    <Route  path="/" element={<Ads/>} />
                    <Route  path="/auth" element={<Auth/>} />
                    <Route  path="/products:id" element={<Products/>} />
                    <Route  path="*" element={<Error />} />
                </Routes>
        </>
    )
}

export default AppRoutes