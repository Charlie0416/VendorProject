import React, { useState, useContext } from 'react';
import { PageContext, PAGES } from "../hooks/usePage";
import { Form, Col, Button } from "react-bootstrap";

export default React.memo(function Login() {

    return (
        <div style={{
            position:"absolute",
            width:"100%",
            height:"100%"
        }}>
            <div style={{
                float:"left",
                width:"60%",
                height:"100%"
            }}>
                <img alt="" src={require("../images/loginimage.png")}
                     style={{
                         position:"relative",
                         height:"100%",
                     }}/>
            </div>
            <div style={{
                float:"left",
                width:"40%",
                height:"100%"
            }}>
                <img alt="" src={require("../images/loginlogo.png")}
                     style={{
                        position:"relative",
                        width:"75%",
                        left:"82%",
                        transform:"translate(-100%,50%)",
                     }}/>
                <div style={{
                        position:"relative",
                        width:"80%",
                        top:"10%",
                        left:"50%",
                        transform:"translate(-50%)"
                }}>
                    <img alt="" src={require("../images/logintitle.png")}
                         style={{
                             position:"relative",
                             width:"30%",
                             paddingBottom:"5%",
                         }}/>
                    
                    <Form>
                        <Form.Group>
                            <Col style={{
                                width:"100%",
                                transform:"translate(-2%)",
                                fontSize:"16pt",
                            }}>
                                USERNAME
                                <Form.Control type="text"
                                              style={{
                                                  backgroundColor:"#F2FDF5",
                                                  borderColor:"#80C269",
                                                  fontSize:"18pt",
                                              }}/>
                            </Col>
                            <br/>
                            <Col style={{
                                width:"100%",
                                transform:"translate(-2%)",
                                fontSize:"16pt",
                            }}>
                                PASSWORD
                                <Form.Control type="text"
                                              style={{
                                                  backgroundColor:"#F2FDF5",
                                                  borderColor:"#80C269",
                                                  fontSize:"18pt",
                                              }}/>
                            </Col>
                        </Form.Group>
                        <br/>
                        <br/>
                        <Button type="submit"
                                style={{
                                    position:"relative",
                                    left:"48%",
                                    transform:"translate(-50%)",
                                    backgroundColor:"#1F604A",
                                    fontWeight:"bold",
                                    width:"20%"
                                }}>
                            LOG IN
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
});