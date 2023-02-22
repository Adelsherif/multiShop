import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {HiStar} from 'react-icons/hi';
import Style from '../../styles/Products.module.css';


export default function Products() {
    const products = useSelector(state => state.products.products);
  return (
    <div className={Style.products} id="products">
        <div className='head'>
            <h1><span>Shoping</span> Now</h1>
            <p>You will find what dou you want.</p>
        </div>
        <div className='container'>
            <div className={Style.inner}>
                {
                    products.map(product =>
                        <Link href='details' key={product.id} className={Style.product}  onClick={() => localStorage.setItem("detailsId",JSON.stringify(product.id))}>
                            <div className={Style.image}>
                                <Image src={product.image} alt="image" width="280" height="280" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className={Style.data}>
                                <h4>{product.title}</h4>
                                <p>{product.category}</p>
                                <div className={Style.rating}>
                                    <p><span><HiStar/></span> {product.rating.rate}</p>
                                    <p >Reviews: ({product.rating.count})</p>
                                </div>
                                <h5 className={Style.price}>${product.price}</h5>
                            </div>
                        </Link>
                        )
                }
            </div>
        </div>
    </div>
)}