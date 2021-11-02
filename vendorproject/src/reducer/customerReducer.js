

export const CUSTOMERACTION = {
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    DELETE_CUSTOMER:'DELETE_CUSTOMER',
    MODIFY_CUSTOMER:'MODIFY_CUSTOMER'
};




export const initialCustomer = [{id:1,customerName:"123",customerTel:"123",customerAddress:"123",interfaceName:"123",interfaceTel:"123",interfaceEmail:"123",customerLevel:"",cooperateTag:"",Registration_date:new Date()}];



function addCustomer(state,{customerName,customerTel,customerAddress,interfaceName,interfaceTel,interfaceEmail,customerLevel,cooperateTag}) {
    console.log(cooperateTag)
    let NewCustomer={id:state.length+1,customerName,customerTel,customerAddress,interfaceName,interfaceTel,interfaceEmail,customerLevel,cooperateTag,Registration_date:new Date()}
    return[...state,NewCustomer]
}
function deleteCustomer(states,customer){
   let index= states.findIndex((state)=>state===customer);
   states.splice(index,1)
   return[...states]
}
function modifyCustomer(states,{customerId,customerName,customerTel,customerAddress,interfaceName,interfaceTel,interfaceEmail,customerLevel,cooperateTag}){
    console.log(customerName)
    let index= states.findIndex((state)=>state.id===customerId);
    states[index].customerName=customerName;
    states[index].customerTel=customerTel;
    states[index].customerAddress=customerAddress;
    states[index].interfaceName=interfaceName;
    states[index].interfaceTel=interfaceTel;
    states[index].interfaceEmail=interfaceEmail;
    states[index].customerLevel=customerLevel;
    states[index].cooperateTag=cooperateTag;
    return[...states]
}

export default function customersReducer(state, action) {
    switch (action.type) {
        case CUSTOMERACTION.ADD_CUSTOMER:
            return addCustomer(state, action.customerLoad);
            case CUSTOMERACTION.DELETE_CUSTOMER:
                return deleteCustomer(state, action.customer);
            case CUSTOMERACTION.MODIFY_CUSTOMER:
                return modifyCustomer(state,action.customerLoad);
        default:
            return state;
    }
}
