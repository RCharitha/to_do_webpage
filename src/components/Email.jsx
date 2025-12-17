import React from "react";
import { useState } from "react";
function Email(){
    const [email,setEmail]=useState("")
    return (
    <>
    <label>
        Email
        <input type="text"
        placeholder="enter email"
        onChange={(e)=>(
            setEmail(e.target.value)
        )} />
    </label>
    </>
    )
}
export default Email