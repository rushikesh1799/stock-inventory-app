import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { addSale } from "../../redux/Actions/salesAction";
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

const AddNewSale = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newSale, setNewSale] = useState({
        name: "",
        quantity: "",
        price: "",
        category: "",
    });

    const condition =
        newSale.name === "" ||
        newSale.quantity === "" ||
        newSale.price === "" ||
        newSale.category === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            dispatch(addSale(newSale));
            handleClose();
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen} color="info">
                <AddCircleRoundedIcon sx={{ marginRight: "4px" }} />
                Add Sale
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
                        Add New Sale
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
                                value={newSale.name}
                                onChange={(e) =>
                                    setNewSale((prev) => ({
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
                                value={newSale.quantity}
                                onChange={(e) =>
                                    setNewSale((prev) => ({
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
                                value={newSale.price}
                                onChange={(e) =>
                                    setNewSale((prev) => ({
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
                                value={newSale.category}
                                onChange={(e) =>
                                    setNewSale((prev) => ({
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

export default AddNewSale;
