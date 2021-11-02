

export const SERVICEACTION = {
    ADD_SERVICE: 'ADD_SERVICE',
    DELETE_SERVICE:'DELETE_SERVICE',
    MODIFY_SERVICE:'MODIFY_SERVICE'
};




export const initialService = [{id:1,customerName:"123",customerTel:"123",customerAddress:"123",interfaceName:"123",interfaceTel:"123",interfaceEmail:"123",customerLevel:"",cooperateTag:"",Registration_date:new Date()}];



function addService(state,{title,category,customerName,customerTel, Email,status,buildDate}) {

    let NewCustomer={id:state.length+1,customerName,customerTel,title,category,Email,status,buildDate}
    return[...state,NewCustomer]
}
function deleteService(states,service){
   let index= states.findIndex((state)=>state===service);
   states.splice(index,1)
   return[...states]
}
function modifyService(states,{id,customerName,customerTel,title,category,Email,status}){
    console.log(customerName)
    let index= states.findIndex((state)=>state.id===id);
    states[index].customerName=customerName;
    states[index].customerTel=customerTel;
    states[index].title=title;
    states[index].category=category;
    states[index].Email=Email;
    states[index].status=status;
    return[...states]
}

export default function serviceReducer(state, action) {
    switch (action.type) {
        case SERVICEACTION.ADD_SERVICE:
            return addService(state, action.serviceLoad);
            case SERVICEACTION.DELETE_SERVICE:
                return deleteService(state, action.service);
            case SERVICEACTION.MODIFY_SERVICE:
                return modifyService(state,action.serviceLoad);
        default:
            return state;
    }
}
