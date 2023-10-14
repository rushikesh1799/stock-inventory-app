import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteItem } from "../../redux/Actions/itemsAction";
import UpdateInventoryItem from "./UpdateInventoryItem";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(name, category, price, quantity, createdAt, _id) {
    return { name, category, price, quantity, createdAt, _id };
}

export default function InventoryTable() {
    const dispatch = useDispatch();
    const { items, category } = useSelector((state) => state.item);

    const filteredItems =
        category.length === 0 || category === "all"
            ? items
            : items.filter(
                  (item) => item?.category?.toLowerCase() === category
              );

    // console.log(filteredItems);

    const rows = filteredItems.map(
        ({ name, category, price, quantity, createdAt, _id }) =>
            createData(name, category, price, quantity, createdAt, _id)
    );

    const dateFormat = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    const handleDelete = (itemId) => {
        dispatch(deleteItem(itemId));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Category</StyledTableCell>
                        <StyledTableCell align="left">
                            Price (rs)
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            Quantity (in stock)
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            Date Added
                        </StyledTableCell>
                        <StyledTableCell align="left">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.category}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.price}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.quantity}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {dateFormat(row.createdAt)}
                            </StyledTableCell>
                            <StyledTableCell
                                align="left"
                                sx={{ display: "flex", columnGap: "12px" }}
                            >
                                <UpdateInventoryItem item={row} />
                                <DeleteOutlineOutlinedIcon
                                    sx={{
                                        bgcolor: "#ffdede",
                                        padding: "4px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleDelete(row._id)}
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
