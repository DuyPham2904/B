import React, { useEffect, useState, useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import './BookCard.css';
import { CardBody, CardSubtitle, CardText, CardTitle, Col, Card, Button } from "reactstrap";
import { AppContext } from '../../AppContext';
export default function BookCard({ book }) {

    const { showDetail, addCart } = useContext(AppContext);
    return (
        <div className="bookcard">
            <Link style={{ textDecoration: "none" }} to="/BookLovers/bookdetail">
                <Card>
                    <img onClick={() => showDetail(book.rank)} className="cards_img" src={book.book_image} />
                    <CardBody>
                        <CardTitle tag="h4">
                            {book.title}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted">
                            {book.author}
                        </CardSubtitle>
                        <span><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                        <CardSubtitle style={{ marginTop: "15px" }} className="mb-2 text-muted">
                            <span className="bookcard_price">{"$" + book.book_image_width}</span>
                        </CardSubtitle>
                    </CardBody>
                    {/* <Button onClick={() => addCart(book.rank)}>
                        +
                    </Button> */}
                </Card>
            </Link>

        </div>
    )
}