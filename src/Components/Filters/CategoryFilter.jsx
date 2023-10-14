import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = React.useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
        dispatch({
            type: "SELECT_ITEM_CATEGORY",
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
                    value={category}
                    label="Category"
                    onChange={handleChange}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="personal care">Personal Care</MenuItem>
                    <MenuItem value="food">Food</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="furniture">Furniture</MenuItem>
                    <MenuItem value="appliances">Appliances</MenuItem>
                    <MenuItem value="books">Books</MenuItem>
                    <MenuItem value="tools">Tools</MenuItem>
                    <MenuItem value="health and beauty">
                        Health and Beauty
                    </MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CategoryFilter;
