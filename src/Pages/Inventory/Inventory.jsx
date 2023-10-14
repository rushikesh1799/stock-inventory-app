import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/Actions/itemsAction";
import InventoryTable from "./InventoryTable";
import Filters from "../../Components/Filters/Filters";

import "./Inventory.css";
import Loader from "../../Components/Loader";

const Inventory = () => {
    const dispatch = useDispatch();
    const itemsLoadingState = useSelector((state) => state.item.loading);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
        <div>
            <h1>Inventory Data</h1>
            <Navbar />
            <div className="inventory-main">
                <Filters />
                {itemsLoadingState ? <Loader /> : <InventoryTable />}
            </div>
        </div>
    );
};

export default Inventory;
