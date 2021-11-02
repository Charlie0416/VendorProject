import React, { useMemo, useCallback } from 'react';
import { Table, Dropdown, DropdownButton, Modal } from "react-bootstrap";

export default React.memo(function ReportTable({ allProduct }) {

    const TableContent = useMemo(() => {
        return allProduct.map((allProduct, index) => {
            return (
                <tr key={index}>
                    <td>{allProduct.productName}</td>
                    <td>{allProduct.totalRevenue}</td>
                    <td>{allProduct.orderNumber}</td>
                    <td>{allProduct.averageOrder}</td>
                    <td>{allProduct.purchasesNum}</td>
                </tr>
            );
        });
    }, [allProduct])

    return (
        <>
            <Modal.Dialog scrollable
                style={{
                    position:"relative",
                    height:"100%",
                    margin:"0",
                    transform:"translate(45px,45px)"
                }}>                
                <Modal.Body style={{padding:"0"}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>產品名稱</th>
                                <th>總營收</th>
                                <th>訂單數</th>
                                <th>平均訂單</th>
                                <th>每次購買件數</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableContent}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal.Dialog>
        </>
    );
})