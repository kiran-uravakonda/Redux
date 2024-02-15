export function deposite(amount){
    return {type:'Deposite',payload:amount}
}


export function withdraw(amount){
    return {type:'Withdraw',payload:amount}
}

export function fname(amount){
    return {type:'fullName',payload:amount}
}

export function phone(amount){
    return {type:'phoneNumber',payload:amount}
}