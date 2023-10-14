import React from "react";
import AddNewInventoryItem from "../../Pages/Inventory/AddNewInventoryItem";
import CategoryFilter from "./categoryFilter";
import "./Filters.css"

const Filters = () => {
    return (
        <div className="filters_wrapper">
            <div>
                <CategoryFilter />
            </div>
            <AddNewInventoryItem />
        </div>
    );
};

export default Filters;
