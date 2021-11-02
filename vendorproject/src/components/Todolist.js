import React,{useMemo,useCallback} from 'react'
import { Card, ListGroup } from "react-bootstrap";

import DayMemoButton from '../components/button/DayMemoButton';

export default React.memo(function Todolist({ editDay, memo, setMemo,setEditDay }) {
    const handleStylingItem =useCallback((index) => {
        const newmemo = memo;
        newmemo[index].isCompleted = !memo[index].isCompleted;
        setMemo([...newmemo])
    },[memo,setMemo])
    const Content=useMemo(()=>{
        console.log("old",memo)
      let newMemo=  memo.sort(function (a, b) {
            return a.time - b.time;
          });
          console.log("new",newMemo)
      return  newMemo.map((item, index) => {
            if (item.date === `${editDay.year}/${(editDay.month + 1)}/${editDay.day}`) {
                return <ListGroup.Item key={index}
                    style={item.isCompleted ? { color: 'red', textDecoration: 'line-through' } : { color: 'green' }}
                    onClick={() => { handleStylingItem(index) }}>
                        <div style={{float:"left"}}>
                        {
                        item.time.getHours()>12?
                        item.time.getMinutes()>10?"下午"+(parseInt(item.time.getHours())-12)+":"+item.time.getMinutes():"下午"+(parseInt(item.time.getHours())-12)+":0"+item.time.getMinutes()  
                        :  item.time.getMinutes()>10?"上午"+(parseInt(item.time.getHours())-12)+":"+item.time.getMinutes():"上午"+(parseInt(item.time.getHours())-12)+":0"+item.time.getMinutes()  
                         
                        }
                        </div>
                       <div>
                       {item.text}
                       </div>
                       
                        </ListGroup.Item>
            } else {
                return null;
            }

        })
    },[editDay,memo,handleStylingItem])

  
    return (
        <div style={{ float: "left", width: "35%" }}>
            <Card  style={{ width: '100%', left:"5%" }}>
                <Card.Header>
                <div style={{float:"left", width:"50%",textAlign:"left"}}>
                    {editDay.year ? editDay.year + "年" + (editDay.month + 1) + "月" + editDay.day + "日" : "備忘錄"}
                </div>
                <div style={{float:"left", width:"50%"}}>
                    <DayMemoButton setMemo={setMemo} editDay={editDay} setEditDay={setEditDay}/> 
                </div>
                </Card.Header>
                <ListGroup variant="flush">
                    {Content}

                </ListGroup>
            </Card>
        </div>
    );
})