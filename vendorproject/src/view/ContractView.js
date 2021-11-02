import React, { useReducer, useState, useRef } from 'react';
import ContractTable from '../components/table/ContractTable';
import usePage, { PAGES } from "../hooks/usePage";
import ContractButton from '../components/button/ContractButton';
import contractReducer, { initialContract } from '../reducer/contractReducer';
import { InputGroup, FormControl, Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useCallback } from 'react';

export default React.memo(function ContractView() {

    const [,showClassName] = usePage( PAGES.CONTRACT);
    const [contract, contractDispatch] = useReducer(contractReducer, initialContract);
    const [searchContract, setSearchContract] = useState(contract);
    const searchRef = useRef();

    useEffect(() => {
        setSearchContract(contract);
    }, [contract])


    const searched = useCallback(() => {
        let newSearchcontract = contract;

        if (searchRef.current.value !== null&&searchRef.current.value!=="") {
            console.log("AA")
            newSearchcontract = newSearchcontract.filter((prev) => {
                console.log(prev.id);
                let isInArrayName = prev.contractName.indexOf(searchRef.current.value)>-1 ;
                let isInArrayid = prev.contractCode.indexOf(searchRef.current.value)>-1 ;
                let isInArrayvendor = prev.vendor.indexOf(searchRef.current.value)>-1 ;
                let isInArrayinterfaceName = prev.interfaceName.indexOf(searchRef.current.value)>-1 ;
                if (isInArrayName||isInArrayid||isInArrayvendor||isInArrayinterfaceName) {

                    return prev;
                } else {
                    return null;
                }


            });
        }
        setSearchContract([...newSearchcontract])
    },[contract])

    const handleSort = useCallback((type) => {
        switch (type) {
            case "code":
                return setSearchContract((prev) => {
                    let newPrev = prev.sort((a, b) => {
                        return a.contractCode - b.contractCode;
                    });
                    return [...newPrev]

                });
            case "endDate":

                return setSearchContract((prev) => {
                    let newPrev = prev.sort((a, b) => {
                        let nameA = a.endDate; // ignore upper and lowercase
                        let nameB = b.endDate; // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        // names must be equal
                        return 0;
                    });
                    return [...newPrev]
                });

            //
            //          return parseInt(a.endDate) - parseInt(b.endDate) ;
            //     
            //     
            //  });  ;
            default:
                return ""
        }
    }, [])

    return (
        <div className={showClassName}
            style={{
                marginTop: "2.5%"
            }}>
            <div style={{
                float: "right",
            }}>
                <ContractButton contractDispatch={contractDispatch} />
            </div>
            <div style={{
                position: "relative",
                width: "35%",
                left: "2.5%",
            }}>
                <InputGroup className="mb-3">
                    <ButtonGroup>
                        排序:
                        <Button onClick={() => { handleSort('code') }}>
                            編號
                        </Button>
                        <Button onClick={() => { handleSort('endDate') }}>
                            結算日
                        </Button>
                    </ButtonGroup>
                    <FormControl ref={searchRef} style={{ position: "relative", left: "25px" }}  />
                    {/* <Button style={{ position: "relative", left: "35px" }}>搜尋</Button> */}
                    <img alt="" src={require("../images/searchicon.png")} style={{ position: "relative", left: "25px", height: "38px" }}onClick={searched} />
                </InputGroup>
            </div>
            <div style={{
                position: "relative",
                width: "95%",
                left: "50%",
                transform: "translate(-50%)",
            }}>
                <ContractTable contract={searchContract} contractDispatch={contractDispatch} />
            </div>
        </div>
    );
})