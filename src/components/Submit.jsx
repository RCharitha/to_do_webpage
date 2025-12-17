import React from "react";
function Submit(){
    const Check =()=>(
        alert("successfully submited")
    )
    return (
    <>
    <button onClick={Check}  >submit</button>
    </>
    )
}
export default Submit