import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error'
import Footer from './components/Footer'
import Ads from './components/Ads/Ads';
import Products from './components/ProductsPages/Products';
import Auth from './components/Auth/Auth';
import AllproductPage from './components/ProductsPages/AllproductPage';
import Cart from './components/Cart/Cart';
// pages 
import LabPage from './Page/LabPage/LabPage';

function AppRoutes() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Ads />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/products:id" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/allproduct" element={<AllproductPage />} />
                <Route path="/noiseLab" element={<LabPage />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default AppRoutes