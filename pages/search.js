import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from '../styles/Products.module.css';
import {HiOutlineSearch,HiStar,HiArrowNarrowLeft} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { getValue } from '../components/redux/reducer';
import { products } from '../components/redux/data';
import Sales from '../components/sales/sales';

export default function Search() {
  const fullProducts = useSelector(state => state.products.products);
  const savedValue = useSelector(state => state.products.searchValue);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(products());
  },[dispatch])
  return (
    <div className={Style.search}>
        <div className="back"><Link href='/' className="arrow"><HiArrowNarrowLeft /></Link></div>
      <div className="container">
        <div className={Style.form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Search' id='myText' autoFocus onChange={() =>{ 
              var text = document.getElementById("myText").value
              dispatch(getValue(text))
              }}/>
            <button className={Style.icon}><HiOutlineSearch/></button>
          </form>
        </div>
    <Sales />
        <div className={Style.products}>
            <div className={Style.inner}>
                {
                    fullProducts.filter(element => {
                      if(savedValue === ""){
                        return element
                      }else{
                        return element.title.toLowerCase().includes(savedValue.toLowerCase())
                      }}).map(product =>
                        <Link href='details' className={Style.product} key={product.id} onClick={() => localStorage.setItem("detailsId",JSON.stringify(product.id))}>
                            <div className={Style.image}>
                                <Image src={product.image} alt="image" width={"250"} height={"250"} style={{ width: '100%', height: '100%' }}/>
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
    </div>
  )
}
