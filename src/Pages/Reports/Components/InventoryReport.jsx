import React from "react";
import { useSelector } from "react-redux";

const InventoryReport = () => {
    const items = useSelector((state) => state.item.items);

    const inStockItems = items.filter((item) => item.quantity !== 0);
    const inStockItemsQuantity = inStockItems.reduce(
        (acc, { quantity }) => acc + quantity,
        0
    );

    return (
        <div className="inventory_report_card">
            <h3 className="inventory_report_card_title">
                Inventory Items Report
            </h3>
            <div className="inventory-report-details">
                <span>Total Inventory Items (in stock): </span>
                <b>{inStockItems.length}</b>
            </div>
            <div className="inventory-report-details">
                <span>Total Inventory Items (qty): </span>
                <b>{inStockItemsQuantity}</b>
            </div>
        </div>
    );
};

export default InventoryReport;
