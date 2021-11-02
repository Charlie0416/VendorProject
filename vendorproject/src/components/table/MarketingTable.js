import React, { useMemo, useCallback } from 'react';
import { Table} from "react-bootstrap";
import {MARKETACTION} from '../../reducer/MarketingReducer';
import MarketButton from '../button/MarketButton'
export default React.memo(function MarketingTable({searchMarkets,marketDispatch}) {
    const deleteMarket= useCallback((Market)=>{
        marketDispatch({
          type: MARKETACTION.DELETE_MARKET,
          Market:Market,
        })
      },[marketDispatch])
    
    
      const TableContent = useMemo(() => {
        return searchMarkets.map((market, index) => {
          return (
            <tr key={index}>
              <td>{market.title}</td>
              <td>{market.category}</td>
              <td>{market.sendTime.getFullYear()+"/"+(market.sendTime.getMonth()+1)+"/"+ market.sendTime.getDate()}</td>
              <td>{market.buildTime.getFullYear()+"/"+(market.buildTime.getMonth()+1)+"/"+market.buildTime.getDate()}</td>
              <td>{market.status==="1"?"已發送":"未發送"}</td>
              <td>{market.recipient.map((rec)=>rec+";")}</td>
              <td>{market.success}</td>
              <td>{market.failure}</td>
              <td>{market.total}</td>
              <td> <img alt="" src={require("../../images/deleteicon.png")} onClick={()=>deleteMarket(market)}
                     style={{
                        height:"25px",
                     }}/>{' '}
               <MarketButton market={market} marketDispatch={marketDispatch}/></td>
            </tr>
          );
    
        })
      }, [searchMarkets,deleteMarket,marketDispatch])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>主旨</th>
                    <th>類別</th>
                    <th>發送時間</th>
                    <th>建立日期</th>
                    <th>狀態</th>
                    <th>收件人</th>
                    <th>成功筆數</th>
                    <th>失敗筆數</th>
                    <th>總筆數</th>
                    <th>動作</th>
                </tr>
            </thead>
            <tbody>
            {TableContent}
            </tbody>
        </Table>
    );
})