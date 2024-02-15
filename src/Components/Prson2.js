
import HigherOrder from "./HOC";
function Person2({CheckedSalary,money}){
  
   return(
      <>
       <h1>Kiran salary is {money} </h1>
       <button onClick={CheckedSalary}>Increase Salary</button>
      </>
   )
}
export default HigherOrder(Person2);