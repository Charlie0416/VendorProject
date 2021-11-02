import React, { useState } from 'react';
import Calender from'../components/Calendar'
import Todolist from '../components/Todolist'
import usePage, { PAGES } from "../hooks/usePage";
export default React.memo(function Home() {
    const [,showClassName] = usePage( PAGES.HOME);
    const [editDay, setEditDay] = useState({})
    const [memo,setMemo]=useState([])
    console.log(showClassName)
    return (
        <div className={showClassName} style={{position:"relative",width:"75%",left:"50%",paddingTop:"5%",transform:"translate(-50%)"}}>
            
              <Calender setEditDay={setEditDay} memo={memo} />
              <Todolist editDay={editDay} memo={memo} setMemo={setMemo} setEditDay={setEditDay} />
            
        </div>
    );
});