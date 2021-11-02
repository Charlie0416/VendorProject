import React, { useRef, useCallback, useState, useEffect } from 'react'
import { Button, Modal, Form, Col, DropdownButton, Dropdown, InputGroup } from "react-bootstrap";
import { MARKETACTION } from '../../reducer/MarketingReducer'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


export default React.memo(function MarketModal({ show, onHide, marketDispatch, market }) {
    const title = useRef();
    const [category, setCategory] = useState("祝福");
    const [sendTime, setSendTime] = useState(new Date());
    const [buildTime, setBuildTime] = useState(new Date());
    const [status,setStatus]=useState("1");
    const recipient = useRef();
    const content = useRef();
    useEffect(() => {
        if (market) {
            setBuildTime(market.buildTime);
            setSendTime(market.sendTime);
            setCategory(market.category);
        }
    }, [market])

    const [isTargetMode, setIsTargetMode] = useState(false);

    const saveMarket = useCallback(() => {
        let typesInputs = recipient.current.querySelectorAll('input:checked');
        let newTypesFilter = Array.from(typesInputs).map((input) => {
            return input.value;
        });
        console.log(recipient)
        setIsTargetMode(false);
        onHide();
        marketDispatch({
            type: MARKETACTION.ADD_MARKET,
            MarketLoad: {
                title: title.current.value,
                category: category,
                sendTime: sendTime,
                buildTime: buildTime,
                recipient: newTypesFilter,
                status: status,
                content: content.current.value,
                success: 0,
                failure: 0,
                total: 2,
            }
        })


    }, [onHide, marketDispatch, buildTime, sendTime, category,status])
    const modifyMarket = useCallback(() => {
        setIsTargetMode(false);
        onHide();
        let typesInputs = recipient.current.querySelectorAll('input:checked');
        let newTypesFilter = Array.from(typesInputs).map((input) => {
            return input.value;
        });
        console.log(title.current.value)
        marketDispatch({
            type: MARKETACTION.MODIFY_MARKET,
            MarketLoad: {
                marketId: market.id,
                title: title.current.value,
                category: category,
                sendTime: sendTime,
                buildTime: buildTime,
                recipient: newTypesFilter,
                status: status,
                content: content.current.value
            }
        })
    }, [onHide, marketDispatch, market, buildTime, sendTime, category,status])

    return (
        <>
            <Modal show={show} onHide={() => { setIsTargetMode(false); return (onHide()); }} size={`${isTargetMode ? "lg" : ""}`}>
                <Modal.Header closeButton>
                    <Modal.Title>發送郵件</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={`${isTargetMode ? "w-50 float-left" : null}`} >
                        <Form style={{ height: "100%", }}>
                            <Form.Group as={Col}>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        主旨
                                     </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control ref={title} defaultValue={market ? market.title : ""} placeholder="主旨" />
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
                                            <Dropdown.Item eventKey={"祝福"}>祝福</Dropdown.Item>
                                            <Dropdown.Item eventKey={"推銷"}>推銷</Dropdown.Item>
                                            <Dropdown.Item eventKey={"新產品"}>新產品</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        發送日期
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
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        建立日期
                                </Form.Label>
                                    <Col sm={8}>
                                        <DatePicker
                                            disabled={true}
                                            selected={buildTime}
                                            onChange={(e) => { setBuildTime(e); }}
                                            dateFormat="yyyy/MM/dd"
                                            minDate={sendTime}
                                            showDisabledMonthNavigation
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group ref={recipient} style={{ zIndex: 0 }}>
                                        <Form.Label column sm={4}>
                                            選擇發送對象
                                </Form.Label>
                                        <Col sm={12}>
                                            <Form.Check
                                                custom
                                                inline
                                                label="客戶等級低"
                                                type={"checkbox"}
                                                defaultChecked={market && market.recipient.indexOf("客戶等級低") > -1}
                                                value="客戶等級低"
                                                id={`custom-inline-checkbox-1`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="客戶等級中"
                                                type={"checkbox"}
                                                defaultChecked={market && market.recipient.indexOf("客戶等級中") > -1}
                                                value="客戶等級中"
                                                id={`custom-inline-checkbox-2`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="客戶等級高"
                                                type={"checkbox"}
                                                defaultChecked={market && market.recipient.indexOf("客戶等級高") > -1}
                                                value="客戶等級高"
                                                id={`custom-inline-checkbox-3`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="合作關係低"
                                                type={"checkbox"}
                                                defaultChecked={market && market.recipient.indexOf("合作關係低") > -1}
                                                value="合作關係低"
                                                id={`custom-inline-checkbox-4`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="合作關係中"
                                                value="合作關係中"
                                                type={"checkbox"}
                                                defaultChecked={market && market.recipient.indexOf("合作關係中") > -1}
                                                id={`custom-inline-checkbox-5`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="合作關係高"
                                                value="合作關係高"
                                                type={"checkbox"}
                                                defaultChecked={market && market.recipient.indexOf("合作關係高") > -1}
                                                id={`custom-inline-checkbox-6`}
                                            />
                                        </Col>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        內容
                                </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control as="textarea" rows="3" ref={content} defaultValue={market ? market.content : ""} />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column sm={3}>
                                        是否發送
                                     </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control
                                            as="select"
                                            className="mr-sm-2"
                                            id="inlineFormCustomSelect"
                                            custom
                                            onChange={(e)=>{setStatus(e.target.value);console.log(e.target.value)}}
                                        >
                                            <option value="1">已發送</option>
                                            <option value="2">未發送</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setIsTargetMode(false); return (onHide()); }}>
                        關閉
                    </Button>
                    <Button variant="primary" onClick={market ? modifyMarket : saveMarket} >
                        儲存
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})