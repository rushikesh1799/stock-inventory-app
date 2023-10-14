import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav_wrapper">
            <div className="centered_links">
                <Link to="/" className="nav_links">
                    Inventory
                </Link>
                <Link to="/sales" className="nav_links">
                    Sales
                </Link>
                <Link to="/reports-analytics" className="nav_links">
                    Reports
                </Link>
            </div>

            <div className="end_links">
                <a
                    href="https://github.com/rushikesh1799/stock-inventory-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav_links"
                    style={{ marginRight: "8px" }}
                >
                    Github
                </a>

                <a
                    href="https://replit.com/@RushikeshBunge1/Inventory-Management-backend-API#index.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav_links"
                >
                    Replit
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
