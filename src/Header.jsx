import Restroc from "./components/Restroc"
import { useEffect, useState } from "react"
import { Restaurantlist } from "./Restaurantlist"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import store from "./utils/store"
import Cartslice from "./utils/Cartslice"

const Headerc = () => {

    const cartslice = useSelector(store => store.cart.items)


    return (

        <>
            <div className="flex bg-purple-50 justify-between h-20">

                <div className="">   
                    <Link to="/" > <img className=" pl-2 pt-2  h-[73px] rounded-full" src="https://lh3.googleusercontent.com/X4gCTwyype6D7RY-FaxNobvMtyNaNXus3liBkUfRkIdkBY7mv_Xp9WjVIWJYyHK_qyyUecV-6F23O1e8mV3RTCERbNS59JvUyU1CSYHU" alt="" /> </Link>
                </div >
                <div className=" font-bold pt-[20px] text-3xl text-purple-950"> FOOD ZONE</div>
                <div className="flex justify-center items-center  ">  <ul className="flex  max-w-max  space-x-14 justify-end pr-12">
                    <li> <Link to="/"> home </Link></li>
                    <li> <Link to="/about">about </Link></li>
                    <li> <Link to="/service">service </Link></li>
                    <li> <Link to="/contact">contact </Link></li>
                    <li> <Link to="/cart">cart {cartslice.length} </Link></li>
                    </ul>

                </div>
            </div>
            <div className=" border-t"></div>
        </>
    )
}


const Footerc = () => {
    return (
        <>
            <div className=" bg-slate-800 h-12"> </div>

        </>
    )
}


const Shimmer = () => {
    return (
        <div className="flex flex-wrap space-x-6   border-2 border-black"> {Array(6).fill("").map((mera)=>{
<div className=" p-3  mt-4 mb-4 ml-5 rounded-xl border-2 border-black">aman</div>
        })}
        </div>
    )




}


const Bodyc = () => {


    const [txt, setxt] = useState("");
    const [allrestrolist, setallrestrolist] = useState([])
    const [filteredrestrolist, setfilteredrestrolist] = useState([Restaurantlist])

    useEffect(() => {
        getdata();
    }, [])


    async function getdata() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setallrestrolist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredrestrolist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }


    function filterdata(searchtext, restaurenti) {

        const filterdata = restaurenti.filter((resto) => {
            return resto.info.name.toLowerCase().includes(searchtext.toLowerCase())

        })



        setfilteredrestrolist(filterdata)


    }

    // console.log(filteredrestrolist);
    if (filteredrestrolist.length == 0)
        return <h1>hy</h1>


    return (allrestrolist.length == 0) ? (<> <Shimmer /> </>) : (
        <>
            <div className="bg-purple-50 ">
                <input
                    className="rounded-sm pl-2 m-1 border-2 bg-purple-100 border-purple-200"
                    type="text"
                    placeholder="search"
                    value={txt}
                    onChange={(e) => setxt(e.target.value)}

                />

                <button className="rounded-lg  pl-1 pr-1 m-1 border-2 bg-purple-100 border-purple-200"
                    onClick={() =>
                        filterdata(txt, allrestrolist)

                    }
                >submit</button>
            </div>
            <div className=" border-t"></div>
            <div className="flex flex-wrap space-x-6 bg-purple-50">
                {filteredrestrolist.map((restauranti, index) => {
                    return (


                        <Link to={"/restaurant/"+ restauranti.info.id  } key={restauranti.info.id}> <Restroc {...restauranti.info} key={restauranti.info.id} /> </Link>

                    )
                })}


            </div>

        </>
    )
}

export { Headerc, Footerc, Bodyc }

