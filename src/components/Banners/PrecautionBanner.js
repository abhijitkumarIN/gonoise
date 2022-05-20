import React from 'react'
import { landingImage } from './../../JsonData.js/images';
import './BannerCss.css'

export default function PrecautionBanner() {
  return (
    <>
         <div className='text-center sm-hidden cursor-pointer'>
                {/* lg */}
                {
                    landingImage ?
                        landingImage.map((landingImage, index) => (
                            <div key={index}>
                                <div className='pb-5 mt-5'>
                                    <img src={landingImage.landingImageFourthlg ? landingImage.landingImageFourthlg : ""} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        ))
                        : ""
                }
                {/* sm */}
            </div>
            <div className='text-center ms_lg-hidden cursor-pointer'>
                {/* lg */}
                {
                    landingImage ?
                        landingImage.map((landingImage, index) => (
                            <div key={index}>
                                <div className='pb-5 mt-5'>
                                    <img src={landingImage.landingImageFourthms ? landingImage.landingImageFourthms : ""} style={{ width: "100%", height: "auto" }} />
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
