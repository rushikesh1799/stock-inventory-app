import React from "react";
import { useSelector } from "react-redux";

const SalesReport = () => {
    const sales = useSelector((state) => state.sale.sales);
    const totalSoldItems = sales.reduce(
        (acc, { quantity }) => acc + quantity,
        0
    );
    const totalRevenueGenerated = sales.reduce(
        (acc, { total_revenue }) => acc + total_revenue,
        0
    );

    return (
        <div className="inventory_report_card">
            <h3 className="inventory_report_card_title">Sales Data Report</h3>
            <div className="inventory-report-details">
                <span>Total Sales Items (types): </span>
                <b>{sales.length}</b>
            </div>
            <div className="inventory-report-details">
                <span>Total Sold Items (qty): </span>
                <b>{totalSoldItems}</b>
            </div>
            <div className="inventory-report-details">
                <span>Total Revenue Generated (rs): </span>
                <b>
                    <span>₹</span> {totalRevenueGenerated}
                </b>
            </div>
        </div>
    );
};

export default SalesReport;
