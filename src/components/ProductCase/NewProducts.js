import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NewPrd } from '../../JsonData.js/products';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { autoRecommendation } from '../../app/Slices/AddToCart';
export default function NewProducts() {
    const dispatch = useDispatch()
    const recommentationState = useSelector((state) => state.cart)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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
            items: 2
        }
    };

    const autorecommentions = (e) => {
        var check = recommentationState.RecommendationProduct.filter((id) => id.seriesId === e.seriesId);
        if (check.length !== 0) {
        } else {
            dispatch(autoRecommendation(e))

        }
    }
    return (

        <>
            <div className='my-8'>
                <h2 className='lg:text-3xl md:text-2xl sm:text-lg' style={{ fontWeight: "500", color: "#121212" }}>New Launches </h2>
                <div className='grid lg:col-span-3 sm:col-span-2 col-span-1'>
                    <Carousel swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["mobile", "tablet"]}
                        style={{ padding: "40px" }}

                    >
                        {
                            NewPrd ?
                                NewPrd.map((NewPrd, index) => (
                                    <div key={index} onClick={() => autorecommentions(NewPrd)} className={` cursor-pointer rounded-2xl py-4 my-8  grid mx-4  bg-white `} style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px 0px" }}>
                                        <h4 style={{ color: "#ff8d2e", textAlign: "center", fontSize: "12px", fontWeight: "500" }}>NEW</h4>
                                        <div className='m-auto'>
                                            <img className="hover:scale-105" src={NewPrd.img ? NewPrd.img : ""} style={{ width: "60%", margin: "10px 20%" }} />
                                        </div>
                                        <h4 style={{ fontWeight: "400", color: "#383838" }} className='lg:text-base md:text-base  text-sm'>Color Fit Ultra</h4>
                                        <h5 className="lg:text-lg md:text-lg  text-base " style={{ fontWeight: "bold", color: "#505af0" }}><sub>₹ </sub>2,999</h5>

                                    </div>
                                ))

                                : ""

                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}
