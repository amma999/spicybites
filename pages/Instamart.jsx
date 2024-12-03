import { useState } from "react"

const Section = ( {name , description , isvisible , setisvisible ,unvisible} )=>{



return (
    <>
    <div className="border-black border-2 w-96">
        <div>{name} </div>
         {isvisible ? (
            <button onClick={()=>unvisible()} >hide
            </button>
         ):( 
         <button 
         onClick={()=>setisvisible()}>show
         </button>
         )}

        <div>{isvisible && description}</div>
    </div>
    </>
        )
      }




const Instamart = ()=>{


const [turu , setturu] = useState("")
 


    return (

        <>
        <Section name={"about instamart"} 
        description={"hello this is info about insta mart"} 
        isvisible={turu == "about"}
        setisvisible={()=> setturu("about")}
        unvisible={()=> setturu("")}
        />
         <Section name={"about contact"} 
        description={"hello this is info about insta mart"} 
        isvisible={turu == "contact"}
        setisvisible={()=> setturu("contact")}
        unvisible={()=> setturu("")}
        />
         <Section name={"about service"} 
        description={"hello this is info about insta mart"} 
        isvisible={turu == "service"}
        setisvisible={()=> setturu("service")}
        unvisible={()=>  setturu("")}
        />
        </>
    )
}

export default Instamart