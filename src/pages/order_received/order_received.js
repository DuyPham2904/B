import './order_received.css';
import React, { useContext } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button, FormText, Table } from 'reactstrap';
import { AppContext } from "../../AppContext";
import swal from 'sweetalert';

export default function Order_received() {
    const { cart } = useContext(AppContext);
    const Delivery_Infor = JSON.parse(localStorage.getItem('customer_infor'));
    let order_number = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    swal("Your order has been received.")
    return (
        <div className='order_received'>
            <div className="checkout_title">
                <h1>Order Details</h1>
            </div>
            <div className='order_received_content'>
                <div className='order_received_infor'>
                    <h3 style={{ color: "#bf0417" }}>Thank you. Your order has been received.</h3>
                    <Table className='order_received_infor_gen'>
                        <tr>
                            <th><h5>Order number:</h5></th>
                            <td><h5>{order_number}</h5></td>
                        </tr>
                        <tr>
                            <th><h5>Date:</h5></th>
                            <td><h5>23/09/2023</h5></td>
                        </tr>
                        <tr>
                            <th><h5>Subtotal:</h5></th>
                            <td><h5>$ {cart.reduce((kq, item) => kq += item.book_image_width * item.price, 0)}</h5></td>
                        </tr>
                        <tr>
                            <th><h5>Payment method:</h5></th>
                            <td><h5>{Delivery_Infor.ipt_payment}</h5></td>
                        </tr>
                        <tr>
                            <th><h5>Total:</h5></th>
                            <td><h5>$ {cart.reduce((kq, item) => kq += item.book_image_width * item.price, 0)}</h5></td>
                        </tr>
                    </Table>

                </div>
                <div className='order_received_detail'>
                    <h3 style={{ color: "#bf0417" }}>Order details</h3>
                    <Table className='order_received_infor_details' striped>
                        <tbody>
                            {
                                cart.map((item, index) => (
                                    <tr className="cart_product" key={index}>
                                        <th>
                                            {item.title}
                                        </th>
                                        <td>
                                            x{"   " + item.price + "  "}
                                        </td>
                                        <td>
                                            {"$ " + item.book_image_width}
                                        </td>
                                        <td>
                                            {"$ " + item.book_image_width * item.price}
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>


                </div>
            </div>

        </div>
    )
}