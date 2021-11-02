import React, { useMemo, useCallback } from 'react';
import { Table } from "react-bootstrap";
import ContractButton from '../button/ContractButton';
import {contractACTION} from '../../reducer/contractReducer'

export default React.memo(function ContractTable({ contract, contractDispatch }) {

    const deleteContract= useCallback((contract)=>{
        contractDispatch({
          type:contractACTION.DELETE_CONTRACT,
          contract:contract,
        })
      },[contractDispatch]);

    const TableContent = useMemo(() => {
        return contract.map((contract, index) => {
            return (
                <tr key={index}>
                    <td>{contract.contractName}</td>
                    <td>{parseInt(contract.contractCode)+1}</td>
                    <td>{contract.vendor}</td>
                    <td>{contract.interfaceName}</td>
                    <td>{contract.endDate}</td>
                    <td>{contract.contractStage}</td>
                    <td>{contract.note}</td>
                    <td>
                        <img alt="" src={require("../../images/deleteicon.png")} onClick={()=>deleteContract(contract)}
                            style={{
                                height: "25px",
                            }} />
                        {' '}<ContractButton contract={contract} contractDispatch={contractDispatch}/>
                    </td>
                </tr>
            );

        })
    }, [contract,contractDispatch,deleteContract])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>合約名稱</th>
                    <th>合約編號</th>
                    <th>廠商</th>
                    <th>窗口姓名</th>
                    <th>預定結案日</th>
                    <th>合約階段</th>
                    <th>附註</th>
                    <th>動作</th>
                </tr>
            </thead>
            <tbody>
                {TableContent}
            </tbody>
        </Table>
    );
})