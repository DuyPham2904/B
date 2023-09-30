import "./Header.css"
import React from "react";
import { BiLogoInstagramAlt, BiLogoFacebookSquare, BiPhoneCall } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div id="header">
            <div className="header">
                <div className="header_left">
                    <p>Welcome to Our Publishing House!</p>
                </div>
                <div className="header_right">
                    <div className="log_in">
                        <Link><span> Login </span></Link>
                        <Link><span> Register </span></Link>
                    </div>
                    <div className="contact_media">
                        <p>
                            <Link><BiLogoFacebookSquare /></Link>
                            <Link><BiLogoInstagramAlt /></Link>
                            <Link><BsTwitter /></Link>
                        </p>
                    </div>
                    <div className="contact_phone">
                        <p><Link><BiPhoneCall /></Link>Free Call <span>0123456789</span></p>
                    </div>

                </div>
                <div className="login">

                </div>
            </div>
        </div>
    )

}