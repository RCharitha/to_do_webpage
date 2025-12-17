import React from "react";
import { useState } from "react";
function Password(){
    const [num,setnum]=useState("")
    return(
        <>
        <label>
            Number
        <input type="number"
        placeholder="enter number"
        onChange={(e)=>(
            setnum(Number(e.target.value))
        )}  />
        </label>
        
        </>
    )
}
export default Password