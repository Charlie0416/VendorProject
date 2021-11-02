import React from 'react';
import {Accordion, Card, Button, ListGroup} from 'react-bootstrap'

export default React.memo(function menu() {
    return (
        <>
            <div style={{ position: "fixed", top: "15%", left: "0", width: "20%", backgroundColor: "white", height: "85%", zIndex:"1"}}>
                <div style={{position:"relative", width:"100%", height:"25%"}}>
                    <div style={{position:"relative", margin:"10px"}}>
                        <div style={{float:"left", width:"30%"}}>
                            <img alt="" src={require("../images/images.jpg")} style={{position:"relative", width:"100%"}}/>
                        </div>
                        <div style={{float:"left",width:"70%"}}>
                            <p style={{paddingLeft:"10px", marginBottom:"0"}}>姓名:XXXXXXX</p>
                            <p style={{paddingLeft:"10px", marginBottom:"0"}}>ID:XXXXXXX</p>
                        </div>
                    </div>
                    <img alt="logout" src={require("../images/logoutbutton.png")} style={{position:"absolute",top:"50%",right:"20px",height:"25px"}}/>
                </div>
                <Accordion>
                    <Card style={{marginBottom:"5px"}}>
                        <Accordion.Toggle as={"div"} eventKey="0">
                            <img alt="customer" src={require("../images/customermanagement.png")} style={{width:"100%"}}/>
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse> */}
                    </Card>
                    <Card style={{marginBottom:"5px"}}>
                        <Accordion.Toggle as={"div"} eventKey="1">
                            <img alt="customer" src={require("../images/opportunitymanagement.png")} style={{width:"100%"}}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{marginBottom:"5px"}}>
                        <Accordion.Toggle as={"div"} eventKey="2">
                            <img alt="customer" src={require("../images/contractmanagement.png")} style={{width:"100%"}}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{marginBottom:"5px"}}>
                        <Accordion.Toggle as={"div"} eventKey="3">
                            <img alt="customer" src={require("../images/marketingmanagement.png")} style={{width:"100%"}}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{marginBottom:"5px"}}>
                        <Accordion.Toggle as={"div"} eventKey="4">
                            <img alt="customer" src={require("../images/reportmanagement.png")} style={{width:"100%"}}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{marginBottom:"5px"}}>
                        <Accordion.Toggle as={"div"} eventKey="5">
                            <img alt="customer" src={require("../images/customerservicemanagement.png")} style={{width:"100%"}}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    );
});