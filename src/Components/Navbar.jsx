import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav_wrapper">
            <Link to="/" className="nav_links">
                Inventory
            </Link>
            <Link to="/sales" className="nav_links">
                Sales
            </Link>
            <Link to="/reports-analytics" className="nav_links">
                Reports
            </Link>
            {/* <Link to="/foodItems" className="nav_links">
                FoodItems
            </Link>
            <Link to="/goals" className="nav_links">
                Goals
            </Link> */}
        </nav>
    );
};

export default Navbar;
