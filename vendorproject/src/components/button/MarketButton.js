import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import MarketModal from '../modals/MarketModal'
export default React.memo(function MarketButton({market,marketDispatch}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
             {market ? 
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
              <MarketModal show={showModal} onHide={() => setShowModal(false)} marketDispatch={marketDispatch}  market={market}/>
        </>
    );
});