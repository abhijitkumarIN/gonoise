import React, { useTransition, useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { productsAll } from '../../JsonData.js/products'

function Products() {

    const [productRender, setProductRender] = useState(null);
    const { state } = useLocation()
    const { id } = useParams()

    var filtredData;
    if (id !== undefined && id !== null && id !== '') {
        filtredData = productsAll.watch_series.filter((product_all) => product_all.seriesId == 'colorBuzz')
    }

    setTimeout(() => {
        setProductRender(filtredData)
        console.log(productRender)
    }, 3000);



    return (
        <>
            <div >
                {
                    productRender ?
                        productRender.map((productRender, index) => (
                            <div key={index}>
                                <img src={productRender.bannerImg} style={{ width: "100%", height: "auto" }} />

                                <div>
                                 
                                </div>
                            </div>
                        ))

                        : ""
                }
            </div>

        </>
    )
}

export default Products