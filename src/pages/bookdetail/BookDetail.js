import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { AiOutlineStar } from "react-icons/ai";
import './BookDetail.css'
import { Container, Col, Row, Button, Input } from "reactstrap";
import BookCard from "../../components/BookCard/BookCard";
export default function BookDetail() {
    const { products, addCart, newBook } = useContext(AppContext);

    const newBookList = products.filter(item => (
        item.rank < 7
    ))
    return (
        <div className="bookdetail">
            <div className="bookdetail_title">
                <h1>Shop</h1>
            </div>
            <div className="bookdetail_content">
                <div className="bookdetail_img">
                    <img className="bookdetail_cover" src={newBook.book_image} />
                </div>
                <div className="bookdetail_infor">
                    <h1>{newBook.title}</h1>
                    <h4>Author: {newBook.author}</h4>
                    <span><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                    <h3>$ {newBook.book_image_width}</h3>
                    <p>{newBook.description}</p>
                    <h6>Publisher: {newBook.publisher}</h6>
                    <h6>Page Number: {newBook.book_image_height}</h6>
                    <h6>Weeks_on_list: {newBook.weeks_on_list}</h6>
                    <h6>Rank: {newBook.rank}</h6>
                    <div className="bookdetail_btn">
                        <Input className="bookdetail_btn_amount" type="number" defaultValue={1} />
                        <Button onClick={() => addCart(newBook.rank)} className="bookdetail_btn_add">
                            ADD +
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bookdetail_related">
                <h1>Related Books</h1>
                <hr />
                <Container>
                    <Row
                        md="6"
                        sm="2"
                        xs="1"
                    >
                        {
                            newBookList.map(item => (

                                <Col className='img'>
                                    <BookCard key={item.rank} book={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}