import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const SaleDateFilter = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        console.log("startDate", startDate);
    }, [startDate]);

    return (
        <div className="dates_filter">
            <div className="form_input dates">
                <label htmlFor="start_date">Start Date:</label>
                <TextField
                    id="start_date"
                    type="date"
                    size="small"
                    variant="outlined"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className="form_input dates">
                <label htmlFor="end_date">End Date:</label>
                <TextField
                    id="start_date"
                    type="date"
                    size="small"
                    variant="outlined"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SaleDateFilter;
