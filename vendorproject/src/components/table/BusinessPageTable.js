import React, { useMemo,useCallback } from 'react';
import { Button, Table } from "react-bootstrap";
import {BUSINESSACTION} from '../../reducer/BusinessReducer';
import BusinessButton from '../button/BusinessButton';
export default React.memo(function CustomerTable() {
  const TableContent = useMemo(() => {
      return (
        <>
          <tr>
            <td rowSpan="3" style={{verticalAlign:"middle"}}>供應商資訊</td>
            <td>供應商</td>
            <td colSpan="4">XXXXX</td>
          </tr>
          <tr>
            <td>聯絡人</td>
            <td colSpan="4">XXX</td>
          </tr>
          <tr>
            <td>聯絡方式</td>
            <td colSpan="4">XXXXXXXX</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2">評量項目</td>
            <td>比分</td>
            <td>分數</td>
            <td>評核人員</td>
            <td>簽名</td>
          </tr>
          <tr>
            <td rowSpan="2" style={{verticalAlign:"middle"}}>供貨品質</td>
            <td>品質</td>
            <td>50%</td>
            <td></td>
            <td>化驗室</td>
            <td></td>
          </tr>
          <tr>
            <td>是否提供COA</td>
            <td>5%</td>
            <td></td>
            <td>採購</td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan="4" style={{verticalAlign:"middle"}}>服務</td>
            <td>緊急調貨配合度</td>
            <td>10%</td>
            <td></td>
            <td>採購</td>
            <td></td>
          </tr>
          <tr>
            <td>準時到貨</td>
            <td>10%</td>
            <td></td>
            <td>採購</td>
            <td></td>
          </tr>
          <tr>
            <td>包裝外觀</td>
            <td>10%</td>
            <td></td>
            <td>備品室</td>
            <td></td>
          </tr>
          <tr>
            <td>技術服務</td>
            <td>15%</td>
            <td></td>
            <td>化驗室</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">總分</td>
            <td></td>
            <td>簽核</td>
            <td></td>
          </tr>
        </>
      );
  }, [])

  const TableContent2 = useMemo(()=>{
    return(
      <>
        <tr>
          <td>日期</td>
          <td>產品名稱</td>
          <td>數量</td>
          <td>評價</td>
        </tr>
      </>
    );
  },[])
    
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="6">供應商評分表</th>
        </tr>
      </thead>
      <tbody>
        {TableContent}
      
      </tbody>
    </Table>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="4">購買紀錄</th>
        </tr>
      </thead>
      <tbody>
        {TableContent2}
      
      </tbody>
    </Table>
    </>
  );
});