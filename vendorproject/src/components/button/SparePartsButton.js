import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import SparePartsModal from '../modals/SparePartsModal'
export default React.memo(function SparePartsButton({business,businessDispatch}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
            
             {business ? 
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
              <SparePartsModal show={showModal} onHide={() => setShowModal(false)} businessDispatch={businessDispatch}  business={business}/>
        </>
    );
});