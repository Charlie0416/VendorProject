import React, { useReducer, useState, useRef,useCallback } from 'react';
import MarketingTable from '../components/table/MarketingTable';
import usePage, { PAGES } from "../hooks/usePage";
import { Dropdown, DropdownButton, InputGroup, FormControl, Button, ButtonGroup } from "react-bootstrap";
import { useEffect } from 'react';
import MarketingReducer, { initialMarket } from '../reducer/MarketingReducer'
import MarketButton from '../components/button/MarketButton'
export default React.memo(function MarketingView() {

    const [,showClassName] = usePage( PAGES.MARKETING);
    const [markets,marketDispatch] = useReducer(MarketingReducer, initialMarket);
    const [searchMarkets,setSearchMarkets]=useState(markets);
    const [status,setStatus]=useState();
    const [statusTitle,setStatusTitle]=useState("狀態");
    const [category,setcategory]=useState("類別");
    const searchRef=useRef();
    console.log(markets)
    useEffect(()=>{
        setSearchMarkets(markets);
    },[markets])
    const searched = useCallback(() => {


        let newSearchMarket = markets;

        if (searchRef.current.value !== null&&searchRef.current.value!=="") {
            console.log("AA")
            newSearchMarket = newSearchMarket.filter((prev) => {
                console.log(prev.id);
                let isInArrayName = prev.title.indexOf(searchRef.current.value)>-1 ;
              
                if (isInArrayName) {

                    return prev;
                } else {
                    return null;
                }


            });
        }

        if(status){
            newSearchMarket = newSearchMarket.filter((prev) => {
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
            newSearchMarket = newSearchMarket.filter((prev) => {
                if(prev.status){
                    let isInArray = prev.category.indexOf(category) > -1;
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
        setSearchMarkets([...newSearchMarket])
    },[category,markets,status])
    const handleSort=useCallback((type)=>{
        switch(type){
            case "sendDate":
                return  setSearchMarkets((prev)=>{
                 let newPrev=  prev.sort((a,b)=>{
                        return a.sendTime - b.sendTime;
                    });
                    return [...newPrev]

                });
            case "buildDate":
                return  setSearchMarkets((prev)=>{
                  let newPrev= prev.sort((a,b)=>{
                           return a.buildTime - b.buildTime;
                       });
                       return [...newPrev]
                   }); 
         
            default :
            return ""
        }
    },[])
    return (
        <div className={showClassName}
            style={{
                marginTop: "2.5%"
            }}>
            <div style={{
                float: "right",
                paddingRight:"2.5%"
            }}>
             <MarketButton marketDispatch={marketDispatch} />
               
            </div>
            <div style={{
                position: "relative",
                width: "45%",
                left: "2.5%",
            }}>
                <InputGroup className="mb-3">
                    <ButtonGroup>
                        排序:
                        <Button onClick={()=>handleSort("buildDate")}>
                            建立日期
                        </Button>
                        <Button onClick={()=>handleSort("sendDate")}>
                            發送日期
                        </Button>
                    </ButtonGroup>
                    <DropdownButton
                          as={InputGroup.Prepend}
                          variant="outline-secondary"
                          onSelect={(key) => {
                           setStatus(key)
                           switch(key){
                              case "2":
                                  return setStatusTitle( "未發送");
                              case "1":
                                  return  setStatusTitle("已發送");
                         
                              default :
                              return setStatusTitle("狀態");
                          }
                          }}
                          title={statusTitle}
                        style={{
                            position:"relative",
                            left:"25px",
                        }} 
                     
                    >
                        <Dropdown.Item as="button" eventKey={"2"}>未發送</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"1"}>已發送</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" eventKey={null}>返回全部</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      onSelect={(key) => {
                        setcategory(key)
                      }}
                      title={category}
                        style={{
                            position:"relative",
                            left:"25px",
                        }}  
                      
                    >
                        <Dropdown.Item as="button" eventKey={"祝福"}>祝福</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"推銷"}>推銷</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"新產品"}>新產品</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" eventKey={"類別"}>返回全部</Dropdown.Item>
                    </DropdownButton>
                    <FormControl style={{position:"relative", left:"25px"}}  ref={searchRef}/>
                    {/* <Button style={{ position: "relative", left: "35px" }} onClick={searched}>搜尋</Button> */}
                    <img alt="" onClick={searched} src={require("../images/searchicon.png")} style={{ position: "relative", left: "15px", height:"38px"}}/>
                </InputGroup>
            </div>
            <div style={{
                position: "relative",
                width: "95%",
                left: "50%",
                transform: "translate(-50%)",
            }}>
                <MarketingTable  searchMarkets={searchMarkets} marketDispatch={marketDispatch}/>
            </div>
        </div>
    );
})