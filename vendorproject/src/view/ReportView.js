import React, {useState} from 'react';
import usePage, { PAGES } from "../hooks/usePage";
import ReportTable from '../components/table/ReportTable';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";

export default React.memo(function ReportView() {

    const [,showClassName] = usePage( PAGES.REPORT);
    const [importLevelTarget, setImportLevelTarget] = useState(null);
    const [importLevelTitle,setImportLevelTitle]=useState("類別");

    const allProduct = [
        { productName: "A", totalRevenue: 456, orderNumber: 150, averageOrder: 7, purchasesNum: 100 },
        { productName: "B", totalRevenue: 500, orderNumber: 160, averageOrder: 12.5, purchasesNum: 156 },
        { productName: "C", totalRevenue: 446, orderNumber: 152, averageOrder: 12, purchasesNum: 124 },
        { productName: "D", totalRevenue: 450, orderNumber: 144, averageOrder: 5, purchasesNum: 88 },
        { productName: "E", totalRevenue: 488, orderNumber: 50, averageOrder: 5.8, purchasesNum: 16 },
        { productName: "F", totalRevenue: 400, orderNumber: 132, averageOrder: 4, purchasesNum: 200 },
    ];
    const barData = {
        labels: allProduct.map((prev) => prev.productName),
        datasets: [
            {
                label: '成本',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: allProduct.map((prev) => prev.totalRevenue)
            }
        ]
    }
    const pieData = {
        labels: allProduct.map((prev) => prev.productName),
        datasets: [
            {
                
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: allProduct.map((prev) => prev.orderNumber)
            }
        ]
    }
    const doughnutData = {
        labels: allProduct.map((prev) => prev.productName),
        datasets: [
            {
                label: '平均月營收',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: allProduct.map((prev) => prev.averageOrder)
            }
        ]
    }
    return (
        <div className={showClassName}>
        <div style={{
             position:"absolute",
             float:"left",
             top:"20px",
             left:"0",
             height:"5%",
             width:"95%",
        }}>
            <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        onSelect={(key) => {
                         setImportLevelTarget(key)
                         switch(key){
                            case "L":
                                return setImportLevelTitle( "重要性低");
                            case "M":
                                return  setImportLevelTitle("重要性中");
                            case "H":
                                return  setImportLevelTitle("重要性高");
                            default :
                            return setImportLevelTitle("類別");
                        }
                        }}
                        title={importLevelTitle}
                        style={{
                            position:"relative",
                            left:"25px",
                        }}
                    >
                        <Dropdown.Item as="button" eventKey={"L"}>原物料</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"M"}>零件備品</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"H"}>基本開銷</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey={"H"}>文具</Dropdown.Item>
                    </DropdownButton>
            {/* <ReportTable allProduct={allProduct}/> */}
        </div>
        <div style={{
             position:"absolute",
             float:"left",
             top:"10%",
             left:"25%",
             transform:"translate(-50%)",
             height:"40%",
             width:"40%",
        }}>
             <Line
                data={barData}
              
                style={{position:"relative",height:"100%"}}
                options={{
                    title: {
                        display: true,
                        text: '年成本',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                }}
            />
        </div>
        <div style={{
             position:"absolute",
             float:"left",
             top:"50%",
             left:"25%",
             transform:"translate(-50%)",
             height:"40%",
             width:"40%",
        }}>
             <Pie
                data={pieData}
                style={{position:"relative",height:"100%"}}
                options={{
                    title: {
                        display: false,
                        text: '月營收',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
        <div style={{
             position:"absolute",
             float:"left",
             top:"10%",
             right:"25%",
             transform:"translate(50%)",
             height:"40%",
             width:"40%",
        }}>
             <Line
                data={barData}
              
                style={{position:"relative",height:"100%"}}
                options={{
                    title: {
                        display: true,
                        text: '月成本',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                }}
            />
        </div>
        <div style={{
             position:"absolute",
             float:"left",
             top:"50%",
             right:"25%",
             transform:"translate(50%)",
             height:"40%",
             width:"40%",

        }}>
           <Pie
                data={doughnutData}
                style={{position:"relative",height:"100%"}}
                options={{
                    title: {
                        display: false,
                        text: '平均月營收',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    </div>
    );
})