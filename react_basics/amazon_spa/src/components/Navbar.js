import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(props) {
    const { currentUser, onSignOut } = props;
    const handleSignOutClick = event => {
        event.preventDefault();

        if (typeof onSignOut === "function") {
            onSignOut();
        }
    };
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 30px"
            }}
        >
            <NavLink to="/products">Products</NavLink>

            {currentUser ? (
                <>
                    <span>Welcome {currentUser.first_name + ' ' + currentUser.last_name}</span>
                    <a href="#sign_out" onClick={handleSignOutClick}>
                        Sign Out
                    </a>
                    <NavLink to="/products/new">Publish a Product</NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/sign_in">Sign In</NavLink>
                </>
            )}
        </nav>
    );
}

export default Navbar;
