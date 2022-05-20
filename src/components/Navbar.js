import React, { useState, useEffect } from 'react'
import './Styles/Navbar.css'
import { logo } from '../JsonData.js/images'
import NavbarModal from './Model/NavbarModal/NavbarModal'
import ProductsType from './ProductCase/ProductsType'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [menu, SetMenu] = useState(true)
    const Cart = useSelector((state) => state.cart)

    // document.addEventListener('mouseup' , (e)=>{
    //     var panel = document.getElementById('AccordionoID');
    //     var toogleBtn = document.getElementById('tooglebtn');
    //     if(e.pageX===24 && e.pageY ===21 && menu === false || menu === false && e.target !== panel  ){
    //         SetMenu(true)
    //     }else {
    //         if(e.pageX===24 && e.pageY ===21 && menu === false ){
    //         SetMenu(true)
    //         }
    //     }
    // })
    


    const menuToogle = (e) => {
        e.stopPropagation();
        SetMenu(!menu)
       
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
                        Cart.Cart.length >= 1 ? <div className='gonoiseAbhiCartLenght'>{Cart.Cart.length}</div> : ''
                    }
                        <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/cart-bag-new.svg?v=5749620504844230698" className="absolute" style={{ top: "4.3px" }} />
                   

                 <Link to="/auth">  <img src="https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/account-icon.svg?v=40610059353920805021635748414" className='gonoise_authImge' style={{ top: "4.3px" }}/></Link>
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
                    </div>
            }

        </>
    )
}
