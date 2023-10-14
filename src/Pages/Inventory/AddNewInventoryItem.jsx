import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { addItems } from "../../redux/Actions/itemsAction";
import { MenuItem } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
    "@media (max-width: 768px)": {
        width: 300,
    },
};

const AddNewInventoryItem = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newItem, setNewItem] = useState({
        name: "",
        quantity: "",
        price: "",
        category: "",
    });

    const condition =
        newItem.name === "" ||
        newItem.quantity === "" ||
        newItem.price === "" ||
        newItem.category === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            dispatch(addItems(newItem));
            handleClose();
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen} color="info">
                <AddCircleRoundedIcon sx={{ marginRight: "4px" }} />
                Add Item
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add New Inventory Item
                    </Typography>
                    <hr />

                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                        component="div"
                    >
                        <div className="form_input">
                            <label htmlFor="address1">Name:</label>
                            <TextField
                                id="outlined-required"
                                label="Name"
                                variant="outlined"
                                required
                                size="small"
                                value={newItem.name}
                                onChange={(e) =>
                                    setNewItem((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="address2">Quantity:</label>
                            <TextField
                                id="outlined-required"
                                label="Quantity"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newItem.quantity}
                                onChange={(e) =>
                                    setNewItem((prev) => ({
                                        ...prev,
                                        quantity: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="address2">Price:</label>
                            <TextField
                                id="outlined-required"
                                label="Price (rs)"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newItem.price}
                                onChange={(e) =>
                                    setNewItem((prev) => ({
                                        ...prev,
                                        price: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="address2">Category:</label>
                            <TextField
                                id="outlined-required"
                                select
                                label="Category"
                                variant="outlined"
                                required
                                size="small"
                                value={newItem.category}
                                onChange={(e) =>
                                    setNewItem((prev) => ({
                                        ...prev,
                                        category: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            >
                                <MenuItem value="Personal Care">
                                    Personal Care
                                </MenuItem>
                                <MenuItem value="Food">Food</MenuItem>
                                <MenuItem value="Electronics">
                                    Electronics
                                </MenuItem>
                                <MenuItem value="Furniture">Furniture</MenuItem>
                                <MenuItem value="Appliances">
                                    Appliances
                                </MenuItem>
                                <MenuItem value="Books">Books</MenuItem>
                                <MenuItem value="Tools">Tools</MenuItem>
                                <MenuItem value="Health and Beauty">
                                    Health and Beauty
                                </MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </TextField>
                        </div>

                        {/* If we want a dropdown category - Edit this */}
                        {/* <div className="form_input">
                            <label htmlFor="city">Exercise Type:</label>
                            <TextField
                                id="outlined-required"
                                select
                                label="Select Exercise Type"
                                variant="outlined"
                                required
                                size="small"
                                value={newItem.exercise_type}
                                onChange={(e) =>
                                    setNewExercise((prev) => ({
                                        ...prev,
                                        exercise_type: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            >
                                <MenuItem key={`2`} value={"Running"}>
                                    Running
                                </MenuItem>
                                <MenuItem key={`3`} value={"Swimming"}>
                                    Swimming
                                </MenuItem>
                                <MenuItem key={`4`} value={"Cycling"}>
                                    Cycling
                                </MenuItem>

                                <MenuItem key={`7`} value={"Squats"}>
                                    Squats
                                </MenuItem>
                                <MenuItem key={`8`} value={"Yoga"}>
                                    Yoga
                                </MenuItem>
                                <MenuItem key={`9`} value={"Dancing"}>
                                    Dancing
                                </MenuItem>
                                <MenuItem key={`10`} value={"Dancing"}>
                                    Plank
                                </MenuItem>

                                <MenuItem key={`12`} value={"Burpees"}>
                                    Burpees
                                </MenuItem>
                                <MenuItem key={`13`} value={"Bicycling"}>
                                    Bicycling
                                </MenuItem>

                                <MenuItem key={`16`} value={"Rowing"}>
                                    Rowing
                                </MenuItem>

                                <MenuItem key={`18`} value={"Treadmill"}>
                                    Treadmill
                                </MenuItem>
                                <MenuItem key={`19`} value={"Hiking"}>
                                    Hiking
                                </MenuItem>
                            </TextField>
                        </div> */}
                    </Typography>

                    <Typography
                        id="modal-modal-footer"
                        sx={{ mt: 2, display: "flex", gap: "1rem" }}
                        component="div"
                    >
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="small"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Add
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default AddNewInventoryItem;
