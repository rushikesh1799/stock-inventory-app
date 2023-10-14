import React from "react";
import "../Reports.css";
import { Button } from "@mui/material";
import SelectFilter from "./SelectFilter";

const ReportsFilter = () => {
    return (
        <div className="reports_filters_wrapper">
            <div>
                <label htmlFor="">Generate Reports: </label>
            </div>

            <SelectFilter />
        </div>
    );
};

export default ReportsFilter;
