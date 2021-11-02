import React from 'react';
import Home from'../view/Home';
import CustomerView from '../view/CustomerView';
import BusinessView from '../view/BusinessView';
import ContractView from '../view/ContractView';
import MarketingView from '../view/MarketingView';
import CustomerserviceView from '../view/CustomerserviceView';
import ReportView from '../view/ReportView';
import BusinessPageView from '../view/BusinessPageView';
import PurchaseView from '../view/PurchaseView';
import RepairView from '../view/RepairView';
import DoingView from '../view/DoingView';
import SparePartsView from '../view/SparePartsView';

export default React.memo(function Body() {
   
    return (
        <>
            <div className="App" style={{position:"absolute", height:"85%", width:"80%",left:"20%",top:"15%",minWidth:"1000px"}}>
              <Home />
              <CustomerView/>
              <BusinessView/>
              <BusinessPageView/>
              <ContractView/>
              <MarketingView/>
              <CustomerserviceView/>
              <ReportView/>
              <PurchaseView/>
              <RepairView/>
              <DoingView/>
              <SparePartsView/>
            </div>
        </>
    );
});