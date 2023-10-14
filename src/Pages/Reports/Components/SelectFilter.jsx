import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";

const SelectFilter = () => {
    const dispatch = useDispatch();
    const selectFilter = useSelector((state) => state.item.selectFilter);

    const handleChange = (event) => {
        dispatch({
            type: "SET_SELECTFILTER",
            payload: event.target.value,
        });
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectFilter}
                    label="Reports"
                    onChange={handleChange}
                >
                    <MenuItem value="inventory">Inventory</MenuItem>
                    <MenuItem value="sales">Sales</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectFilter;
