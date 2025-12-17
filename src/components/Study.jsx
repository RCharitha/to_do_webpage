import React from "react";
import { useState } from "react";
function Study(){
    const [study , setStudy]=useState("")
    return (
        <>
        <label>
            Education
        <input type="text"
        placeholder="eg. Btech"
        onChange={(e)=>(
            setStudy(e.target.value)
        )}  />
        </label>
        
        </>
    )
}
export default Study