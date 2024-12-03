import { useContext } from "react"
import Usercontext from "../../Usercontext"

const Restroc = ({name,cuisines,cloudinaryImageId})=> {

    const { User } = useContext(Usercontext)
    return (
        <>
        <div className="w-[150px] p-3  mt-4 mb-4 ml-5 rounded-xl border-2 bg-purple-100 border-purple-200">
        <img className="p-2 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
        
        <div className="h-[70px] flex  justify-center text-center font-bold">{name}</div>
        <div>cusinines : {cuisines.join(' , ')}</div>
        <div>stars: 2 stars</div>
        <div>{User.name}</div>
        <div>{User.age}</div>
        </div>

        </>
    )
}

export default Restroc