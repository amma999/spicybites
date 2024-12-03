import { useEffect, useState } from "react"

const Contact =()=>{

const wanteddata = {
    id : "10",
    items : [ {item1}  ]
}
    const [custId , setcustId] = useState("3")
const [item , setitem] = useState([{
    name:"aman",
    quantity:"2"
}])

useEffect(()=>{
    setitem(item[0].quantity++)
},[]) 

   
useEffect(()=>{
    setitem(item[0].quantity++)
},[])  
    console.log(item);
    // console.log(appmen);
    return (
        <h1>contact page</h1>
    )
}

export default Contact