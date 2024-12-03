import { useState, useEffect } from "react"

const useMenu =  (id) => {

    const [menu, setmenu] = useState(null)
    const [restur, setrestur] = useState(null)

    useEffect(() => {
        getmenuinfo();
    }, [])

    async function getmenuinfo() {
        const getinfo = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=" + id)
        const jsan = await getinfo.json();
        setmenu(jsan?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
        setrestur(jsan?.data?.cards[2]?.card?.card?.info)

    }
     console.log(menu , restur);
    return {menu, restur} 

}

export default useMenu;