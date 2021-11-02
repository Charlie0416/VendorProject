import React, { useState ,useRef} from 'react'
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
export default React.memo(function Daymemo({ show, onHide,setMemo,editDay,setEditDay }) {
    
    
    const [day, setDay] = useState(new Date());
 
    const [isSelect,setIsSelect]=useState(false);
    useEffect(()=>{
        if(!isSelect&&editDay.year){
            setDay(new Date(parseInt(editDay.year),parseInt(editDay.month),parseInt(editDay.day)))
        } 
    },[editDay,isSelect])
    const [time,setTime]=useState(null);
    const ref =useRef();
  
    const handleSaveMemo=()=>{
        onHide();
        setIsSelect(false)
        setMemo((prev)=>{
            let input=ref.current.value;
            let Date=day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate();
            console.log(time)
            let saveTime=time;
            // if(time.getHours()>12){
            //      saveTime="下午"+(parseInt(time.getHours())-12)+":"+time.getMinutes();
            // }else{
            //      saveTime="上午"+time.getHours()+":"+time.getMinutes();
            // }
            setEditDay({ "year": day.getFullYear(), "month": day.getMonth(), "day": day.getDate() });
             const newDate={date:Date,time:saveTime,text:input,isCompleted: false };
             return [...prev,newDate]
        });
    }
    return (
        <>
            <Modal show={show} onHide={()=>{onHide();setIsSelect(false)}} >
                <Modal.Header closeButton>
                    <Modal.Title>新增備忘錄</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>選擇日期</Form.Label>
                            <DatePicker
                                selected={day}
                                onChange={(e) => {setDay(e); setIsSelect(true)}}
                                dateFormat="yyyy/MM/dd"
                                minDate={new Date()}
                                showDisabledMonthNavigation
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>選擇時間</Form.Label>
                            <DatePicker
                                selected={time}
                                onChange={time => setTime(time)}
                                showTimeInput
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="aa h:mm"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>輸入事項</Form.Label>
                            <Form.Control ref={ref} type="text" placeholder="Normal text" />
                        </Form.Group>

                    </Form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{onHide();setIsSelect(false)}}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveMemo}>
                        Save Changes
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})