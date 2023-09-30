import React, { useEffect, useState, useParams } from "react";
import { Row, Col, Container, Card, CardBody, CardText, CardImg, CardSubtitle, CardTitle, Button, CardGroup } from "reactstrap";
import './BookList.css';
import axios from 'axios';
import BookCard from "../BookCard/BookCard.js";
import { Link } from "react-router-dom";

export default function BookList() {
    const home_scroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const [booklist, setBookList] = useState([]);
    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Xi2GZHoZgcshVvC9NLhAWSkeL5hnjUZC`)
            .then(res => {
                const books = res?.data?.results?.books || [];
                setBookList(books);
            })
            .catch(error => console.log(error));
    }, []);
    const newBookList1 = booklist.filter(item => (
        item.rank < 7
    ));
    const newBookList2 = booklist.filter(item => (
        item.rank < 13 && item.rank > 6
    ));
    const newBookList3 = booklist.filter(item => (
        item.rank < 16 && item.rank > 10
    ));
    const handle_display_catagory = (num) => {
        if (num == 1) {
            document.querySelector(".book_catagory1").classList.remove("active");
            document.querySelector(".book_catagory2").classList.add("active");
            document.querySelector(".book_catagory3").classList.add("active");

            document.querySelector(".catagory1").classList.add("catagory")
            document.querySelector(".catagory2").classList.remove("catagory")
            document.querySelector(".catagory3").classList.remove("catagory")
        } else if (num == 2) {
            document.querySelector(".book_catagory1").classList.add("active");
            document.querySelector(".book_catagory2").classList.remove("active");
            document.querySelector(".book_catagory3").classList.add("active");

            document.querySelector(".catagory1").classList.remove("catagory")
            document.querySelector(".catagory2").classList.add("catagory")
            document.querySelector(".catagory3").classList.remove("catagory")
        } else if (num == 3) {
            document.querySelector(".book_catagory1").classList.add("active");
            document.querySelector(".book_catagory2").classList.add("active");
            document.querySelector(".book_catagory3").classList.remove("active");

            document.querySelector(".catagory1").classList.remove("catagory")
            document.querySelector(".catagory2").classList.remove("catagory")
            document.querySelector(".catagory3").classList.add("catagory")
        }
    }

    return (
        <div className="booklist">
            <div className="booklist_title">
                <h1>Discover Your Next Book</h1>
                <hr />
            </div>
            <div className="booklist_type">
                <ul>
                    <li className="catagory1 catagory" onClick={() => handle_display_catagory(1)}>NEW RELEASES</li>
                    <li className="catagory2" onClick={() => handle_display_catagory(2)}>AWARD WINNERS</li>
                    <li className="catagory3" onClick={() => handle_display_catagory(3)}>BEST SELLERS</li>
                </ul>
            </div>
            <div className="book_catagory1">
                <CardGroup className="booklist_list">
                    {
                        newBookList1.map(item => (
                            <BookCard key={item.rank} book={item} />
                        ))
                    }
                </CardGroup>
            </div>
            <div className="book_catagory2 active">
                <CardGroup className="booklist_list">
                    {
                        newBookList2.map(item => (
                            <BookCard key={item.rank} book={item} />
                        ))
                    }
                </CardGroup>
            </div>
            <div className="book_catagory3 active">
                <CardGroup className="booklist_list">
                    {
                        newBookList3.map(item => (
                            <BookCard key={item.rank} book={item} />
                        ))
                    }
                </CardGroup>
            </div>
            <Link to='/BookLvers/bookstore'>
                <Button onClick={home_scroll} className="booklist_btn_discover">
                    DISCOVER MORE BOOKS
                </Button>
            </Link>
        </div>




    )
}