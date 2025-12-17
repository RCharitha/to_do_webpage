import React from "react";
import { useState } from "react";
function Password(){
    const [pass,setPass]=useState("")
    return(
        <>
        <label> Password
        <input type="text"
        placeholder="enter password"
        onChange={(e)=>(
            setPass(e.target.value)
        )}  />
        </label>
        
        </>
    )
}
export default Password