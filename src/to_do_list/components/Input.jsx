import React from "react";
import "./input.css";
import { useState } from "react";


function Input({ onAdd }){
    const [plan,setPlan]=useState("");

    const handleAdd = () => {
    if (plan.trim() === "") return; 
    onAdd(plan);      
    setPlan("");      
  };

    return(
    <> <div className="input">
        <label>
            add your plan here
            <input type="text" 
                   placeholder="enter your plan" 
                   onChange={(e)=>setPlan(e.target.value)}
             />
        </label>
        <button onClick={handleAdd} >ADD</button>

    </div>
    </>
    )
}
export default Input;
