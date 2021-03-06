import React, { useRef, useCallback, useState,useEffect } from 'react'
import { Button, Modal, Form, Col, ButtonGroup, ToggleButton,DropdownButton,Dropdown} from "react-bootstrap";
import { BUSINESSACTION } from '../../reducer/BusinessReducer'
import "react-datepicker/dist/react-datepicker.css";
import { useMemo } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default React.memo(function CustomerModal({ show, onHide, businessDispatch, business }) {
    const customerName = useRef();
    const bidName = useRef();
    const [products,setProducts] = useState("");
    const [startDate,setSartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    useEffect(()=>{
        if(business){
            setEndDate(business.endDate)
            setSartDate(business.startDate)
        }
    },[business])

    const [isTargetMode, setIsTargetMode] = useState(false);

    const [importLevel, setImportLevel] = useState(
        () => {
            if (business) {
                if (business.importLevel) {
                    return business.importLevel
                } else {
                    return null
                }

            } else {
                return null
            }
        }
    );
    const [budgetLevel, setBudgetLevel] = useState(() => {
        if (business) {
            if (business.budgetLevel) {
                return business.budgetLevel
            } else {
                return null
            }

        } else {
            return null
        }
    })
    const [feasibilityLevel, setFeasibilityLevel] = useState(() => {
        if (business) {
            if (business.feasibilityLevel) {
                return business.feasibilityLevel
            } else {
                return null
            }

        } else {
            return null
        }
    })
    const allLevel = useMemo(() => {
        return [
            { name: 'Y', value: '???' },
            { name: 'N', value: '???' },
        ]
    }, [])
    const saveCustomer = useCallback(() => {
      
        if(startDate>endDate){
           alert("??????????????????")
        }else{
            setIsTargetMode(false);
            onHide();
            businessDispatch({
                type: BUSINESSACTION.ADD_BUSINESS,
                BusinessLoad: {
                    customerName: customerName.current.value,
                    bidName: bidName.current.value,
                    startDate: startDate,
                    endDate: endDate,
                    importLevel: importLevel,
                    budgetLevel: budgetLevel,
                    feasibilityLevel: feasibilityLevel,
    
                }
            })
        }
      
    }, [onHide, businessDispatch, importLevel, budgetLevel, feasibilityLevel,endDate,startDate])
    const modifyCustomer = useCallback(() => {
        setIsTargetMode(false);
        onHide();
        console.log(customerName.current.value)
        businessDispatch({
            type: BUSINESSACTION.MODIFY_BUSINESS,
            BusinessLoad: {
                businessId: business.id,
                customerName: customerName.current.value,
                bidName: bidName.current.value,
                startDate: startDate,
                endDate: endDate,
                importLevel: importLevel,
                budgetLevel: budgetLevel,
                feasibilityLevel: feasibilityLevel,
            }
        })
    }, [onHide, businessDispatch, business, importLevel, budgetLevel, feasibilityLevel,endDate,startDate])

    return (
        <>
            <Modal show={show} onHide={() => { setIsTargetMode(false); return (onHide()); }} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>???????????????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-50 float-left" >
                        <Form style={{ height: "100%", }}>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ??????
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={bidName} defaultValue={business ? business.bidName : ""} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ?????????
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={bidName} defaultValue={business ? business.bidName : ""} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ??????
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={bidName} defaultValue={business ? business.bidName : ""} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ??????
                                     </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerName} defaultValue={business ? business.customerName : ""} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ??????
                                    </Form.Label>
                                    <Col sm={8}>
                                        <DropdownButton
                                            onSelect={(key)=>{
                                                switch(key){
                                                    case "1":
                                                        return setProducts("?????????");
                                                    case "2":
                                                        return setProducts("?????????");
                                                    case "3":
                                                        return setProducts("?????????");
                                                    default:
                                                        return null;
                                                }
                                            }}
                                            title={products ? products : "????????????"}>
                                            <Dropdown.Item eventKey="1">?????????</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">?????????</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">?????????</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ??????
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={customerName} defaultValue={business ? business.customerName : ""} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            
                        </Form>
                    </div>
                    <div style={{ float: "left", width: "50%", display:"block"}}>
                        <Form style={{ height: "100%", }}>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        bluesign
                                     </Form.Label>
                                    <Col sm={8}>
                                        <ButtonGroup toggle>
                                            {allLevel.map((radio, idx) => (
                                                <ToggleButton
                                                    key={idx}
                                                    type="radio"
                                                    variant="secondary"
                                                    name="radio"
                                                    value={radio.name}
                                                    checked={importLevel === radio.name}
                                                    onChange={(e) => setImportLevel(e.currentTarget.value)}
                                                >
                                                    {radio.value}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        GRS
                                     </Form.Label>
                                    <Col sm={8}>
                                        <ButtonGroup toggle>
                                            {allLevel.map((radio, idx) => (
                                                <ToggleButton
                                                    key={idx}
                                                    type="radio"
                                                    variant="secondary"
                                                    name="radio1"
                                                    value={radio.name}
                                                    checked={budgetLevel === radio.name}
                                                    onChange={(e) => setBudgetLevel(e.currentTarget.value)}
                                                >
                                                    {radio.value}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        ??????
                                     </Form.Label>
                                    <Col sm={8}>
                                        <ButtonGroup toggle>
                                            {allLevel.map((radio, idx) => (
                                                <ToggleButton
                                                    key={idx}
                                                    type="radio"
                                                    variant="secondary"
                                                    name="radio1"
                                                    value={radio.name}
                                                    checked={feasibilityLevel === radio.name}
                                                    onChange={(e) => setFeasibilityLevel(e.currentTarget.value)}
                                                >
                                                    {radio.value}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setIsTargetMode(false); return (onHide()); }}>
                        ??????
                    </Button>
                    <Button variant="primary" onClick={business ? modifyCustomer : saveCustomer} >
                        ??????
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})