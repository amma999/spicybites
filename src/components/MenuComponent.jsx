import { useDispatch } from "react-redux"
import { additem } from "../utils/Cartslice";

const MenuComponent = ({ imageId , name , listmenu}) => {

const dispatch = useDispatch();
const addtocart = (item)=>{
    dispatch(additem(item))
}

    return (<>
        <div className="flex bg-purple-50">
            <div  className="p-4">
             <div className="flex justify-center"> <img className="w-[200px] h-[115px] rounded-sm" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId} alt="" /> </div>
             <div className="m-5 pt-2 font-bold "> {name} </div>
           </div>
           <div className="pt-2 pb-3" > 
            <div className="font-extrabold"> Menu </div>
             <div>{listmenu.map((item)=>(
            <li className="pb-1" key= {item.card.info.id}> {item.card.info.name} <button className="bg-slate-600 p-1 rounded-md" onClick={()=>addtocart(item)}>add item</button></li> 
       )

        )}
        </div> 
           </div>
        </div>
    </>
    )

}

export default MenuComponent