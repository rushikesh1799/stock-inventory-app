import React from "react";
import AddNewSale from "../AddNewSale";
import CategoryFilter from "./saleCategoryFilter";
import SaleDateFilter from "./SaleDateFilter";
import "../Sales.css"

const SalesFilter = () => {
    return (
        <div className="filters_wrapper">
            <div className="filters_leftside">
                <CategoryFilter />
                <SaleDateFilter />
            </div>
            <AddNewSale />
        </div>
    );
};

export default SalesFilter;
