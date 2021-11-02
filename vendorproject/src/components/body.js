import React from 'react';
import logo from '../logo.svg';
import Calender from'./Calendar'
export default React.memo(function body() {
    return (
        <>
            <div className="App" style={{position:"absolute", height:"85%", width:"80%",left:"20%",top:"15%"}}>
              <Calender/>
            </div>
        </>
    );
});