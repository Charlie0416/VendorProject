

export const contractACTION = {
    ADD_CONTRACT: 'ADD_CONTRACT',
    DELETE_CONTRACT: 'DELETE_CONTRACT',
    MODIFY_CONTRACT: 'MODIFY_CONTRACT'
};




export const initialContract = [{ contractName: "123", contractCode: "0", vendor: "123", interfaceName: "123", endDate: "123", contractStage: "123", note: "" }];



function addcontract(state, { contractName, vendor, interfaceName, endDate, contractStage, note }) {
    let Newcontract = {contractName, contractCode: state.length, vendor, interfaceName, endDate, contractStage, note }
    console.log(contractName);
    return [...state, Newcontract]
}
function deletecontract(states, contract) {
    let index = states.findIndex((state) => state === contract);
    states.splice(index, 1)
    return [...states]
}
function modifycontract(states, { contractId, contractName, contractCode, vendor, interfaceName, endDate, contractStage, note }) {
    let index = states.findIndex((state) => state.id === contractId);
    states[index].contractName = contractName;
    states[index].contractCode = contractCode;
    states[index].vendor = vendor;
    states[index].interfaceName = interfaceName;
    states[index].endDate = endDate;
    states[index].contractStage = contractStage;
    states[index].note = note;
    return [...states]
}

export default function contractsReducer(state, action) {
    switch (action.type) {
        case contractACTION.ADD_CONTRACT:
            return addcontract(state, action.contractLoad);
        case contractACTION.DELETE_CONTRACT:
            return deletecontract(state, action.contract);
        case contractACTION.MODIFY_CONTRACT:
            return modifycontract(state, action.contractLoad);
        default:
            return state;
    }
}
