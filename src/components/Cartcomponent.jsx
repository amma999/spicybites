import { useDispatch } from "react-redux"
import { removeitem } from "../utils/Cartslice";

const Cartcomponents =({name,imageId,itemAttribute,price,},item)=>{
    

    const dispatch = useDispatch();
    const removecart =(item)=>{
dispatch(removeitem(item))
    }
    return(
        <>
         <div className="w-[150px] p-3  mt-4 mb-4 ml-5 rounded-xl border-2 bg-purple-100 border-purple-200">
        <img className="p-2 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId} alt="" />
        
        <div className=" flex  justify-center text-center font-bold">{name}</div>
    <div>{itemAttribute.portionSize},{itemAttribute.vegClassifier}</div>
        <div>price : {price/100}</div>
        <div><button onClick={()=>removecart(item)}>remove</button></div>
        
        
        </div>
        </>
    )
}
export default Cartcomponents