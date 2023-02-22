import React from 'react';
import Link from 'next/link';
import Style from '../../styles/Sales.module.css';
import { Fade } from "react-awesome-reveal";


export default function Sales() {
  return (
    <div className={Style.sales}>
      <Fade>
        <div className='container'>
            <div className={Style.block}>
                <div className={Style.text}>
                    <h1>Discounts Up To <span>60%</span></h1>
                    <p><q>Take advantage of the offer and take the initiative to buy from our store,
                        as some opportunities do not remain for long.</q></p>
                        <Link href='/search'>Shopping Now</Link>
                </div>
            </div>
        </div>
      </Fade>
    </div>
  )
}
