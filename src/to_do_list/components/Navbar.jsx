import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <div className="navbar">
            What's the Plan for Today?
            <Link to='/about' >About</Link>

        </div>
        </>
    )
}
export default Navbar;