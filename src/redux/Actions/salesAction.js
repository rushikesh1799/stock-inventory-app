import axios from "axios";

export const fetchSales = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_SALES_LOADING" });
            const response = await axios.get(
                "https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/sales"
            );
            const data = response.data.sales;
            dispatch({ type: "FETCH_SALES_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the sales data,", error);
            dispatch({ type: "FETCH_SALES_FAILURE" });
        }
    };
};

export const addSale = (sale) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/sales`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(sale),
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({ type: "ADD_SALE_SUCCESS", payload: data.sale });
            }
        } catch (error) {
            dispatch({ type: "ADD_SALE_FAILURE" });
        }
    };
};

export const deleteSale = (saleId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/sales/${saleId}`
            );
            if (response.status === 201) {
                dispatch({ type: "DELETE_SALE_SUCCESS", payload: saleId });
            }
        } catch (error) {
            dispatch({ type: "DELETE_SALE_FAILURE" });
        }
    };
};
