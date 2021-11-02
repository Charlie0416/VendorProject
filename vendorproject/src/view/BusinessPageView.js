import React, {  useReducer, useState, useRef, useCallback } from 'react';
import BussinessPageTable from '../components/table/BusinessPageTable';
import usePage, { PAGES } from "../hooks/usePage";
import BusinessReducer, { initialBusiness } from '../reducer/BusinessReducer'
import BusinessButton from '../components/button/BusinessButton'
import { Dropdown, DropdownButton, InputGroup, FormControl, Button,ButtonGroup } from "react-bootstrap";
import { useEffect } from 'react';

export default React.memo(function BusinessPageView() {
    const [,showClassName] = usePage( PAGES.BUSSINESSPAGE);
    return (
        <div className={showClassName}
        style={{
            marginTop:"2.5%"
        }}>
            <div
             style={{
                position:"relative",
                width:"95%",
                left:"50%",
                transform:"translate(-50%)",
           }}>
                <BussinessPageTable/>
                
            </div>

        </div>
    );
});