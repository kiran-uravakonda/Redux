
function HigherOrder(Component){
    console.log(Component)
    let data={
        fname:"kiran",age:20,place:"bangalore"
    }

    return ()=> <Component {...data}/>
   
}

export default HigherOrder;