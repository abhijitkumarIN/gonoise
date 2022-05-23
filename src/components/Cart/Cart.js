import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './cart.css'
import CartSidebar from './CartSidebar'
import { useNavigate } from 'react-router-dom';
import { removetoCart } from '../../app/Slices/AddToCart';

export default function Cart() {
    const [cartData, SetcartData] = useState(null)
    const [priceTrigring ,SetPriceTriggering] = useState(false)
    const cart = useSelector((state) => state.cart.Cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        SetcartData(cart)
    }, [cartData, cart])

    const redirectionProduct = (e) => {
        navigate(`/products ${e}`)
    }
    const removeIT = (e) => {
        var filtred = cartData.filter((i) => i.seriesId != e)
        dispatch(removetoCart(filtred))
        SetPriceTriggering(!priceTrigring)
    }

    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 col-span-1'>
                <div className="col-span-2 m-auto ">
                    {
                        cartData !== null ? cartData.length == 0 ? <h3>You Cart is Empty </h3> : (
                            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2'>
                                {
                                    cartData.map((cartData, index) => (
                                        <div className='grid relative hover:shadow-lg cursor-pointer pt-5 pb-2 border-2 border-zinc-100' key={index}>
                                            {cartData.seriesName ?
                                                <span className='allproductShowwOffertext text-'>{cartData.seriesName}</span>
                                                : ''
                                            }
                                            <div onClick={() => redirectionProduct(cartData.seriesId)} className="m-auto relative">
                                                <img className='hover:scale-105' src={cartData.bannerImg ? cartData.bannerImg : ""} style={{ width: "60%", margin: "10px 20%" }} alt="coming soon" />
                                                {
                                                    cartData.rating ?
                                                        <span className='allproductShowwRating '>{cartData.rating}&nbsp;⭐</span>
                                                        : ''}
                                            </div>
                                            <div className='pl-2 '>
                                                {/* <p className='font-semibold lg:text-base md:text-base text-sm'>{allproducts.seriesName ? allproducts.seriesName : ""} </p> */}
                                                <span className="lg:text-base md:text-base  text-sm " style={{ color: "#505af0" }}><sub>₹ </sub>{cartData.price ? cartData.price : ''}</span>
                                                &nbsp;  <span className="lg:text-sm md:text-sm  text-sm font-normal " style={{ color: "rgb(43, 43, 43);", textDecoration: "line-through" }}>₹ &nbsp;{cartData.price ? cartData.price : ''}</span>
                                            </div>
                                            <button className='bg-blue-500 shadow-sm p-y-2 py-3 shadow-blue-500/50 ...' onClick={()=> removeIT(cartData.seriesId)}>REMOVE</button>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                         : (
                                <p>orem ispum here</p>
                            )
                    }
                </div>
                <div>
                    <CartSidebar priceTrigering={priceTrigring} />
                </div>
            </div>
        </>
    )
}
