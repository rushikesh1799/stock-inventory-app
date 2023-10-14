import React from "react";
import AddNewInventoryItem from "../../Pages/Inventory/AddNewInventoryItem";
import "./Filters.css"
import CategoryFilter from "./CategoryFilter";

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
