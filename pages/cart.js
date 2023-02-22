import React from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Style from '../styles/Cart.module.css';
import {HiArrowNarrowLeft} from 'react-icons/hi';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";


 function Cart() {
    const products = useSelector(state => state.products.products);
    var productsIds =typeof window !== 'undefined' ? (localStorage.getItem("productsIds") ? JSON.parse(localStorage.getItem("productsIds")) :localStorage.setItem("productsIds",JSON.stringify([]))):false;
    var total=0;
  return (
    <div className={Style.cart}>
        <Fade >
            <div className="back"><Link href='/' className="arrow"><HiArrowNarrowLeft /></Link></div>
            <h1>Shopping <span>Cart</span></h1>
            <div className={Style.details}>
                <div className={Style.inner}>
                    {
                        productsIds.length !== 0 ? productsIds.filter(product =>{
                            if(product){
                                total +=(product.price*product.quantity)
                                return product;
                            }
                        }).map(element =>
                            <div className={Style.fullDetails} key={element.id}>
                                <div className={Style.image}>
                                    <Image src={element.image} alt="image" width={250} height={250} />
                                </div>
                                <div className={Style.content}>
                                    <p>{element.title}</p>
                                    <h4 className={Style.price}><span>Price:</span> (${element.price})</h4>
                                    <p><span>Quantity: </span>({element.quantity})</p>
                                    <Link href='' onClick={() =>{
                                        let newArray = productsIds.filter(block => block.id !== element.id);
                                        localStorage.setItem("productsIds",JSON.stringify(newArray));
                                    }}>Cancel</Link>
                                </div>
                            </div>
                            ): <p className={Style.empty}>Your <span>Cart</span> Is Empty.</p>
                    }
                </div>
            </div>
            <div className={Style.total}><h3><span>Total:</span><span>{total} $</span></h3></div>
        </Fade>
    </div>
)
}

export default dynamic(() => Promise.resolve(Cart),{ssr:false})