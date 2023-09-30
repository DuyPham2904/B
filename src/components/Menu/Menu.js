import { Link } from "react-router-dom";
import "./Menu.css";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import logo1 from "./logo1.png";
import { BsTwitter } from "react-icons/bs";
import { BiLogoFacebookSquare, BiSearch, BiLogoInstagramAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
export default function Menu() {
    const { cart } = useContext(AppContext);
    const handle_Sidebar = () => {
        document.querySelector(".sidebar").classList.toggle("active");
    }
    const handle_close_search = () => {
        document.querySelector("#search_ipt").classList.add("active");
    }
    const handle_toggle_search = () => {
        document.querySelector("#search_ipt").classList.toggle("active");
    }
    const handle_moveToCart = () => {
        if (cart.length == 0) {
            swal("Your cart is currently empty!!!")
        }
        else {
            window.location = "/BookLvers/cart";
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }
    const handle_search = () => {
        window.location = "/BookLvers/search";
    }
    return (
        <div className="menu">
            <div className="logo">
                <Link className="link" to="/" style={{ textDecoration: "none" }}><img src={logo1} alt="logo" /></Link>
            </div>
            <div className="main_menu">
                <Link className="link" to="/" style={{ textDecoration: "none" }}><span>HOME</span></Link>
                <Link className="link" to="/BookLvers/bookstore" style={{ textDecoration: "none" }}><span>STORE</span></Link>
                <Link className="link" to="/BookLvers/bookdetail" style={{ textDecoration: "none" }}><span>OURS EVENTS</span></Link>
                <Link className="link" to="/fff" style={{ textDecoration: "none" }}><span>BLOG</span></Link>
                <Link className="link" to="/BookLvers/about" style={{ textDecoration: "none" }}><span>ABOUT</span></Link>
                <Link className="link" to="/ff" style={{ textDecoration: "none" }}><span>ORTHER</span></Link>
            </div>
            <div className="menu_btn" onClick={handle_Sidebar}><AiOutlineMenu /></div>
            <div className="menu_icons">
                <Link onClick={handle_moveToCart} className="basket_link"><CiShoppingBasket className="icon basket" /><p className="amount">{cart.reduce((kq, item) => kq += item.price, 0)}</p></Link>
                <Link onClick={handle_toggle_search}><CiSearch className="icon search" /></Link>
            </div>
            <div className="sidebar active">
                <div className="sidebar_top">
                    <img src={logo1} />
                    <AiOutlineClose className="sidebar_close" onClick={handle_Sidebar} />
                </div>
                <hr></hr>
                <div className="sidebar_main">
                    <ul>
                        <li>
                            <Link to="" style={{ textDecoration: "none" }}><span>HOME</span></Link>
                        </li>
                        <li>
                            <Link to="" style={{ textDecoration: "none" }}><span>PAGES</span></Link>
                        </li>
                        <li>
                            <Link to="" style={{ textDecoration: "none" }}><span>OUR EVENTS</span></Link>
                        </li>
                        <li>
                            <Link to="" style={{ textDecoration: "none" }}><span>BLOG</span></Link>
                        </li>
                        <li>
                            <Link to="" style={{ textDecoration: "none" }}><span>ABOUT</span></Link>
                        </li>
                        <li>
                            <Link to="" style={{ textDecoration: "none" }}><span>STORE</span></Link>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="sidebar_bottom">
                    <Link><BiLogoFacebookSquare /></Link>
                    <Link><BiLogoInstagramAlt /></Link>
                    <Link><BsTwitter /></Link>
                </div>
            </div>
            <div id="search_ipt" className="search_ipt active">
                <Button onClick={handle_close_search} className="search_input_close"><AiOutlineClose /></Button>
                <InputGroup>
                    <Input type="text" className="search_input_text" placeholder="search" />
                    <InputGroupText>
                        <BiSearch onClick={() => handle_search()} />
                    </InputGroupText>
                </InputGroup>
            </div>
        </div>
    )
}