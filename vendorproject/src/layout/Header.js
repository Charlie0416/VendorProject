import React from 'react';

export default React.memo(function Header(){
    return(
        <>
            <div style={{position:"fixed",width:"100%",height:"15%",fontSize:"25pt", zIndex:"1", minWidth:"1500px"}}>
                <img alt="header" src={require("../images/header.png")} style={{height:"100%", width:"100%"}}/>
            </div>
        </>
    )
});