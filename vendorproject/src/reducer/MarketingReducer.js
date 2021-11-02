

export const MARKETACTION = {
    ADD_MARKET: 'ADD_MARKET',
    DELETE_MARKET:'DELETE_MARKET',
    MODIFY_MARKET:'MODIFY_MARKET'
};




export const initialMarket = [];



function addMarket(state,{title ,category,sendTime,buildTime,recipient,status, content, success, failure,total}) {

    let NewMarket={id:state.length,title,category,sendTime,buildTime,recipient,status,content,success, failure,total}
    return[...state,NewMarket]
}
function deleteMarket(states,market){
   let index= states.findIndex((state)=>state===market);
   states.splice(index,1)
   return[...states]
}
function modifyMarket(states,{marketId,title ,category,sendTime,buildTime,recipient, content,status}){
  
    let index= states.findIndex((state)=>state.id===marketId);
    states[index].title=title;
    states[index].category=category;
    states[index].sendTime=sendTime;
    states[index].buildTime=buildTime;
    states[index].recipient=recipient;
    states[index].content=content;
    states[index].status=status;
    return[...states]
}

export default function MarketReducer(state, action) {
    switch (action.type) {
        case MARKETACTION.ADD_MARKET:
            return addMarket(state, action.MarketLoad);
            case MARKETACTION.DELETE_MARKET:
                return deleteMarket(state, action.Market);
            case MARKETACTION.MODIFY_MARKET:
                return modifyMarket(state,action.MarketLoad);
        default:
            return state;
    }
}
