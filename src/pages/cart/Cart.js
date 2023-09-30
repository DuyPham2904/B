import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import './Cart.css';
import { AppContext } from "../../AppContext";
import { InputGroup, Input, Button, InputGroupText, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
export default function Cart() {
    const { handle_Decrease, handle_Increase, cart, deleteCart } = useContext(AppContext);
    const moveToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <div className="cart">
            <div className="cart_title">
                <h1>Cart</h1>
            </div>
            <div className="cart_content">
                <Container>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>
                                    <h4>Product</h4>
                                </th>
                                <th>

                                </th>
                                <th>
                                    <h4>Price</h4>
                                </th>
                                <th>
                                    <h4>Quantity</h4>
                                </th>
                                <th>
                                    <h4>Subtotal</h4>
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => (
                                    <tr className="cart_product" key={index}>
                                        <td>
                                            <img className="cart_img" src={item.book_image} />
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {"$ " + item.book_image_width}
                                        </td>
                                        <td>

                                            <button onClick={() => handle_Decrease(item.rank)}>-</button>
                                            {"   " + item.price + "  "}
                                            <button onClick={() => handle_Increase(item.rank)}>+</button>
                                        </td>
                                        <td>
                                            {"$ " + item.book_image_width * item.price}
                                        </td>
                                        <td>
                                            <button onClick={() => deleteCart(item.rank)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div className="cart_btn">
                <div>
                    <InputGroup className="cart_coupon">
                        <Input placeholder="Enter your coupon..." />
                        <Button className="cart_btn_coupon">
                            Apply Coupon
                        </Button>
                    </InputGroup>
                </div>
                <div>
                    <Link to="/BookLvers/bookstore" style={{ textDecoration: "none" }}>
                        <Button onClick={moveToTop} className="cart_btn_countinue" outline>
                            CONTINUE SHOPPING
                        </Button>
                    </Link>
                </div>
            </div >
            <div className="cart_totals">
                <h3>Cart totals</h3>
                <Table bordered>
                    <tr>
                        <th>Subtotal</th>
                        <td>$ {cart.reduce((kq, item) => kq += item.book_image_width * item.price, 0)}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>$ {cart.reduce((kq, item) => kq += item.book_image_width * item.price, 0)}</td>
                    </tr>
                </Table>
                <Link to="/BookLvers/cart/checkout" style={{ textDecoration: "none" }} >
                    <Button className="cart_btn_tocheckout">
                        PROCEED TO CHECKOUT
                    </Button>
                </Link>
            </div>
        </div >
    )
}