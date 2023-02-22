import React from 'react';
import Style from '../../styles/Footer.module.css';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/Bs';
import {FaCopyright} from 'react-icons/fa';


export default function Footer() {
  return (
    <div className={Style.footer}>
        <div className='container'>
            <div className={Style.address}>
                <h2>Contacy Us</h2>
            </div>
            <div className={Style.blocks}>
                <div className={Style.content}>
                    <h3>Information</h3>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className={Style.content}>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='#'><span><BsFacebook /> </span> Facebook</a></li>
                        <li><a href='#'><span><BsInstagram /> </span> Instagram</a></li>
                        <li><a href='#'><span><BsTwitter /> </span> Twitter</a></li>
                    </ul> 
                </div>
                <div className={Style.content}>
                    <h3>Contact</h3>
                    <p>Phone: +2 1234 5678</p>
                    <p>Address: Dinamark,USA</p>
                </div>
                <div className={Style.content}>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet,Sed non dignissim elit. Vivamus pellentesque lacus eu tortor accumsan interdum. Donec facilisis sagittis lacus, laoreet vestibulum felis pellentesque ut</p>
                </div>
            </div>
            <div className={Style.copyright}>
                <p>Copyright <span><FaCopyright /></span> Adel Sherif 2023.</p>
            </div>
        </div>
    </div>
  )
}
