import React, { useMemo,useCallback } from 'react';
import { Table } from "react-bootstrap";
import {CUSTOMERACTION} from '../../reducer/customerReducer'
import PurchaseButton from '../button/PurchaseButton';
export default React.memo(function CustomerTable({ customers, customerDispatch }) {
  console.log(customers);
  const deleteCustomer= useCallback((customer)=>{
    customerDispatch({
      type:CUSTOMERACTION.DELETE_CUSTOMER,
      customer:customer,
    })
  },[customerDispatch])


  const TableContent = useMemo(() => {
    return customers.map((customer, index) => {
      return (
        <tr key={index}>
          <td>{customer.id}</td>
          <td>{customer.customerName}</td>
          <td>{customer.interfaceName}</td>
          <td>{customer.interfaceTel}</td>
          <td>{customer.customerLevel && <img alt="customer" style={{height:"35px"}} src={require(`../../images/customerleveltag-${customer.customerLevel}.png`)}/>} 
          {customer.cooperateTag&& <img alt="customer"   style={{height:"35px"}}src={require(`../../images/cooperatetag-${customer.cooperateTag}.png`)}  />}
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td> <img alt="" src={require("../../images/deleteicon.png")} onClick={()=>deleteCustomer(customer)}
                 style={{
                    height:"25px",
                 }}/>{' '}
           <PurchaseButton customer={customer} customerDispatch={customerDispatch}/></td>
        </tr>
      );

    })
  }, [customers,deleteCustomer,customerDispatch])
    
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>請購單號</th>
          <th>交貨日期</th>
          <th>品名</th>
          <th>規格</th>
          <th>數量</th>
          <th>單位</th>
          <th>單價</th>
          <th>總價</th>
          <th>廠名</th>
          <th>用途</th>
          <th>發票號碼</th>
          <th>備註</th>
          <th>動作</th>
        </tr>
      </thead>
      <tbody>
        {TableContent}
      
      </tbody>
    </Table>
  );
});