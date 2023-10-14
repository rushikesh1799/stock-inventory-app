import React from "react";
import Navbar from "../../Components/Navbar";
import ReportsFilter from "./Components/ReportsFilter";
import { useSelector } from "react-redux";
import InventoryReport from "./Components/InventoryReport";
import SalesReport from "./Components/SalesReport";

const Reports = () => {
    const selectFilter = useSelector((state) => state.item.selectFilter);

    return (
        <div>
            <h1>Reports</h1>
            <Navbar />
            <div className="inventory-reports-main">
                <ReportsFilter />
                {selectFilter === "inventory" ? (
                    <InventoryReport />
                ) : selectFilter === "sales" ? (
                    <SalesReport />
                ) : (
                    <h2>Select option to get reports!</h2>
                )}
            </div>
        </div>
    );
};

export default Reports;
