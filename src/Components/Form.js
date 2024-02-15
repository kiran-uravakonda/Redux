import { useState } from "react";
import {  useDispatch } from "react-redux";
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
            dispatch({type:'Deposite',payload:values.balance})
            setValue("")
        }}>Deposite</button> &nbsp;

        <button onClick={()=>{
            dispatch({type:'Withdraw',payload:values.balance})
            setValue("")
        }}>Withdraw</button>


<input type="text" name="fname" value={values.fname} onChange={Changed} />  &nbsp;

<button onClick={()=>{
            dispatch({type:'fullName',payload:values.fname})
            setValue("")
        }}>updateName</button>

<br></br>


<input type="number" name="phoneNumber" value={values.phoneNumber} onChange={Changed} />  &nbsp;

<button onClick={()=>{
            dispatch({type:'phoneNumber',payload:values.phoneNumber});
            setValue("");
        }}>UpdateNumber</button>

       </div>
        </>
    )
}
export default Form;