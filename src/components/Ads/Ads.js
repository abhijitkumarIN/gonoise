import React, { useState } from 'react'
import './Ads.css'
import { servicesTrust } from '../../JsonData.js/images'
import BannerTop from '../Banners/BannerTop'
import ProductsType from '../ProductCase/ProductsType'
import NewProducts from '../ProductCase/NewProducts'
import BestSoldProducts from '../ProductCase/BestSoldProducts'
import PrecautionBanner from '../Banners/PrecautionBanner'
import Marque from '../ProductCase/Marque'
import RecommendationProducts from '../ProductCase/RecommendationProducts'
export default function Ads() {

    const [email, SetMail] = useState()
    function subscribe(e) {
        e.preventDefault();
        console.log(email)

        SetMail("")
    }

    return (
        <>



            <BannerTop />
            <div className='text-center lg:px-32 md:px-32 sm:px-3 py-10 '>
            <ProductsType/>
            <NewProducts/>
            <PrecautionBanner/>
            <BestSoldProducts/>
            <Marque/>
            <RecommendationProducts/>
            </div>
            {/* mail subscribe    */}
            <div className='text-center lg:px-32 md:px-32 sm:px-3 py-20 bg-indigo-200'>
                <p className='lg:text-5xl font-normal text-3xl text-blue-500'> Keep up with the noise </p>
                <p className='lg:px-80 md:px-80 sm:px-20 py-5 text-sm'>Sign up now to hear about our latest offers, new products, collaborations, all things Noise - Straight to your inbox.</p>

                <form onSubmit={subscribe} className='lg:px-80 md:px-80 sm:px-20 grid '>
                    <div className="m-auto">
                        <input className='text-center border-2 border-blue-500' value={email} onChange={(e) => SetMail(e.target.value)} style={{ backgroundColor: "transparent", outline: "none", padding: "3px 40px", color: "rgb(59 130 246)" }} type='email' name='mail' placeholder='ENTER YOUR EMAIL  ' required />
                        <br />
                        <button className='rounded-full text-white bg-blue-500 shadow-lg text-sm shadow-blue-500/50  px-8 py-2 mt-2' type="submit">SUBSCIBE</button>
                    </div>
                </form>
            </div>

            <div className='text-center lg:px-32 md:px-32 sm:px-3 py-20'>
                <h2 className='lg:text-5xl font-semibold text-3xl '>
                    Crafted for your inner 'Noise'
                </h2>
                <p className="pt-10">Founded in 2018, Noise is the leading Indian connected lifestyle brand that is changing the way India remains connected and building India's largest and most active buoyant lifestyle community. With its remarkable range of best-in-class smart hearables and wearables Noise has also been awarded India’s No.1 wearable watch brand in 2020 by IDC Worldwide Wearable Device Tracker. Smart products with the latest features make Noise the right brand for your music and fitness needs.
                </p>
                <div className='grid lg:grid-cols-4 mt-4 md:grid-cols-4 grid-cols-2'>
                    {
                        servicesTrust ? servicesTrust.map((servicesTust, i) => (
                            <div className='grid' key={i}>
                                <div className='m-auto'>
                                    <img src={servicesTust.img} alt="comming soon" style={{ width: "50%", margin: "5px 25%", height: "auto" }} />
                                    <p>{servicesTust.des}</p>
                                </div>
                            </div>
                        )) : ""
                    }
                </div>

            </div>



        </>
    )
}
