import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(props) {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 30px"
            }}
        >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/products/new">Products New</NavLink>
        </nav>
    );
}

export default Navbar;
