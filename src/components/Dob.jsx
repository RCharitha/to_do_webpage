import React from "react";
import { useState } from "react";
function Dob(){
    const [dob,setDob]=useState("")
    return (
    <>
    <label>
        Date of birth:
        <input type="date"
        value={dob}
        onChange={(e)=>(
            setDob(e.target.value)
        )}

         />
    </label>
    </>
    )
}
export default Dob