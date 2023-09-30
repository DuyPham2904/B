import './CheckOut.css';
import React, { useContext } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button, FormText, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AppContext } from "../../AppContext";
import swal from 'sweetalert';
import { useForm, ValidationError } from '@formspree/react';
export default function CheckOut() {
    const { cart } = useContext(AppContext);

    const customer_infor = {};

    const [state, handleSubmit] = useForm("xbjvzwyw");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const handle_checkout = () => {
        let ipt_name = document.querySelector('#customer_name').value;
        let ipt_email = document.querySelector('#email').value;
        let ipt_address = document.querySelector('#customer_address').value;
        let ipt_phone = document.querySelector('#customer_phone').value;
        let arrPayment = document.getElementsByName("radio1");
        let ipt_paymentval = "";
        for (var i = 0; i < arrPayment.length; i++) {
            if (arrPayment[i].checked === true) {
                ipt_paymentval = arrPayment[i].value;
            }
        }
        if (ipt_name == '') {
            swal("Billing Your Name is a required field")
        } else
            if (ipt_email == '') {
                swal("Billing Your Email is a required field")
            } else if (ipt_address == '') {
                swal("Billing Your Address is a required field")
            } else if (ipt_phone == '') {
                swal("Billing Your Phone Number is a required field")
            } else {
                customer_infor.name = document.querySelector('#customer_name').value
                customer_infor.email = document.querySelector('#email').value
                customer_infor.address = document.querySelector('#customer_address').value
                customer_infor.phone_number = document.querySelector('#customer_phone').value
                customer_infor.ipt_payment = ipt_paymentval;
                window.location = "/order_received";
            }

        if (localStorage.getItem('customer_infor')) {
            window.localStorage.removeItem('customer_infor')
        }
        localStorage.setItem('customer_infor', JSON.stringify(customer_infor));

        //Save order infor at order.txt

        // const fs = require('fs');

        // fs.appendFile('oder.txt', JSON.stringify(customer_infor), err => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        // });
    }

    return (
        <div className='checkout'>
            <div className="checkout_title">
                <h1>Checkout</h1>

            </div>
            <div className='checkout_content'>
                <div className='checkout_detail'>
                    <h2>Billing details</h2>
                    <hr />
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label
                                for="yourName"
                                sm={2}
                            >
                                Your Name*
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="customer_name"
                                    name="name"
                                    placeholder="Enter your name..."
                                    type="text"
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
                                for="email"
                                sm={2}
                            >
                                Email Address*
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your phone email..."
                                    type="email"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="exampleText"
                                sm={2}
                            >
                                Order notes (optional)
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                />
                            </Col>
                        </FormGroup>
                    </Form>

                </div>
                <div className='checkout_pay'>
                    <div className='checkout_yourorder'>
                        <h3>Your order</h3>
                        <hr />
                        <div className='checkout_yourorder_content'>
                            <Table>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>$ {cart.reduce((kq, item) => kq += item.book_image_width * item.price, 0)}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>$ {cart.reduce((kq, item) => kq += item.book_image_width * item.price, 0)}</td>
                                </tr>
                            </Table>
                        </div>
                    </div>
                    <div className='checkout_payment'>
                        <h3>Payment</h3>
                        <hr />
                        <div className='checkout_payment_content'>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Input
                                        checked
                                        name="radio1"
                                        type="radio"
                                        value='Cash on delivery'
                                    />
                                    {' '}
                                    <Label check>
                                        Cash on delivery
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="radio1"
                                        type="radio"
                                        value='Paypal'
                                    />
                                    {' '}
                                    <Label check>
                                        PayPal
                                    </Label>
                                </FormGroup>
                                <FormGroup
                                    check
                                    disabled
                                >
                                    <Input
                                        disabled
                                        name="radio1"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        elegro Crypto Payment
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </div>
                    </div>
                    <Button onClick={handle_checkout} className='checkout_btn_finish'>
                        FINISH
                    </Button>


                </div>
            </div>

        </div>
    )
}