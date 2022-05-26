import React, { useState, useEffect } from 'react'
import './Styles/Navbar.css'
import { logo } from '../JsonData.js/images'
import NavbarModal from './Model/NavbarModal/NavbarModal'
import ProductsType from './ProductCase/ProductsType'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menu, SetMenu] = useState(true)
    const [authsuccess, SetAuth] = useState(false)
    const Cart = useSelector((state) => state.cart)
    const menuToogle = (e) => {
        e.stopPropagation();
        SetMenu(!menu)

    }

    useEffect(() => {
        try {
            const authsuccesed = localStorage.getItem('authsuccesed');
            if (authsuccesed) {
                SetAuth(authsuccesed)
            } else {
                SetAuth(false)
            }
        } catch (e) {
            // error object 
        }

    })

    console.log(window)


    const logOut = () => {

        localStorage.clear()
        SetAuth(false)
    }

    return (
        <>
            <header className='bg-neutral-900 py-1 ' style={{ lineHeight: "36px" }}>
                <div className='grid grid-cols-6'>
                    <div className='cursor-pointer' id="menuclick" onClick={menuToogle} ><img id="tooglebtn" style={{ paddingTop: "10px", paddingLeft: "10px" }} src={menu ? `https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/mobile-menu.svg?v=140109299008397858811635748412` : `https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/close-icon-white-react.svg?v=82956483883518439201635748412`} alt="loading" /></div>
                    <div className="col-span-4 grid ">
                        {
                            logo ?
                                logo.map((i, index) => (
                                    <div key={index}>
                                        <Link to="/">
                                            <img className='m-auto' style={{ width: "122px", height: "auto" }} src={i.NavbarLogo ? i.NavbarLogo : ""} alt="loading .." />
                                        </Link> </div>
                                ))
                                : ""
                        }

                    </div>
                    <div className="relative">{
                        Cart.Cart.length >= 1 ? <Link to="/cart"><div className='gonoiseAbhiCartLenght'>{Cart.Cart.length}</div></Link> : ''
                    }
                        <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/cart-bag-new.svg?v=5749620504844230698" className="absolute" style={{ top: "4.3px" }} />

                        {
                            authsuccess == false ?
                                <Link to="/auth">  <img src="https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/account-icon.svg?v=40610059353920805021635748414" className='gonoise_authImge' style={{ top: "4.3px" }} /></Link>
                                : ''
                        }
                    </div>
                </div>
            </header>
            {
                menu ? ' ' :
                    <div id="AccordionoID" className="AccordionoID bg-neutral-900 ">{
                        Array(5).fill().map((_, i) => (
                            <NavbarModal key={i} title={<p>how are your </p>}>
                                {
                                    <ProductsType />
                                }
                            </NavbarModal>
                        ))
                    }

                        <div className='bg-neutral-900'>
                            <Link to="/noiseLab"><p className='text-white  ' style={{ fontSize: "14px", padding: "0.5em 1.67em", display: "flex", borderBottom: "1px solid #929292", alignItems: "center", justifyContent: "space-between" }}> Noise Lab  </p></Link>
                        </div>
                        {

                            authsuccess == false ?
                                <div className='bg-neutral-900'>
                                    <Link to="/auth"><p className='text-white  ' style={{ fontSize: "14px", padding: "0.5em 1.67em", display: "flex", borderBottom: "1px solid #929292", alignItems: "center", justifyContent: "space-between" }}>SignUP or Login </p></Link>
                                </div>
                                :
                                <div className='bg-neutral-900' onClick={logOut}>
                                    <p className='text-white cursor-pointer ' style={{ fontSize: "14px", padding: "0.5em 1.67em", display: "flex", borderBottom: "1px solid #929292", alignItems: "center", justifyContent: "space-between" }}>Logout  </p>
                                </div>
                        }
                    </div>
            }


        </>
    )
}
