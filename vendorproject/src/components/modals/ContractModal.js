import React, { useRef, useCallback, useState } from 'react'
import { Button, Modal, Form, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { contractACTION } from '../../reducer/contractReducer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default React.memo(function ContractModal({ show, onHide, contract, contractDispatch }) {

    const contractName = useRef();
    const vendor = useRef();
    const interfaceName = useRef();
    const contractStage = useRef();
    const note = useRef();

    const [day, setDay] = useState(new Date());

    const saveContract = useCallback(() => {
        onHide();
        contractDispatch({
            type: contractACTION.ADD_CONTRACT,
            contractLoad: {
                contractName: contractName.current.value,
                vendor: vendor.current.value,
                interfaceName: interfaceName.current.value,
                endDate: day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate(),
                contractStage: contractStage.current.value,
                note: note.current.value
            }
        })
    }, [onHide, contractDispatch,day])

    const modifyContract = useCallback(() => {
        onHide();
        contractDispatch({
            type: contractACTION.MODIFY_CONTRACT,
            contractLoad: {
                contractCode: contract.contractCode,
                contractName: contractName.current.value,
                vendor: vendor.current.value,
                interfaceName: interfaceName.current.value,
                endDate:day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate(),
                contractStage: contractStage.current.value,
                note: note.current.value
            }
        })
    }, [onHide, contractDispatch, day,contract])

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                新增合約
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column sm={3}>
                                合約名稱
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control ref={contractName} defaultValue={contract ? contract.contractName : ""}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column sm={3}>
                                廠商
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control ref={vendor} defaultValue={contract ? contract.vendor : ""}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column sm={3}>
                                窗口姓名
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control ref={interfaceName} defaultValue={contract ? contract.interfaceName : ""}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column sm={3}>
                                預定結案日
                            </Form.Label>
                            <Col sm={8}>
                                <DatePicker
                                selected={day}
                                onChange={(e) => setDay(e)}
                                dateFormat="yyyy/MM/dd"
                                minDate={new Date()}
                                showDisabledMonthNavigation
                            />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column sm={3}>
                                合約階段
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control ref={contractStage} defaultValue={contract ? contract.contractStage : ""}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column sm={3}>
                                附註
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control ref={note} defaultValue={contract ? contract.note : ""}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    關閉
                    </Button>
                <Button variant="primary" onClick={contract ? modifyContract : saveContract}>
                    儲存
                     </Button>
            </Modal.Footer>
        </Modal>
    );
})