
import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import DoingModal from "../modals/DoingModal";
export default React.memo(function DoingButton({customer,customerDispatch}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
            {customer ? 
            <img alt="" src={require("../../images/modifyicon.png")} onClick={()=> setShowModal(true)}
                 style={{
                    height:"25px"
                 }}/> 
            :
            <Button onClick={()=> setShowModal(true)}
                    style={{
                        position:"relative",
                        left:"15%",
                        transform:"translate(-100%)"
                    }}>
                新增
            </Button>}
              <DoingModal show={showModal} onHide={() => setShowModal(false)} customerDispatch={customerDispatch}  customer={customer}/>
        </>
    );
});