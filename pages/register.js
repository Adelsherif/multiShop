import React, { useState } from 'react';
import Link from 'next/link';
import Style from '../styles/register.module.css';
import {HiArrowNarrowLeft} from 'react-icons/hi';
import { Fade } from "react-awesome-reveal";


export default function Register() {
    var [have,setHave] = useState(0);
  return (
    <div className={Style.register}>
        <Fade>
        <div className="back"><Link href='/' className="arrow"><HiArrowNarrowLeft /></Link></div>
        {
            have === 0 ?(
                <div className={Style.block}>
                <div className={Style.inner}>
                    <div className={Style.name}><p>Log In</p></div>
                    <div className={Style.form}>
                        <form>
                            <label>E-mail</label>
                            <input type='email' placeholder='Enter Your E-mail' />
                            <label>Password</label>
                            <input type='password' placeholder='Password' />
                            <button>Log In</button>
                        </form>
                    </div>
                    <div className={Style.last}><p>Not Have An e-mail ?<span onClick={() => setHave(1)}>SignUp</span> </p></div>
                </div>
                </div>
            ):(
                <div className={Style.block}>
                <div className={Style.inner}>
                    <div className={Style.name}><p>Sign Up</p></div>
                    <div className={Style.form}>
                        <form>
                            <label>First Name</label>
                            <input type='text' placeholder='First Name' />
                            <label>Last Name</label>
                            <input type='text' placeholder='Last Name' />
                            <label>E-mail</label>
                            <input type='email' placeholder='Enter Your E-mail' />
                            <label>Password</label>
                            <input type='password' placeholder='Password' />
                            <label>Confirm Password</label>
                            <input type='password' placeholder='Confirm Password' />
                            <button>Sigin Up</button>
                        </form>
                    </div>
                    <div className={Style.last}><p>Already Have An e-mail ?<span onClick={() => setHave(0)}>LogIn</span> </p></div>
                </div>
                </div>
            )
        }
        </Fade>
    </div>
  )
}
