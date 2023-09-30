import React from "react";
import axios from "axios";
import './Footer.css'
import BookCard from "../BookCard/BookCard.js";
import { MDBCol } from 'mdb-react-ui-kit';
import logo1 from "./logo1.png";
import { useState, useEffect } from "react";
export default function Footer() {
    const [booklist, setBookList] = useState([])
    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Xi2GZHoZgcshVvC9NLhAWSkeL5hnjUZC`)
        .then( res => {
            setBookList(res.data);
        })
        .catch(error => console.log(error))
    },[])
    return (
        <div className="footer">
            <div className="footer_top">
                <h1>Get -30% purchase <span>on order over $299.00</span></h1>
                <button className="more_info">MORE INFO</button>
            </div>
            <div className="footer_bottom">
                <div className="footer_info d-flex align-items-start bg-light mb-3">
                    <MDBCol>
                        <img src={logo1}/>
                    </MDBCol>
                    <MDBCol>
                        <h5>WHAT'S NEW</h5>
                        <hr/>
                        <div className="whats_new">
                        {/* <BookCard className="book1" book = {booklist.results.books[0]}/>
                        <BookCard className="book2" book = {booklist.results.books[1]}/> */}
                        </div>
                    </MDBCol>
                    <MDBCol className="link">
                        <h5>LINKS</h5>
                        <hr/>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Authors</a></li>
                            <li><a>Events</a></li>
                            <li><a>Store</a></li>
                            <li><a>Contacts</a></li>
                        </ul>
                    </MDBCol>
                    <MDBCol>
                        <h5>GET IN TOUCH</h5>
                        <hr/>
                        <p>
                            Germany —
                            <br/>
                            785 15h Street, Office 478
                            Berlin, De 81566
                                <br/>
                            info@email.com
                        </p>
                        <hr/>
                        <p><span>+1 123 456 78 90</span></p>
                    </MDBCol>
                </div>
                <hr/>
                <p className="footer_end"><span style={{color: "red"}}>AncoraThemes</span> 2023. All Rights Reserved.</p>
            </div>
        </div>
    )
}