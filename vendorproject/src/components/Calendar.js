import { Button } from "react-bootstrap";
import React, { useState,useMemo,useCallback,useEffect } from 'react';
import '../App.css';

const ReFreshDate = React.memo(function ({ myclass, day, dayInformation, year, month }) {
    const [isMouse, setIsMouse] = useState(false)
    return (
        <>
            <li className={`${myclass} ${isMouse ? "isOnMouse" : ""}`} onClick={()=>{dayInformation(year,month,day)}} style={{ cursor: "pointer" }} onMouseOver={() => { setIsMouse(true) }} onMouseLeave={() => { setIsMouse(false) }}>

                {day}
            </li>

        </>
    );

});
export default React.memo(function Calendar({setEditDay,memo}) {
    const month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
    const my_date = new Date();
    const my_day = my_date.getDate();
    const [str, setstr] = useState([])
    const [month, setMonth] = useState(my_date.getMonth());
    const [year, setYear] = useState(my_date.getFullYear());
    
    const dayStart = (month, year) => {
        let tmpDate = new Date(year, month, 1);
        return (tmpDate.getDay());
    }
    const daysMonth = useCallback((month, year) => {
        let tmp = year % 4;
        if (tmp === 0) {
            return (month_olympic[month]);
        } else {
            return (month_normal[month]);
        }
    }, [month_olympic, month_normal])
    useEffect(() => {
        let totalDay = daysMonth(month, year); //获取该月总天数
        let firstDay = dayStart(month, year); //获取该月第一天是星期几
        let array = []
        for (let i = 1; i < firstDay; i++) {
            array.push(""); //为起始日之前的日期创建空白节点
        }
        for (let i = 1; i <= totalDay; i++) {
            array.push(i); //创建日期节点
        }
        setstr(array)
    }, [month, year])
    const dayInformation =useCallback((year, month, day) => {
        setEditDay({ "year": year, "month": month, "day": day })
    },[setEditDay]) 
    const Setdate = useMemo(() => {
        return str.map((day, index) => {
            if (day) {
                let isInmemo=memo.some((m)=>{
                    return m.date===`${year}/${month+1}/${day}`
                })
              
                if ((day < my_day && year === my_date.getFullYear() && month === my_date.getMonth()) || year < my_date.getFullYear() || (year === my_date.getFullYear() && month < my_date.getMonth())) {
                    let myclass = `lightgrey ${isInmemo && "greenbox"}`; //当该日期在今天之前时，以浅灰色字体显示
                    return <ReFreshDate myclass={myclass} key={year + "-" + month + "-" + day} year={year} month={month} day={day} dayInformation={dayInformation} />
                } else if (day === my_day && year === my_date.getFullYear() && month === my_date.getMonth()) {
                    let myclass = `green  ${isInmemo && "greenbox"}`; //当天日期以绿色背景突出显示
                    return <ReFreshDate myclass={myclass} key={year + "-" + month + "-" + day} year={year} month={month} day={day} dayInformation={dayInformation} />
                } else {
                    let myclass = ` darkgrey ${isInmemo && "greenbox"}`; //当该日期在今天之后时，以深灰字体显示
                    return <ReFreshDate myclass={myclass} key={year + "-" + month + "-" + day} year={year} month={month} dayInformation={dayInformation} day={day} />
                }
            } else {
                return <li key={"none-" + index} >   </li>
            }

        });
    }, [month, year, my_day, my_date, str,memo,dayInformation])
    const prev = (e) => {
        let newmonth = month - 1;
        e.preventDefault();
        if (newmonth < 0) {
            setYear((prev) => { return prev - 1 });
            setMonth(11)
        } else {
            setMonth(newmonth)
        }
    }
    const next = (e) => {
        e.preventDefault();
        let newmonth = month + 1;
        if (newmonth > 11) {
            setYear((prev) => { return prev + 1 });
            setMonth(0)
        } else {
            setMonth(newmonth)
        }

    }

   
    return (
        <>
       
            <div className="calendar" style={{ border: "1px solid #6ac13c", float:"left",left:"0",width:"65%" }}>
                <div className="title">
                    <h1 className="green" >{month_name[month]}</h1>
                    <h2 className="green small" >{year}</h2>
                    <Button size="sm" variant="success" onClick={prev} style={{ float: "left", marginLeft: "5%" }}>Prev Month</Button>
                    <Button size="sm" variant="success" onClick={next} style={{ float: "right", marginRight: "5%" }}>Next Month</Button>
                </div>
                <div className="body"style={{position:"relative",left:"45%",transform:"translate(-48%)"}}>
                    <div className="lightgrey body-list">
                        <ul>
                            <li>MON</li>
                            <li>TUE</li>
                            <li>WED</li>
                            <li>THU</li>
                            <li>FRI</li>
                            <li>SAT</li>
                            <li>SUN</li>
                        </ul>
                    </div>
                    <div className="darkgrey body-list">
                        <ul>
                            {Setdate}
                        </ul>
                    </div>
                </div>
            </div>
           
     
        </>
    );
})