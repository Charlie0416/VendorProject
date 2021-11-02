
import React, { useState } from 'react';
import DayMemo from '../modals/Daymemo'
export default React.memo(function DayMemoButton({setMemo,editDay,setEditDay}) {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
             <img alt="" src={require("../../images/add.png")} 
                 style={{position:"relative",height:"20px",left:"50%",transform:"translate(-50%,-10%)"}}
                 onClick={()=> setShowModal(true)}
            />
              <DayMemo show={showModal} onHide={() => setShowModal(false)}  setMemo={setMemo} editDay={editDay} setEditDay={setEditDay}/>
        </>
    );
});