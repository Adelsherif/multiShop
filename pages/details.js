import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Style from '../styles/Details.module.css';
import {HiArrowNarrowLeft} from 'react-icons/hi';
import Link from 'next/link';
import { products as result } from '../components/redux/data';
import { Fade } from "react-awesome-reveal";


function Details() {
    const products = useSelector(state => state.products.products);
    const [mode,setMode] = useState(0);
    const [number,setNumber] = useState(1);
    const dispatch = useDispatch()
    var productsIds =typeof window !== 'undefined' ? (localStorage.getItem("productsIds") ? JSON.parse(localStorage.getItem("productsIds")) :localStorage.setItem("productsIds",JSON.stringify([]))):false;
    useEffect(() =>{
        dispatch(result())
    },[dispatch])
  return (
    <div className={Style.detailsContent}>
        <Fade>
            <div className="back"><Link href='/search' className="arrow"><HiArrowNarrowLeft /></Link></div>
            <div className={Style.details}>
                <div className={Style.inner}>
                    {
                        products.filter(product => product.id === JSON.parse(localStorage.getItem("detailsId"))).map(element =>
                            <div className={Style.fullDetails} key={element.id}>
                                <div className={Style.image}>
                                    <Image src={element.image} alt="image" width={250} height={250} />
                                </div>
                                <div className={Style.content}>
                                    <p className={Style.category}>{element.category}</p>
                                    <h2>{element.title}</h2>
                                    <div className={Style.rating}>
                                            <p><span>Rating: </span> ({element.rating.rate}/5)</p>
                                            <p ><span>Reviews:</span> ({element.rating.count})</p>
                                        </div>
                                        <h4 className={Style.price}><span>Price:</span> ${element.price}</h4>
                                        <p><span>Description:</span> {element.description}</p>
                                        <div className={Style.number}>
                                            <form>
                                            <label><span>Quantity: </span></label>
                                                <input type="number" min='1' defaultValue={1} id="quantity" name="quantity" onChange={() =>{
                                                    setNumber(document.getElementById("quantity").value)
                                                    setMode(0)
                                                }}/>
                                            </form>
                                        </div>
                                        <div className={Style.adder}>
                                                {
                                                    mode === 0 
                                                    ? <button onClick={() =>{
                                                        const obj = {
                                                            id:element.id,
                                                            title:element.title,
                                                            image:element.image,
                                                            price:element.price,
                                                            quantity:parseInt(number)
                                                        }
                                                        productsIds !== [] ?  productsIds.filter(ele => ele.id !== obj.id) :[]
                                                        productsIds.push(obj);
                                                        localStorage.setItem("productsIds",JSON.stringify(productsIds));
                                                        setMode(1);
                                                    }}>Add To Cart</button> 
                                                    : <button>Done</button>
                                                }
                                        </div>
                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
        </Fade>
    </div>
)
}

export default dynamic(() => Promise.resolve(Details),{ssr:false})