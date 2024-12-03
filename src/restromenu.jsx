import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MenuComponent from "./components/MenuComponent";
const Restromenu =()=>{

    const { id } = useParams()
    
   
 const [menus , setmenus] = useState([])
 const [resturi , setresturi] = useState([])
    useEffect(()=>{
getmenuinfo();
    },[])

    async function getmenuinfo() {
const getinfo = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=" + id)
const jsan = await getinfo.json();
console.log(jsan);
// console.log(jsan?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories[0]?.itemCards[0])
setmenus(jsan?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
    setresturi(jsan?.data?.cards[2]?.card?.card?.info)
// bs ab link krna restaurant cards me url and shimmer show krna 
   }


    return (menus.length == 0) ?( <h1>no data</h1> ): (
      <>
       {/* <h1>restraurant id :{id}</h1> */}
        
       {/* <div>{menus.map((suman)=>(
            <h1 key= {suman.card.info.id}> {suman.card.info.name}</h1>
       )

        )}
        </div>  */}

        <MenuComponent imageId={resturi.cloudinaryImageId} name={resturi.name} listmenu={menus}/>
        </> 
    )
}

export default Restromenu