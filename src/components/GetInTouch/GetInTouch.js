import React from 'react';

import './GetInTouch.css';
import { Link } from 'react-router-dom';
export default function GetInTouch() {
    return (

        <div className='getintouch'>
            <div className='content'>
                <h2 className='title'>Stay in Touch with Our Updates</h2>
                <hr />
                <div>
                    <div >
                        <input className='email_input'></input>
                        <button className='btn_getInTouch'>GET IN TOUCH</button>
                    </div>
                    <div className='policy'><input className='ipt_policy' type="checkbox" /> <p> I agree to the <Link>Privacy Policy</Link>.</p></div>
                </div>
            </div>
        </div>
    )
}