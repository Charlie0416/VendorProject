import React, { useMemo, useCallback } from 'react';
import { Table } from "react-bootstrap";
import {SERVICEACTION} from '../../reducer/customerServiceReducer'
import CustomerServiceButton from '../button/CustomerServiceButton';
export default React.memo(function MarketingTable({ services, serviceDispatch }) {

    const deleteService= useCallback((service)=>{
        serviceDispatch({
          type: SERVICEACTION.DELETE_SERVICE,
          service:service,
        })
      },[serviceDispatch])
    
    const TableContent = useMemo(() => {
        return services.map((service, index) => {
          return (
            <tr key={index}>
                <td>{service.title}</td>
                <td>{service.category}</td>
                <td>{service.customerName}</td>
                <td>{service.customerTel}</td>
                <td>{service.Email}</td>
                <td>{service.buildDate}</td>
                <td>{service.status}</td>
              <td> <img alt="" src={require("../../images/deleteicon.png")} onClick={()=>deleteService(service)}
                     style={{
                        height:"25px",
                     }}/>{' '}
               <CustomerServiceButton service={service} serviceDispatch={serviceDispatch}/></td>
            </tr>
          );
    
        })
      }, [services,deleteService,serviceDispatch])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>主旨</th>
                    <th>類別</th>
                    <th>客戶名稱</th>
                    <th>手機號碼</th>
                    <th>信箱</th>
                    <th>建立日期</th>
                    <th>狀態</th>
                    <th>動作</th>
                </tr>
            </thead>
            <tbody>
            {TableContent}
            </tbody>
        </Table>
    );
})