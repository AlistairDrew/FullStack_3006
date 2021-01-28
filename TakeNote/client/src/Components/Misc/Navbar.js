import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <div className="navbar">
        <Link to="/">
        <h1>Take Note</h1>
        </Link>

        <Link to="/chat">Chat</Link>
        {/* <Link to="/Register">Register</Link> */}
    

    </div>
}

export default Navbar;