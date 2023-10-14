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
import { deleteSale } from "../../redux/Actions/salesAction";

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

function createData(
    name,
    category,
    price,
    quantity,
    createdAt,
    _id,
    total_revenue
) {
    return { name, category, price, quantity, createdAt, _id, total_revenue };
}

export default function SalesTable() {
    const dispatch = useDispatch();
    const { sales, category } = useSelector((state) => state.sale);

    const filteredSales =
        category.length === 0 || category === "all"
            ? sales
            : sales.filter((item) => sales?.category?.toLowerCase() === category);

    // console.log("sales", sales);
    // console.log("filteredSales", filteredSales);

    const rows = filteredSales.map(
        ({ name, category, price, quantity, createdAt, _id, total_revenue }) =>
            createData(
                name,
                category,
                price,
                quantity,
                createdAt,
                _id,
                total_revenue
            )
    );

    const dateFormat = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    const handleDelete = (itemId) => {
        dispatch(deleteSale(itemId));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Item Sold</StyledTableCell>
                        <StyledTableCell align="left">Category</StyledTableCell>
                        <StyledTableCell align="left">
                            Price (rs)
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            Quantity (in stock)
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            Total Revenue (rs)
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
                                {row.total_revenue}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {dateFormat(row.createdAt)}
                            </StyledTableCell>
                            <StyledTableCell
                                align="left"
                                sx={{ display: "flex", columnGap: "12px" }}
                            >
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
