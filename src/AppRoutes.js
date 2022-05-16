import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error'
import Footer from './components/Footer'
import Ads from './components/Ads/Ads';
 function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<Ads/>} />
                    <Route  path="*" element={<Error />} />
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default AppRoutes