
import React, {  useReducer, useState, useRef } from 'react';
import CustomerTable from '../components/table/CustomerTable'
import usePage, { PAGES } from "../hooks/usePage";
import customersReducer, { initialCustomer } from '../reducer/customerReducer'
import CustomerButton from '../components/button/CustomerButton'
import { Dropdown, DropdownButton, InputGroup, FormControl,Button,ButtonGroup } from "react-bootstrap";
import { useEffect } from 'react';
export default React.memo(function CustomerView() {
    const [,showClassName] = usePage( PAGES.CUSTOMER);
    const [customers, customerDispatch] = useReducer(customersReducer, initialCustomer);
    const [searchCustomer, setSearchCustomer] = useState(customers);
    const [customerLevelTarget, setcustomerLevelTarget] = useState(null);
    const [customerLevelTitle, setCustomerLevelTitle] = useState("全部");
    const [cooperateTarget, setcooperateTarget] = useState(null);
    const [cooperateTitle, setCooperateTitle] = useState("全部")
    const searchRef = useRef();
    useEffect(() => {
        console.log("AA")
        setSearchCustomer(customers)
    }, [customers])

    const searched = () => {
        console.log(searchRef.current.value);

        let newSearchCustomer = customers;
        if (searchRef.current.value !== null&&searchRef.current.value!=="") {
            console.log("AA")
            newSearchCustomer = newSearchCustomer.filter((prev) => {
                console.log(prev.id);
                let isInArrayName = prev.customerName.indexOf(searchRef.current.value)>-1 ;
                let isInArrayInterfaceName = prev.interfaceName.indexOf(searchRef.current.value)>-1;
                let isInArrayId = String(prev.id) ===searchRef.current.value;
                let isInArraytel = prev.customerTel===searchRef.current.value;
                if (isInArrayName||isInArrayInterfaceName||isInArrayId||isInArraytel) {

                    return prev;
                } else {
                    return null;
                }


            });
        }else{
            newSearchCustomer = customers;
        }
        if (customerLevelTarget) {
            console.log("Aa")
            newSearchCustomer = newSearchCustomer.filter((prev) => {
                if( prev.customerLevel){
                    let isInArray = prev.customerLevel===customerLevelTarget;
                    if (isInArray) {
                        return prev;
                    } else {
                        return null;
                    }
                }else{
                    return null;
                }
              
            });
        }
        if (cooperateTarget) {
            console.log("BB")
            newSearchCustomer = newSearchCustomer.filter((prev) => {
                if(prev.cooperateTag){
                    let isInArray = prev.cooperateTag===cooperateTarget;
                    if (isInArray) {
                        return prev;
                    } else {
                        return null;
                    }
                }else{
                    return null;
                }
               
            });
        }
       
     
        setSearchCustomer([...newSearchCustomer])
    }
    return (
        <div className={showClassName}
            style={{
                marginTop: "2.5%"
            }}>
            <div
                style={{
                    float: "right",
                    
                }}>
                <Button
                style={{
                    position:"relative",
                    left:"25%",
                    transform:"translate(-100%)",
                }}>
                匯出Excel
                </Button>
                <CustomerButton customerDispatch={customerDispatch} />
            </div>

            <div style={{
                position: "relative",
                width: "60%",
                left: "2.5%",
            }}>
                <InputGroup className="mb-3">

                    <ButtonGroup>
                        <Button>
                            所有
                        </Button>
                        <Button>
                            年份
                        </Button>
                        <Button>
                            月份
                        </Button>
                    </ButtonGroup>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        onSelect={(key) => {
                            setcustomerLevelTarget(key)
                            switch (key) {
                                case "L":
                                    return setCustomerLevelTitle("顧客等級低");
                                case "M":
                                    return setCustomerLevelTitle("顧客等級中");
                                case "H":
                                    return setCustomerLevelTitle("顧客等級高");
                                default:
                                    return setCustomerLevelTitle("全部");
                            }
                        }}
                        title={customerLevelTitle}
                        style={{
                            position:"relative",
                            left:"25px",
                        }}
                    >
                        <Dropdown.Item as="button" eventKey={"L"}>顧客等級低</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"M"}>顧客等級中</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"H"}>顧客等級高</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" eventKey={null}>返回全部</Dropdown.Item>

                    </DropdownButton>
                    
                  
                    <FormControl ref={searchRef} aria-describedby="basic-addon1" style={{position:"relative",width:"20%", left:"25px"}}/>
                    {/* <Button onClick={searched} style={{ position: "relative", left: "10px" }}>搜尋</Button> */}
                    <img alt="" onClick={searched} src={require("../images/searchicon.png")} style={{ position: "relative",left:"25px", height:"38px"}}/>
                </InputGroup>
            </div>
            <div
                style={{
                    position: "relative",
                    width: "95%",
                    left: "50%",
                    transform: "translate(-50%)",
                }}>
                <CustomerTable customers={searchCustomer} customerDispatch={customerDispatch} />

            </div>

        </div>
    );
});