import React, { useRef,useCallback,useState } from 'react'
import { Button, Modal, Form, Col,ButtonGroup,ToggleButton } from "react-bootstrap";
import { CUSTOMERACTION } from '../../reducer/customerReducer'
import "react-datepicker/dist/react-datepicker.css";
import { useMemo } from 'react';
import DatePicker from "react-datepicker";

export default React.memo(function CustomerModal({ show, onHide, customerDispatch, customer }) {
    const customerName = useRef();
    const customerTel = useRef();
    const customerAddress = useRef();
    const interfaceName = useRef();
    const interfaceTel = useRef();
    const interfaceEmail = useRef();
    const [sendTime, setSendTime] = useState(new Date());

    const [isTargetMode,setIsTargetMode]=useState(false);

    const [customerLevel,setCustomerLevel]=useState(
        ()=>{
            if( customer){
                if(customer.customerLevel){
                    return customer.customerLevel
                }else{
                  return  null
                }
                
            }else {
                return null
            }
        }
    );
    const [cooperateTag,setRelationship]=useState(()=>{
        if( customer){
            if(customer.cooperateTag){
                return customer.cooperateTag
            }else{
              return  null
            }
            
        }else {
            return null
        }
    })
    const allLevel =useMemo(()=>{
     return   [
            { name: 'L', value: '低' },
            { name: 'M', value: '中' },
            { name: 'H', value: '高' },
          ]
    },[] )
    const saveCustomer = useCallback(() => {
        setIsTargetMode(false);
        onHide();
        customerDispatch({
            type: CUSTOMERACTION.ADD_CUSTOMER,
            customerLoad: {
                customerName: customerName.current.value,
                customerTel: customerTel.current.value,
                customerAddress: customerAddress.current.value,
                interfaceName: interfaceName.current.value,
                interfaceTel: interfaceTel.current.value,
                interfaceEmail: interfaceEmail.current.value,
                customerLevel:customerLevel,
                cooperateTag:cooperateTag
            }
        })
    }, [onHide, customerDispatch,customerLevel,cooperateTag])
    const modifyCustomer = useCallback(() => {
        setIsTargetMode(false);
        onHide();
        console.log(customerName.current.value)
        customerDispatch({
            type: CUSTOMERACTION.MODIFY_CUSTOMER,
            customerLoad: {
                customerId: customer.id,
                customerName: customerName.current.value,
                customerTel: customerTel.current.value,
                customerAddress: customerAddress.current.value,
                interfaceName: interfaceName.current.value,
                interfaceTel: interfaceTel.current.value,
                interfaceEmail: interfaceEmail.current.value,
                customerLevel:customerLevel,
                cooperateTag:cooperateTag
            }
        })
    }, [onHide, customerDispatch, customer,customerLevel,cooperateTag])

    return (
        <>
            <Modal show={show} onHide={()=>{setIsTargetMode(false);return(onHide()); }} size={`${isTargetMode?"lg":""}`}>
                <Modal.Header closeButton>
                    <Modal.Title>新增購買紀錄</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={`${isTargetMode?"w-50 float-left":null}`} >
                        <Form style={{ height: "100%", }}>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        廠商名稱
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerName} defaultValue={customer ? customer.customerName : ""}/>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        規格
                                     </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerTel} defaultValue={customer ? customer.customerTel : ""}/>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        數量
                              </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerAddress} defaultValue={customer ? customer.customerAddress : ""}/>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        單位
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerAddress} defaultValue={customer ? customer.customerAddress : ""}/>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        單價
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerAddress} defaultValue={customer ? customer.customerAddress : ""}/>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        購買日期
                                    </Form.Label>
                                    <Col sm={8}>
                                        <DatePicker
                                            selected={sendTime}
                                            onChange={(e) => { setSendTime(e); }}
                                            dateFormat="yyyy/MM/dd"
                                            minDate={new Date()}
                                            showDisabledMonthNavigation
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{setIsTargetMode(false);return(onHide()); }}>
                        關閉
                    </Button>
                    <Button variant="primary" onClick={customer ? modifyCustomer : saveCustomer} >
                        儲存
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})