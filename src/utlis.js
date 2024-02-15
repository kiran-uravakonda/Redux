import { useEffect, useRef, useState } from 'react';
function useFectch(url) {

    let [data,updateData]=useState([])
    useEffect(() => {
        GetApiData()
    },[])
    async function GetApiData() {
       let res=await  fetch(url)
            let finalRes=await res.json()
            updateData(finalRes)
    }
    return data;

}

export default useFectch;

