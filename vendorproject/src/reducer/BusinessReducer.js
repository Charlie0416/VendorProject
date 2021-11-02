

export const BUSINESSACTION = {
    ADD_BUSINESS: 'ADD_BUSINESS',
    DELETE_BUSINESS:'DELETE_BUSINESS',
    MODIFY_BUSINESS:'MODIFY_BUSINESS'
};




export const initialBusiness = [];



function addBusiness(state,{ customerName, bidName,startDate,endDate,importLevel,budgetLevel,feasibilityLevel}) {

    let NewBusiness={id:state.length,customerName,bidName,startDate,endDate,importLevel,budgetLevel,feasibilityLevel}
    return[...state,NewBusiness]
}
function deleteBusiness(states,customer){
   let index= states.findIndex((state)=>state===customer);
   states.splice(index,1)
   return[...states]
}
function modifyBusiness(states,{businessId,customerName, bidName,startDate,endDate,importLevel,budgetLevel,feasibilityLevel}){
    console.log(customerName)
    let index= states.findIndex((state)=>state.id===businessId);
    states[index].bidName=bidName;
    states[index].customerName=customerName;
    states[index].startDate=startDate;
    states[index].endDate=endDate;
    states[index].importLevel=importLevel;
    states[index].budgetLevel=budgetLevel;
    states[index].feasibilityLevel=feasibilityLevel;
    return[...states]
}

export default function customersReducer(state, action) {
    switch (action.type) {
        case BUSINESSACTION.ADD_BUSINESS:
            return addBusiness(state, action.BusinessLoad);
            case BUSINESSACTION.DELETE_BUSINESS:
                return deleteBusiness(state, action.business);
            case BUSINESSACTION.MODIFY_BUSINESS:
                return modifyBusiness(state,action.BusinessLoad);
        default:
            return state;
    }
}
