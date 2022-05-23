import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function CartSidebar({priceTrigering}) {

    const [cartData, SetcartData] = useState(null)
    const [totalPriceState, setTotalPriceState] = useState(0)
    const cart = useSelector((state) => state.cart.Cart)

    useEffect(() => {
        SetcartData(cart);
        priceCalculate();
    }, [cartData , totalPriceState , priceTrigering ])


    const priceCalculate = () => {
        var totalPrice = 0;
        cart.map((i, index) => totalPrice = i.price + totalPrice);
        setTotalPriceState(totalPrice);
        console.log(totalPrice , '' , totalPriceState)
    }


    return (
        <div><h1>Total price : &nbsp; {totalPriceState}</h1></div>
    )
}
