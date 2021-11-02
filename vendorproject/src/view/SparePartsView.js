
import React, {  useReducer, useState, useRef, useCallback } from 'react';
import SparePartsTable from '../components/table/SparePartsTable';
import usePage, { PAGES,PageSetter } from "../hooks/usePage";
import BusinessReducer, { initialBusiness } from '../reducer/BusinessReducer';
import SparePartsButton from '../components/button/SparePartsButton';
import { Dropdown, DropdownButton, InputGroup, FormControl, Button,ButtonGroup } from "react-bootstrap";
import { useEffect } from 'react';
export default React.memo(function SparePartsView() {
    const [,showClassName] = usePage( PAGES.SPAREPARTS);
    const [Businesses, businessDispatch] = useReducer(BusinessReducer, initialBusiness);
    console.log(Businesses)
    const [searchBusiness, setSearchBusiness] = useState(Businesses);

    const [importLevelTarget, setImportLevelTarget] = useState(null);
    const [importLevelTitle,setImportLevelTitle]=useState("類別");
    const [budgetLevelTarget, setBudgetLevelTarget] = useState(null);
    const [budgetLevelTitle,setBudgetLevelTitle]=useState("全部");
    const [feasibilityLevelTarget, setFeasibilityLevelTarget] = useState(null);
    const [feasibilityLevelTitle,setFeasibilityLevelTitle]=useState("全部");
    const searchRef = useRef();
    useEffect(() => {
        setSearchBusiness(Businesses)
    }, [Businesses])

    const searched = useCallback(() => {
        console.log(searchRef.current.value);

        let newSearchBusiness = Businesses;

        if (searchRef.current.value !== null&&searchRef.current.value!=="") {
            console.log("AA")
            newSearchBusiness = newSearchBusiness.filter((prev) => {
                console.log(prev.id);
                let isInArrayName = prev.customerName.indexOf(searchRef.current.value)>-1 ;
                let isInArraybidName = prev.bidName.indexOf(searchRef.current.value)>-1;
                let isInArrayId = String(prev.id) ===searchRef.current.value;
                if (isInArrayName||isInArraybidName||isInArrayId) {

                    return prev;
                } else {
                    return null;
                }


            });
        }else{
            newSearchBusiness = Businesses;
        }

        if(importLevelTarget){
            newSearchBusiness = newSearchBusiness.filter((prev) => {
                if(prev.importLevel){
                    let isInArray = prev.importLevel.indexOf(importLevelTarget) > -1;
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
        if(feasibilityLevelTarget){
            newSearchBusiness = newSearchBusiness.filter((prev) => {
                if(prev.feasibilityLevel){
                    let isInArray = prev.feasibilityLevel.indexOf(feasibilityLevelTarget) > -1;
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
        if(budgetLevelTarget){
          
            newSearchBusiness = newSearchBusiness.filter((prev) => {
                if(prev.newSearchBusiness){
                    let isInArray = prev.budgetLevel.indexOf(budgetLevelTarget) > -1;
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
      
       
        setSearchBusiness([...newSearchBusiness])
    },[Businesses,budgetLevelTarget,feasibilityLevelTarget,importLevelTarget])
    const handleSort=useCallback((type)=>{
        switch(type){
            case "id":
                return  setSearchBusiness((prev)=>{
                 let newPrev=  prev.sort((a,b)=>{
                        return a.id - b.id;
                    });
                    return [...newPrev]

                });
            case "startDate":
                return  setSearchBusiness((prev)=>{
                  let newPrev= prev.sort((a,b)=>{
                           return a.startDate - b.startDate;
                       });
                       return [...newPrev]
                   }); 
            case "endDate":
                return  setSearchBusiness((prev)=>{
                    let newPrev= prev.sort((a,b)=>{
                             return a.endDate - b.endDate;
                         });
                         return [...newPrev]
                     });  ;
            default :
            return ""
        }
    },[])
    return (
        <div className={showClassName}
        style={{
            marginTop:"2.5%"
        }}>
            <div
             style={{
                float:"right",
                
           }}>
                <Button
                style={{
                    position:"relative",
                    left:"25%",
                    transform:"translate(-100%)",
                }}>
                匯出Excel
            </Button>
                <SparePartsButton businessDispatch={businessDispatch} />
            </div>

            <div style={{
                 position:"relative",
                 width:"60%",
                 left:"2.5%",
            }}>
                <InputGroup className="mb-4">
                    <ButtonGroup>
                        <Button onClick={()=>handleSort("id")}>
                            所有
                        </Button>
                        <Button  onClick={()=>handleSort("startDate")}>
                            年份
                        </Button>
                        <Button  onClick={()=>handleSort("endDate")}>
                            月份
                        </Button>
                    </ButtonGroup>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        onSelect={(key) => {
                         setImportLevelTarget(key)
                         switch(key){
                            case "L":
                                return setImportLevelTitle( "重要性低");
                            case "M":
                                return  setImportLevelTitle("重要性中");
                            case "H":
                                return  setImportLevelTitle("重要性高");
                            default :
                            return setImportLevelTitle("類別");
                        }
                        }}
                        title={importLevelTitle}
                        style={{
                            position:"relative",
                            left:"25px",
                        }}
                    >
                        <Dropdown.Item as="button" eventKey={"L"}>重要性低</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"M"}>重要性中</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"H"}>重要性高</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" eventKey={null}>返回全部</Dropdown.Item>

                    </DropdownButton>
                    
                   
                    <FormControl ref={searchRef} aria-describedby="basic-addon1" style={{position:"relative",width:"20%", left:"25px"}} />
                    {/* <Button onClick={searched}  style={{position:"relative",left:"10px"}}>搜尋</Button> */}
                    <img alt="" onClick={searched} src={require("../images/searchicon.png")} style={{ position: "relative",height:"38px",left:"25px"}}/>
                </InputGroup>
            </div>
          
            <div
             style={{
                position:"relative",
                width:"95%",
                left:"50%",
                transform:"translate(-50%)",
           }}>
                <SparePartsTable Businesses={searchBusiness} businessDispatch={businessDispatch} />

            </div>

        </div>
    );
});