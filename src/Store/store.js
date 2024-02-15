import { createStore } from "redux"

let data={
    balance:0,
    fname:null,
    phoneNumber:null
}

function Reducer(state=data,action){
     switch(action.type){
        case 'Deposite':return {...state,balance:state.balance+ +action.payload}
        case 'Withdraw':return {...state,balance:state.balance-action.payload}
        case 'fullName':return {...state,fname:action.payload}
        case 'phoneNumber':return {...state,phoneNumber:action.payload}
        default:return state
     }
}


let store=createStore(Reducer)

export default store

