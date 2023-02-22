import React, { useState } from 'react';
import Link from 'next/link';
import Styles from '../../styles/Header.module.css';
import {HiOutlineMenuAlt1,HiOutlineSearch,HiOutlineShoppingBag,HiOutlineX} from 'react-icons/hi';

export default function Header() {
    const [toggle,setToggle] = useState(0);
return (
    <div className={Styles.header}>
        <div className='container'>
            <div className={Styles.list}>
                <ul className={Styles.mainList}>
                    <li>
                        {
                            toggle === 0 
                            ? <span className={Styles.icon} onClick={()=> setToggle(1)}><HiOutlineMenuAlt1 /></span> 
                            : <span className={Styles.icon} onClick={()=> setToggle(0)}><HiOutlineX /></span>
                        }
                        {
                            toggle === 1 
                        ? <ul className={Styles.innerList}>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#blogs'>Blogs</a></li>
                            <li><a href='#products'>Products</a></li>
                            <li><a href='register'>Register</a></li>
                        </ul>
                        : ""
                        }
                    </li>
                </ul>
            </div>
            <Link href='search' className={Styles.form}>
                <form>
                    <input type="text" placeholder='Search' />
                    <button className={Styles.icon}><HiOutlineSearch/></button>
                </form>
            </Link>
            <div className={Styles.cart}>
                <Link href='cart' className={Styles.icon}>
                    <HiOutlineShoppingBag />
                </Link>
            </div>
        </div>
    </div>
)
}