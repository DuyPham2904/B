import React from "react";
import { MDBCol } from 'mdb-react-ui-kit';
import './ChooseYourBook.css';
import slider1 from "../../assets/images/slider1.jpg";
import drama from "../../assets/images/drama-book.jpg";
import mystery from "../../assets/images/mystery-book.jpg";
import recipe from "../../assets/images/recipe-book.jpg";
import novels from "../../assets/images/novels-book.png";
import { Link } from "react-router-dom";
import { BiSolidRightArrowSquare } from "react-icons/bi";

export default function ChooseYourBook() {
    return (
        <div className="content">
            <div className="content_title">
                <h1>Choose Your Book!</h1>
                <hr />
            </div>
            <div className="d-flex align-items-start bg-light mb-3">
                <MDBCol className="card_type">
                    <Link>
                        <div id="book_type">
                            <p className="book_type">Drama</p>
                            <p className="show_more">Shop Now <BiSolidRightArrowSquare /></p>
                        </div>
                        <div id="thumbnail">
                            <img className="thumbnail" src={drama} />
                        </div>
                    </Link>
                </MDBCol>
                <MDBCol className="card_type">
                    <Link>
                        <div id="book_type">
                            <p className="book_type">Mystery</p>
                            <p className="show_more">Shop Now <BiSolidRightArrowSquare /></p>
                        </div>
                        <div id="thumbnail">
                            <img className="thumbnail" src={mystery} />
                        </div>
                    </Link>
                </MDBCol>
                <MDBCol className="card_type">
                    <Link>
                        <div id="book_type">
                            <p className="book_type">Novels</p>
                            <p className="show_more">Shop Now <BiSolidRightArrowSquare /></p>
                        </div>
                        <div id="thumbnail">
                            <img className="thumbnail" src={novels} />
                        </div>
                    </Link>
                </MDBCol>
                <MDBCol className="card_type">
                    <Link>
                        <div id="book_type">
                            <p className="book_type">Recipe Books</p>
                            <p className="show_more">Shop Now <BiSolidRightArrowSquare /></p>
                        </div>
                        <div id="thumbnail">
                            <img className="thumbnail" src={recipe} />
                        </div>
                    </Link>
                </MDBCol>

            </div>
            <button className="btn_more"> DISCOVER MORE CATEGORIES </button>
        </div>
    )
}