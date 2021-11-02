import React, { useMemo,useCallback,useContext } from 'react';
import { Button, Table } from "react-bootstrap";
import usePage, { PAGES,PageSetter } from "../../hooks/usePage";
import {BUSINESSACTION} from '../../reducer/BusinessReducer';
import BusinessButton from '../button/BusinessButton';
export default React.memo(function CustomerTable({ Businesses, businessDispatch }) {
  const setPage = useContext(PageSetter);
    const handlePageSelect=useCallback((page)=>{
        setPage(page)
    })
  const deleteBusiness= useCallback((business)=>{
    businessDispatch({
      type: BUSINESSACTION.DELETE_BUSINESS,
      business:business,
    })
  },[businessDispatch])


  const TableContent = useMemo(() => {
    return Businesses.map((business, index) => {
      return (
        <tr key={index}>
          <td>{business.id+1}</td>
          <td>{business.startDate.getFullYear()+"/"+(business.startDate.getMonth()+1)+"/"+business.startDate.getDate()}</td>
          <td>{business.bidName}</td>
          <td>{business.customerName}</td> 
          <td>{business.endDate.getFullYear()+"/"+(business.endDate.getMonth()+1)+"/"+business.endDate.getDate()}</td>
          <td>{business.importLevel && <img alt="business" style={{height:"35px"}} src={require(`../../images/importance-${business.importLevel}.png`)}/>} 
          {business.budgetLevel&& <img alt="business"   style={{height:"35px"}}src={require(`../../images/budget-${business.budgetLevel}.png`)}  />}
          {business.feasibilityLevel&& <img alt="business"   style={{height:"35px"}}src={require(`../../images/feasibility-${business.feasibilityLevel}.png`)}  />}
          </td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td><img alt="" src={require("../../images/deleteicon.png")} onClick={()=>deleteBusiness(business)}
                 style={{
                    height:"25px",
                 }}/>{' '}
              <BusinessButton business={business} businessDispatch={businessDispatch}/>{' '}
              <Button 
                style={{
                  height:"25px",
                }}>
                詳細
              </Button>
          </td>
        </tr>
      );

    })
  }, [Businesses,deleteBusiness,businessDispatch])
    
  return (
    <Table striped bordered hover>
      <thead onClick={() => handlePageSelect(PAGES.BUSSINESSPAGE)}>
        <tr>
          <th>廠名</th>
          <th>聯絡人</th>
          <th>電話</th>
          <th>信箱</th>
          <th>產品</th>
          <th>統編</th>
          <th>bluesign</th>
          <th>GRS</th>
          <th>平均評分</th>
          <th>動作</th>
        </tr>
      </thead>
      <tbody>
        {TableContent}
      
      </tbody>
    </Table>
  );
});