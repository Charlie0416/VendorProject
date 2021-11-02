import React, { useRef,useCallback,useState } from 'react'
import { Button, Modal, Form, Col,Dropdown,DropdownButton,InputGroup } from "react-bootstrap";
import { SERVICEACTION } from '../../reducer/customerServiceReducer'
import "react-datepicker/dist/react-datepicker.css";


export default React.memo(function CustomerServiceModal({ show, onHide, serviceDispatch, service }) {
    const title=useRef();
    const [category,setCategory]=useState("類別");
    const [status,setStatus]=useState("狀態")
    const customerName = useRef();
    const customerTel = useRef();
    const Email = useRef();
    let Day=new Date();
    console.log(Day)
    console.log(Day.getDate())
    let buildDate=Day.getFullYear()+"/"+(Day.getMonth()+1)+"/"+Day.getDate();
    const saveService = useCallback(() => {
        onHide();
        serviceDispatch({
            type: SERVICEACTION.ADD_SERVICE,
            serviceLoad: {
              title:title.current.value,
              category:category,
              customerName:customerName.current.value,
              customerTel:customerTel.current.value,
              Email:Email.current.value,
              status:status,
              buildDate:buildDate
            }
        })
    }, [onHide, serviceDispatch,category,status,buildDate])
    const modifyService = useCallback(() => {
        onHide();
        console.log(customerName.current.value)
        serviceDispatch({
            type: SERVICEACTION.MODIFY_SERVICE,
            serviceLoad: {
                id:service.id,
                title:title.current.value,
                category:category,
                customerName:customerName.current.value,
                customerTel:customerTel.current.value,
                Email:Email.current.value,
                status:status,
              
            }
        })
    }, [onHide, serviceDispatch, service,category,status])

    return (
        <>
            <Modal show={show} onHide={()=>onHide() } >
                <Modal.Header closeButton>
                    <Modal.Title>新增廠商</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <Form style={{ height: "100%", }}>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Col xs={12}>
                                        <Form.Label >廠商資訊 </Form.Label>

                                    </Col>
                                    <Form.Label column sm={3}>
                                        廠商名稱
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerName} defaultValue={service ? service.customerName : ""} placeholder="廠商名稱" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        廠商電話
                                     </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerTel} defaultValue={service ? service.customerTel : ""} placeholder="廠商電話" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        Email
                              </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="email" ref={Email} defaultValue={service ? service.Email : ""} placeholder="Email" />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Col xs={12}>
                                        <Form.Label >客服資訊 </Form.Label>

                                    </Col>
                                    <Form.Label column sm={3}>
                                        主旨
                              </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={title} defaultValue={service ? service.title : ""} placeholder="主旨" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        類別
                              </Form.Label>
                                    <Col sm={8}>
                                    <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            onSelect={(key) => setCategory(key)}
                                            title={category}
                                        >
                                            <Dropdown.Item eventKey={"商品"}>商品</Dropdown.Item>
                                            <Dropdown.Item eventKey={"物流"}>物流</Dropdown.Item>
                                            <Dropdown.Item eventKey={"服務"}>服務</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        狀態
                              </Form.Label>
                                    <Col sm={8}>
                                    <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            onSelect={(key) => setStatus(key)}
                                            title={status}
                                        >
                                            <Dropdown.Item eventKey={"已解決"}>已解決</Dropdown.Item>
                                            <Dropdown.Item eventKey={"未解決"}>未解決</Dropdown.Item>
                                         
                                        </DropdownButton>
                                    </Col>
                                </Form.Row>
                            
                            </Form.Group>
                           
                        </Form>
                    </div>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        關閉
                    </Button>
                    <Button variant="primary" onClick={service ? modifyService : saveService} >
                        儲存
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})