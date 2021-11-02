import React, {useReducer, useState, useRef, useEffect,useCallback } from 'react';
import CustomerserviceTable from '../components/table/CustomerserviceTable';
import usePage, { PAGES } from "../hooks/usePage";
import { Dropdown, DropdownButton, InputGroup, FormControl } from "react-bootstrap";
import CustomerServiceButton from '../components/button/CustomerServiceButton'
import serviceReducer, { initialService } from '../reducer/customerServiceReducer'
export default React.memo(function CustomerserviceView() {

    const [,showClassName] = usePage( PAGES.CUSTOMERSERVICE);
    const [services, serviceDispatch] = useReducer(serviceReducer, initialService);
    const [searchServices, setSearchServices] = useState(services);
    const [status,setStatus]=useState("狀態");
    const [category,setCategory]=useState("類別");
    const searchRef = useRef();
    useEffect(() => {
        setSearchServices(services)
    }, [services])

    const searched = useCallback(() => {
        console.log(searchRef.current.value);

        let newSearchServices = services;

        if (searchRef.current.value !== null&&searchRef.current.value!=="") {
            console.log("AA")
            newSearchServices = newSearchServices.filter((prev) => {
                console.log(prev.id);
                let isInArrayName = prev.customerName.indexOf(searchRef.current.value)>-1 ;
                let isInArraytitle = prev.title.indexOf(searchRef.current.value)>-1;
             
                if (isInArrayName||isInArraytitle) {

                    return prev;
                } else {
                    return null;
                }


            });
        }

        if(status&&status!=="狀態"){
            newSearchServices = newSearchServices.filter((prev) => {
                if(prev.status){
                    let isInArray = prev.status===status;
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
        if(category&&category!=="類別"){
            newSearchServices = newSearchServices.filter((prev) => {
                if(prev.category){
                    let isInArray = prev.category===category;
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
        setSearchServices([...newSearchServices])
    },[category,services,status])


    return (
        <div className={showClassName}
            style={{
                marginTop: "2.5%"
            }}>
            <div style={{
                float: "right",
                paddingRight: "2.5%"
            }}>
                <CustomerServiceButton serviceDispatch={serviceDispatch} />
            </div>
            <div style={{
                position: "relative",
                width: "30%",
                left: "2.5%",
            }}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        onSelect={(key) => setStatus(key)}
                        title={status}
                    >
                        <Dropdown.Item eventKey={"已解決"}>已解決</Dropdown.Item>
                        <Dropdown.Item eventKey={"未解決"}>未解決</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" eventKey={"狀態"}>返回全部</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        onSelect={(key) => setCategory(key)}
                        title={category}
                    >
                        <Dropdown.Item eventKey={"商品"}>商品</Dropdown.Item>
                        <Dropdown.Item eventKey={"物流"}>物流</Dropdown.Item>
                        <Dropdown.Item eventKey={"服務"}>服務</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" eventKey={"類別"}>返回全部</Dropdown.Item>
                    </DropdownButton>
                    <FormControl style={{ position: "relative" }} ref={searchRef} />
                    <img alt="" onClick={searched} src={require("../images/searchicon.png")} style={{ position: "relative", height:"38px"}}/>
                </InputGroup>
            </div>
            <div style={{
                position: "relative",
                width: "95%",
                left: "50%",
                transform: "translate(-50%)",
            }}>
                <CustomerserviceTable services={searchServices} serviceDispatch={serviceDispatch} />
            </div>
        </div>
    );
})