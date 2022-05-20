import React, { useState, useEffect } from 'react'
import { marqueImage } from '../../JsonData.js/images'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Marque() {
    const [marque, SetMarque] = useState(null)
    useEffect(() => {
        SetMarque(marqueImage);
    }, [marque])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (

        <div className='my-3'>
            <h2 className='lg:text-3xl md:text-2xl sm:text-lg' style={{ fontWeight: "500", color: "#121212" }}>Published  </h2>
            <div className='grid lg:col-span-3 sm:col-span-2 col-span-1'>
                <Carousel swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    style={{ padding: "40px" }}
                    arrows={false}
                >
                    {
                        marque ?
                            marque.map((marque, index) => (
                                <div key={index} className={` cursor-pointer py-4 my-8  grid mx-4  bg-white `} >
                                    <div className='m-auto'>
                                        <img className="" src={marque} style={{ width: "90%", margin: "10px 5%" }} />
                                    </div>
                                </div>
                            ))
                            : ""
                    }
                </Carousel>
            </div>
        </div>
    )
}
