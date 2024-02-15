export let  Res=(props)=>{
// console.log(props)
// console.log(props.age)

let {id,fname,age}=props.val
console.log(id)
// console.log(id)
    return(
      <div style={{border:"2px solid red" , margin:"100px",padding:"20px",width:"200px"}}>

      <h1>id is: {id}</h1>
      <h1>fname is: {fname}</h1>
      <h1>age is: {age}</h1>
     

      
      </div>
    )
  }