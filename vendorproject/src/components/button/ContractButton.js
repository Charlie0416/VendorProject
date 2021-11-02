
import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import ContractModal from '../modals/ContractModal'

export default React.memo(function CustomerButton({contract,contractDispatch}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>

            {contract ? 
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
         
             
            <ContractModal show={showModal} onHide={() => setShowModal(false)} contract={contract} contractDispatch={contractDispatch}/>
        </>
    );
});