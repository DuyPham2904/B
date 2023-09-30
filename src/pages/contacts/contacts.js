import React from "react";
import { useRef } from "react";
import "./contacts.css";
import { Col, FormGroup, Label, Input, Button, Form, Row } from "reactstrap";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";
export default function Contacts() {

    const form = useRef();
    const sendEmail = (e) => {
        if (
            document.querySelector('.contact_ipt_name').value == " " ||
            document.querySelector(".contact_ipt_email").value == " " ||
            document.querySelector(".contact_ipt_phone").value == " " ||
            document.querySelector(".contact_ipt_subject").value == " " ||
            document.querySelector(".contact_btn_send").value == " "
        ) {
            swal("All those fields do not empty!!!")
        } else {
            e.preventDefault();
            emailjs.sendForm('service_ib267mb', 'template_icq9var', form.current, 'Jriy9fdtaNawm__Ze')
                .then((result) => {
                    console.log(result.text);
                    swal("Submitted successfully");
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }
    };
    return (
        <div className="contacts">
            <div className="contacts_title">
                <h1>Contacts</h1>
            </div>
            <div className="contacts_content">
                <div className="contacts_content_left">
                    <h2>Contact Us</h2>
                    <hr />
                    <p>
                        Germany —
                        <br />
                        785 15h Street, Office 478
                        Berlin, De 81566
                        <br />
                        info@email.com
                    </p>
                    <hr />
                    <p><span style={{ color: 'red' }}>+1 123 456 78 90</span></p>

                </div>
                <div className="contacts_content_right">
                    <form className="contacts_content_right_form" ref={form} onSubmit={sendEmail}>
                        <input className="contact_ipt_name" placeholder="Name*" type="text" name="user_name" />
                        <input className="contact_ipt_email" placeholder="Email Address*" type="email" name="user_email" />
                        <input className="contact_ipt_phone" placeholder="Phone Number*" type="number" name="phone" />
                        <input className="contact_ipt_subject" placeholder="Subject*" type="text" name="subject" />
                        <textarea className="contact_text_message" placeholder="Message*" type="text" name="message"></textarea>
                        <button className="contact_btn_send" type="submit">Send Message</button>
                    </form>
                    {/* <Form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col md={6}>
                                <Input
                                    id="contact_name"
                                    name="user_name"
                                    placeholder="Name"
                                    type="text"
                                />
                            </Col>
                            <Col md={6}>
                                <Input
                                    id="contact_email"
                                    name="user_email"
                                    placeholder="Email Address"
                                    type="email"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Input required
                                    id="contact_phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    type="number"
                                />
                            </Col>
                            <Col md={6}>
                                <Input
                                    required
                                    id="contact_subject"
                                    name="subject"
                                    placeholder="Subject"
                                    type="text"
                                />
                            </Col>
                            <Input required
                                id="contact_message"
                                name="message"
                                placeholder="Message"
                            />
                        </Row>
                        <FormGroup check>
                            <Input required
                                id="contact_check"
                                name="check"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="check"
                            >
                                I agree that my submitted data is being collected and stored.
                            </Label>
                        </FormGroup>

                        <Button type="submit" className="contact_btn_send">
                            SEND MESSAGE
                        </Button>
                    </Form> */}
                </div>
            </div >
        </div >
    )
}