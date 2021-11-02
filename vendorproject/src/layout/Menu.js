import React, { useContext,useCallback } from 'react';
import { Accordion, Card,ListGroup } from 'react-bootstrap'
import { PAGES, PageSetter } from "../hooks/usePage";
export default React.memo(function Menu({user,setIsLogin}) {
    const setPage = useContext(PageSetter);
    const handlePageSelect=useCallback((page)=>{
        setPage(page)
    })
    return (
        <>
            <div style={{ position: "fixed", top: "15%", left: "0", width: "20%", backgroundColor: "white", height: "85%", zIndex: 5,minWidth:"200px"}}>
                <div style={{ position: "relative", width: "100%", height: "25%" }}>
                    <div style={{ position: "relative", margin: "10px" }}>
                        <div style={{ float: "left", width: "30%" }}>
                            <img alt="" src={require("../images/employee.png")} style={{ position: "relative", width: "100%" }} />
                        </div>
                        <div style={{ float: "left", width: "70%" }}>
                            <p style={{ paddingLeft: "10px", marginBottom: "0" }}>姓名:{user.name}</p>
                            <p style={{ paddingLeft: "10px", marginBottom: "0" }}>ID:{user.id}</p>
                        </div>
                    </div>
                    <img alt="logout" src={require("../images/calendar.png")}
                        onClick={()=>handlePageSelect(PAGES.HOME)}
                    style={{ position: "absolute", top: "50%", right: "80px", height: "25px" }} />
                    <img alt="logout" src={require("../images/logoutbutton.png")}
                        onClick={()=>setIsLogin(false)}
                    style={{ position: "absolute", top: "50%", right: "20px", height: "25px" }} />
                </div>
                <Accordion>
                    <Card style={{ marginBottom: "5px" }}>
                        <Accordion.Toggle as={"div"} eventKey="0">
                            <img alt="customer" src={require("../images/suppliermanagement.png")} style={{ width: "100%" }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style={{padding:0}}>
                                <ListGroup >
                                    <ListGroup.Item    onClick={() => handlePageSelect(PAGES.BUSSINESS)}>
                                      供應商資訊
                                    </ListGroup.Item>
                                    <ListGroup.Item    onClick={() => handlePageSelect(PAGES.SPAREPARTS)}>
                                      零備品供應商資訊
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ marginBottom: "5px" }}>
                        <Accordion.Toggle as={"div"} eventKey="1">
                            <img alt="customer" src={require("../images/purchaserecord.png")} style={{ width: "100%" }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body  style={{padding:0}}>  
                                <ListGroup >
                                    <ListGroup.Item action   onClick={() => handlePageSelect(PAGES.CUSTOMER)}>
                                      購買紀錄
                                    </ListGroup.Item>
                                    <ListGroup.Item action   onClick={() => handlePageSelect(PAGES.PURCHASE)}>
                                      採購紀錄
                                    </ListGroup.Item>
                                    <ListGroup.Item action   onClick={() => handlePageSelect(PAGES.REPAIR)}>
                                      維修紀錄
                                    </ListGroup.Item>
                                    <ListGroup.Item action   onClick={() => handlePageSelect(PAGES.DOING)}>
                                      施做紀錄
                                    </ListGroup.Item>
                                </ListGroup>
                                </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ marginBottom: "5px" }}>
                        <Accordion.Toggle as={"div"} eventKey="2">
                            <img alt="customer" src={require("../images/costreport.png")} style={{ width: "100%" }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body style={{ padding: "0" }}>
                                <ListGroup >
                                    <ListGroup.Item action onClick={() => handlePageSelect(PAGES.REPORT)}>
                                        成本報表
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    {/* <Card style={{ marginBottom: "5px" }}>
                        <Accordion.Toggle as={"div"} eventKey="3">
                            <img alt="customer" src={require("../images/marketingmanagement.png")} style={{ width: "100%" }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body style={{ padding: "0" }}>
                                <ListGroup >
                                    <ListGroup.Item action onClick={() => handlePageSelect(PAGES.MARKETING)}>
                                        全部行銷郵件
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ marginBottom: "5px" }}>
                        <Accordion.Toggle as={"div"} eventKey="4">
                            <img alt="customer" src={require("../images/reportmanagement.png")} style={{ width: "100%" }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body style={{ padding: "0" }}>
                                <ListGroup >
                                    <ListGroup.Item action onClick={() => handlePageSelect(PAGES.CONTRACT)}>
                                        報表資訊
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ marginBottom: "5px" }}>
                        <Accordion.Toggle as={"div"} eventKey="5">
                            <img alt="customer" src={require("../images/customerservicemanagement.png")} style={{ width: "100%" }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body style={{ padding: "0" }}>
                                <ListGroup >
                                    <ListGroup.Item action onClick={() => handlePageSelect(PAGES.CUSTOMERSERVICE)}>
                                        客服紀錄
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card> */}
                </Accordion>
            </div>
        </>
    );
});