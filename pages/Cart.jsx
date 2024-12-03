import { useDispatch, useSelector } from "react-redux"
import store from "../src/utils/store"
import Cartcomponents from "../src/components/Cartcomponent";
import { clearitem } from "../src/utils/Cartslice";

const Cart = ()=>{
    const cartitems = useSelector(store => store.cart.items)
    console.log(cartitems);
    const dispatch = useDispatch()
    const cleacart =()=>{
 dispatch(clearitem())
    }
    return(
        <>
        <h1>cart page</h1>
        <div><button onClick={()=>cleacart()}>clear cart</button></div>
        {cartitems.map((item)=>(
            < Cartcomponents {...item?.card?.info } key={item?.cart?.info?.id} item={item}/>
        ))}
        
        </>
    )
}

export default Cart;