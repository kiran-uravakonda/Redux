
import HigherOrder from "./HOC";
function Person1({CheckedSalary,money}){
     
    return(
       <>
        <h1>Charan salary is {money} </h1>
        <button onClick={CheckedSalary}>Increase Salary</button>
       </>
    )
}
export default HigherOrder(Person1);