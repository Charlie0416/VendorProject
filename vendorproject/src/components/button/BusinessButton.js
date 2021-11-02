import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import BusinessModal from '../modals/BusinessModal'
export default React.memo(function BusinessButton({business,businessDispatch}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
            
             {business ? 
            <img alt="" src={require("../../images/modifyicon.png")} onClick={()=> setShowModal(true)}
                 style={{
                    height:"25px"
                 }}/> 
            :
            <Button variant="outline-info" onClick={()=> setShowModal(true)}
                    style={{
                        position:"relative",
                        left:"15%",
                        transform:"translate(-100%)"
                    }}>
                新增
            </Button>}
              <BusinessModal show={showModal} onHide={() => setShowModal(false)} businessDispatch={businessDispatch}  business={business}/>
        </>
    );
});