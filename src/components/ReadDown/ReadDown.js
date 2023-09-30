import React from 'react';
import { BiSolidRightArrowSquare } from "react-icons/bi";
import positive from "../../assets/images/positive-book.jpg";
import vegetable from "../../assets/images/vegetable-book.jpg";
import kid from "../../assets/images/kid-book.jpg";
import {
    MDBCardLink,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import './ReadDown.css';
export default function ReadDown() {

    return (
        <div className='readdown_content'>
            <div className='title'>
                <h1 className='main_title'>The ReadDown</h1>
                <hr />
            </div>
            <div className='readdown'>
                <MDBCardLink target="_blank" href='https://www.scholastic.com/parents/books-and-reading/book-lists-and-recommendations/favorites-classics/13-books-kids-should-read-turning-13.html'>
                    <MDBCard>
                        <MDBCardImage src={kid} position='top' alt='...' />
                        <MDBCardBody className='cbody1'>
                            <MDBCardTitle>20 books</MDBCardTitle>
                            <MDBCardText>
                                to Help You Bring Up a Child
                            </MDBCardText>
                            <BiSolidRightArrowSquare />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardLink>
                <MDBCardLink href='https://www.russh.com/best-cook-books/' target="_blank">
                    <MDBCard>
                        <MDBCardImage src={vegetable} position='top' alt='...' />
                        <MDBCardBody className='cbody2'>
                            <MDBCardTitle>15 books</MDBCardTitle>
                            <MDBCardText>
                                to Help You Learn Cooking
                            </MDBCardText>
                            <BiSolidRightArrowSquare />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardLink>
                <MDBCardLink target="_blank" href='https://www.blinkist.com/en/content/collections/top-15-self-help-blinks?utm_source=gsn&utm_medium=paid&utm_campaign=20513501716&utm_content=153566186792&utm_term=__672181229464_c_dsa-1461748269778_CjwKCAjw3oqoBhAjEiwA_UaLthiMxr-kJQUgyOedznSQnwg3Q1UM2gBiNgDYr1iDBTdxe5XghJyuExoCm5oQAvD_BwE&gad=1&gclid=CjwKCAjw3oqoBhAjEiwA_UaLthiMxr-kJQUgyOedznSQnwg3Q1UM2gBiNgDYr1iDBTdxe5XghJyuExoCm5oQAvD_BwE'>
                    <MDBCard>
                        <MDBCardImage src={positive} position='top' alt='...' />
                        <MDBCardBody className='cbody3'>
                            <MDBCardTitle>15 books </MDBCardTitle>
                            <MDBCardText>
                                to Help You Stay Positive
                            </MDBCardText>
                            <BiSolidRightArrowSquare />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardLink>
            </div>
        </div>
    )
}