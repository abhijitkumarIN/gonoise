import React from 'react'
import './BannerCss.css'
import { landingImage } from '../../JsonData.js/images';
export default function BannerTop() {
    return (
        <>
            <div className='text-center lg:px-32 md:px-32 sm:px-3 pb-5 cursor-pointer'>
                {/* lg */}
                {
                    landingImage ?
                        landingImage.map((landingImage, index) => (
                            <div key={index}>
                                <div className='pb-5 mt-5'>
                                    <img src={landingImage.landingImageOnelg ? landingImage.landingImageOnelg : ""} style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className='pb-5 '>
                                    <img src={landingImage.landingImagetwo ? landingImage.landingImagetwo : ""} style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className='pb-20 '>
                                    <img src={landingImage.landingImageThreelg ? landingImage.landingImageThreelg : ""} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        ))
                        : ""
                }
                {/* sm */}
            </div>
        </>
    )
}
