import React, { useEffect, useState } from 'react'
import './Products.css'
import { all_products } from '../../JsonData.js/products';

export default function AllproductPage() {
    const [originalState, SetoriginalState] = useState(null);
    const [filtredState, SetFilteredState] = useState(null);

    useEffect(() => {
        SetoriginalState(all_products)
        console.log(originalState)
    }, [originalState, filtredState])

    var productType = [];
    if(originalState !== null) {
        // var filtred = originalState.map((unique, index) => productType.push(unique.type))

    }
    var productTypeunique = [... new Set(productType)];

    async function filterData(e) {
        var values = e.target.value;
        if (values === 'All') {
            SetoriginalState(all_products)
            SetFilteredState(null)
        } else {
            var filtredData = await originalState.filter((flt) => flt.type === values);
            SetFilteredState(filtredData);
        }
    }

    async function sortingFunction(e) {
        var values = e.target.value;
        console.log(values);
        switch (values) {
            case 'High to Low':
                var filtredOne =[...originalState]
                var filtredData = await filtredOne.sort((a, b) => b.price - a.price);
                SetFilteredState(filtredData);
                break;
            case 'Low to High':
                var filtredtwo =[...originalState]
                var filtredData = await filtredtwo.sort((a, b) => a.price - b.price);
                SetFilteredState(filtredData);
                break;
                case 'High Rating':
                    var filtredOne =[...originalState]
                    var filtredData = await filtredOne.sort((a, b) => b.rating - a.rating);
                    SetFilteredState(filtredData);

                break;
                case 'Unset':
                    SetoriginalState(all_products)
                    SetFilteredState(null)
                    break
            default:
               
        }
    }
    return (
        <React.Fragment>

            <div>
                {
                    productTypeunique.length !== 0 ? (
                        <select onChange={filterData} >
                            <option value={'All'}>All</option>
                            {
                                productTypeunique.map((i, index) => (
                                    <option value={i}>{i}</option>
                                ))

                            }

                        </select>
                    ) : ''
                }
                <span>
                    <select onClick={sortingFunction}>
                    <option >ORDER</option>
                        <option value="Unset">Unset</option>
                        <option >Low to High</option>
                        <option >High to Low</option>
                        <option >High Rating</option>
                    </select>
                </span>
            </div>
            <div className="mx-2">
                {filtredState == null ?
                    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2">
                        {
                            originalState ?
                                originalState.map((allproducts, index) =>
                                (
                                    <div className='grid relative hover:shadow-lg cursor-pointer pt-5 pb-2 border-2 border-zinc-100' key={index}>
                                        {allproducts.offerTitle ?
                                            <span className='allproductShowwOffertext text-'>{allproducts.offerTitle}</span>
                                            : ''
                                        }
                                        <div className="m-auto relative">
                                            <img className='hover:scale-105' src={allproducts.img ? allproducts.img : ""} style={{ width: "60%", margin: "10px 20%" }} alt="coming soon" />
                                            {
                                                allproducts.rating ?
                                                    <span className='allproductShowwRating '>{allproducts.rating}&nbsp;⭐</span>
                                                    : ''}
                                        </div>
                                        <div className='pl-2 '>
                                            <p className='font-semibold lg:text-base md:text-base text-sm'>{allproducts.seriesName ? allproducts.seriesName : ""} </p>
                                            <span className="lg:text-base md:text-base  text-sm " style={{ color: "#505af0" }}><sub>₹ </sub>{allproducts.price ? allproducts.price : ''}</span>
                                            &nbsp;  <span className="lg:text-sm md:text-sm  text-sm font-normal " style={{ color: "rgb(43, 43, 43);", textDecoration: "line-through" }}>₹ &nbsp;{allproducts.price ? allproducts.price : ''}</span>
                                        </div>
                                    </div>
                                )
                                )

                                : ''
                        }
                    </div>

                    :
                    (
                        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2">
                            {
                                filtredState ?
                                    filtredState.map((allproducts, index) =>
                                    (
                                        <div className='grid relative hover:shadow-lg cursor-pointer pt-5 pb-2 border-2 border-zinc-100' key={index}>
                                            {allproducts.offerTitle ?
                                                <span className='allproductShowwOffertext text-'>{allproducts.offerTitle}</span>
                                                : ''
                                            }
                                            <div className="m-auto relative">
                                                <img className='hover:scale-105' src={allproducts.img ? allproducts.img : ""} style={{ width: "60%", margin: "10px 20%" }} alt="coming soon" />
                                                {
                                                    allproducts.rating ?
                                                        <span className='allproductShowwRating '>{allproducts.rating}&nbsp;⭐</span>
                                                        : ''}
                                            </div>
                                            <div className='pl-2 '>
                                                <p className='font-semibold lg:text-base md:text-base text-sm'>{allproducts.seriesName ? allproducts.seriesName : ""} </p>
                                                <span className="lg:text-base md:text-base  text-sm " style={{ color: "#505af0" }}><sub>₹ </sub>{allproducts.price ? allproducts.price : ''}</span>
                                                &nbsp;  <span className="lg:text-sm md:text-sm  text-sm font-normal " style={{ color: "rgb(43, 43, 43);", textDecoration: "line-through" }}>₹ &nbsp;{allproducts.price ? allproducts.price : ''}</span>
                                            </div>
                                        </div>
                                    )
                                    )

                                    : ''
                            }
                        </div>
                    )
                }

            </div>
        </React.Fragment>
    )
}
