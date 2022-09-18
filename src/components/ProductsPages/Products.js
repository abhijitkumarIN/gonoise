import React, {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { addCart } from '../../app/Slices/AddToCart';
import { useParams } from 'react-router-dom'
import { productsAll } from '../../JsonData.js/products'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import './Products.css'
import NavbarModal from '../Model/NavbarModal/NavbarModal';



function Products() {
    const [productRender, setProductRender] = useState(null);
    // const { state } = useLocation()
    const { id } = useParams()
    const dispatch = useDispatch()
    const stateCart = useSelector((state) => state.cart)
    var filtredData;

    if (id !== undefined && id !== null && id !== '') {
        filtredData = productsAll.watch_series.filter((product_all) => product_all.seriesId === id)
    }



    setTimeout(() => {
        setProductRender(filtredData)
    }, 3000);
    function ADD() {
        if (productRender) {
            var currentId = productRender.map((id) => id.seriesId)
            var check = stateCart.Cart.filter((cartidCheck) => cartidCheck.seriesId === currentId[0])
            if (check.length !== 0) {
                alert("already exit products in your cart ");
            }
            else {
                dispatch(addCart(productRender[0]))
                alert("Thi product has been added ");
            }

        }
        else {
            alert("Something is wrong wrong ")
        }
    }
    return (
        <>
            <div >
                {
                    productRender ?
                        (<>
                            <div>
                                <div className="gonoise_byCmp bg-white grid grid-cols-2 py-2 px-4" style={{ boxShadow: "0  0 4px #c0c0c0 " }}>
                                    <div className="sm-hidden">
                                        {
                                            productRender.map((productRender, index) => (
                                                <div className="m-auto" key={index}>
                                                    <h4 style={{ fontWeight: "400", color: "#383838" }} className='lg:text-xl md:text-xl font-semibold text-sm'>{productRender.seriesName}</h4>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='lg:col-span-1 md:col-span-1 col-span-2'>
                                        <div className='grid grid-cols-3 '>
                                            <div className='col-span-2 grid'>
                                                {
                                                    productRender.map((productRender, index) => (
                                                        <div className="m-auto " key={index}>

                                                            <span className="lg:text-2xl md:text-2xl  text-base " style={{ fontWeight: "bold", color: "#505af0" }}>₹  {productRender.price}</span>
                                                            <span className="lg:text-lg md:text-lg  text-base" style={{ textDecoration: 'line-through', fontWeight: "bold", color: "rgb(139 136 136)" }}>&nbsp; ₹ 2,007</span>
                                                            <span className="lg:text-xl md:text-xl  text-base" style={{ fontWeight: "bold", color: "#ec5d39" }}>&nbsp; Save 60%</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                            <div className='grid'>
                                                <button onClick={ADD} style={{ width: "100px" }} className='m-auto rounded-full text-white bg-blue-500 shadow-lg  shadow-blue-500/50  px-5 py-2 text-xs font-sm ' >BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {productRender.map((productRender, index) => (
                                <div key={index} className="px-5">
                                    <Swiper navigation={true} pagination={{
                                        dynamicBullets: true,
                                    }}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper" loop={true}  >

                                        {
                                            productRender.imageViewGallery.map((imagesGallery, index) => (
                                                <SwiperSlide key={index}><div className='grid p-10'><img className='m-auto' alt="loading.." src={imagesGallery} /></div></SwiperSlide>
                                            ))
                                        }
                                    </Swiper>




                                </div>
                            ))
                            }


                            {
                                productRender.map((productRender, index) => (
                                    <div key={index} className="bg-black">
                                        {
                                            productRender.productDetail ?
                                                productRender.productDetail.map((productDetails, index) => (
                                                    <div key={index} className=" lg:px-64 md:px-64 px-5">
                                                        {productDetails.img ?
                                                            <img src={productDetails.img} style={{ width: '100%', height: "auto" }} alt="laoding.." />
                                                            : ''
                                                        }
                                                    </div>
                                                ))
                                                : ''
                                        }
                                        {/* fqAsked  */}
                                        <div className="lg:px-64 md:px-64 px-5">
                                            {
                                                productRender.fqa ?
                                                    productRender.fqa.map((fqa, index) => (
                                                        <div className='lg:mb-3 md:mb-3'>
                                                        <NavbarModal  key={index} title={<p className='lg:text-base md:text-sm text-sm'>{fqa.que ? fqa.que : ''} </p>}>
                                                            {
                                                                fqa.ans ? <p className='lg:text-base md:text-sm text-sm'>{fqa.ans}</p> : ''
                                                            }
                                                        </NavbarModal>
                                                        </div>
                                                    ))

                                                    : ''
                                            }
                                        </div>

                                    </div>
                                ))
                            }

                        </>)


                        : (
                            // loading spinner 
                            <p>loading...</p>
                        )
                }
            </div>

        </>
    )
}

export default Products