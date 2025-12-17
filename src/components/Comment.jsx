import React from "react";
import { useState } from "react";
function Comment(){
    const [comment,setComment]=useState("")
    return (
    <>
    <label>
        Comment<input type="text"
        onChange={(e)=>(
            setComment(e.target.value)
        )} />
    </label>
    
    </>
    )
}
export default Comment