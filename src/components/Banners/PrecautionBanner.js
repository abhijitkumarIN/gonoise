import React from 'react'
import { landingImage } from './../../JsonData.js/images';

export default function PrecautionBanner() {
  return (
    <>
         <div className='text-center  cursor-pointer'>
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
    
    </>
  )
}
