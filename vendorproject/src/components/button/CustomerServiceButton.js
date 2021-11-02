import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import CustomerServiceModal from '../modals/CustomerServiceModal'
export default React.memo(function CustomerServiceButton({service,serviceDispatch}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
             {service ? 
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
              <CustomerServiceModal show={showModal} onHide={() => setShowModal(false)} serviceDispatch={serviceDispatch}  service={service}/>
        </>
    );
});