import './Bookstore.css'
import axios from 'axios';
import { CardGroup, Button, Col, Container, Row } from "reactstrap";
import React, { useEffect, useState, useParams, useContext } from "react";
import BookCard from '../../components/BookCard/BookCard';
import Menu from '../../components/Menu/Menu';
import ViewBlog from '../../components/ViewBlog/ViewBlog';


export default function Bookstore() {
    const [booklist, setBookList] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Xi2GZHoZgcshVvC9NLhAWSkeL5hnjUZC`)
            .then(res => {
                const books = res?.data?.results?.books || [];
                setBookList(books);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className='bookstore'>
            <div className='bookstore_title'>
                <h1>Store</h1>
            </div>
            <div className='bookstore_viewblog'>
                <ViewBlog />
            </div>

            <div className='bookstore_content'>
                {/* <div className='bookstore_filter'>

                </div> */}
                <div className='bookstore_list'>
                    <Container>
                        <Row
                            md="6"
                            sm="2"
                            xs="1"
                        >
                            {
                                booklist.map(item => (
                                    <Col className='img'>
                                        <BookCard key={item.rank} book={item} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div >
    )
}