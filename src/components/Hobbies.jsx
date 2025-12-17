import React, { useState } from "react";
function Hobbies(){
    const [hobbi,addHobbi]=useState([])
    const handle=(e)=>{
        const value=e.target.value

        if(hobbi.includes(value))
        {
            addHobbi(hobbi.filter((hobby)=>(
                hobby!==value
            )))
        }
        else
        {
            addHobbi([...hobbi,value])
        }

    }
    return (
        <>
        <label>
            reading
        <input type="checkbox"
        value="reading"
        onChange={handle} />
        </label>
        
        <label>
            playing
        <input type="checkbox"
        value="playing"
        onChange={handle} />
        </label>
        <label>
            painting
        <input type="checkbox"
        value="painting"
        onChange={handle} />
        </label>
        <label>
            dancing
        <input type="checkbox"
        value="dancing"
        onChange={handle} />
        </label>
        </>
        
    )
}
export default Hobbies