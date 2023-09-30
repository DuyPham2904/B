import React from "react";
import './Search.css';
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Form, Row, Col, FormGroup, Label, FormText, Table } from 'reactstrap';

import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import swal from "sweetalert";

export default function Search() {
    const [state, handleSubmit] = useForm("xbjvzwyw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    const test = () => {
        swal("Duy")
    }
    return (
        <div className="book_search">

            <div className="book_search_title">
                <h1>Search</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <FormGroup row>
                        <Label
                            for="phoneNumber"
                            sm={2}
                        >
                            Phone Number*
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="customer_phone"
                                name="phoneNumber"
                                placeholder="Enter your phone number..."
                                type="number"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="Address"
                            sm={2}
                        >
                            Delivery Address*
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="customer_address"
                                name="address"
                                placeholder="Enter your address..."
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button onClick={test} disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )

}