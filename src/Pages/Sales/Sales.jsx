import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../redux/Actions/salesAction";
import Navbar from "../../Components/Navbar";
import SalesFilter from "./Components/SalesFilter";
import SalesTable from "./SalesTable";
import Loader from "../../Components/Loader";

const Sales = () => {
    const dispatch = useDispatch();
    const itemsLoadingState = useSelector((state) => state.sale.loading);

    useEffect(() => {
        dispatch(fetchSales());
    }, [dispatch]);

    return (
        <div>
            <h1>Sales Data</h1>
            <Navbar />
            <div className="inventory-main">
                <SalesFilter />
                {itemsLoadingState ? <Loader /> : <SalesTable />}
            </div>
        </div>
    );
};

export default Sales;
