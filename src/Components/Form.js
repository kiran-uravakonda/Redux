import { useState } from "react";
import {  useDispatch } from "react-redux";
import { deposite,withdraw,fname,phone } from "../Store/actions";
function Form(){
    const dispatch = useDispatch();
    let [values,setValue]=useState({
        balance:'',
        fname:'',
        phoneNumber:''
    })

    function Changed(e){
        setValue({
            ...values,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
       <h1>Form Component</h1>
       <div>
        <input type="number" name="balance" value={values.balance} onChange={Changed} /> &nbsp;
        <button onClick={()=>{
            dispatch(deposite(values.balance))
            setValue("")
        }}>Deposite</button> &nbsp;

        <button onClick={()=>{
            dispatch(withdraw(values.balance))
            setValue("")
        }}>Withdraw</button>


<input type="text" name="fname" value={values.fname} onChange={Changed} />  &nbsp;

<button onClick={()=>{
            dispatch(fname(values.fname))
            setValue("")
        }}>updateName</button>

<br></br>


<input type="number" name="phoneNumber" value={values.phoneNumber} onChange={Changed} />  &nbsp;

<button onClick={()=>{
            dispatch(phone(values.phoneNumber));
            setValue("");
        }}>UpdateNumber</button>

       </div>
        </>
    )
}
export default Form;