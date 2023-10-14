const initialState = {
    sales: [],
    filteredSales: [],
    category: "",
    loading: false,
    error: null,
};

const saleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SALES_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_SALES_SUCCESS":
            return {
                ...state,
                sales: action.payload,
                filteredSales: action.payload,
                loading: false,
            };
        case "FETCH_SALES_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the sales data.",
            };
        case "ADD_SALE_SUCCESS":
            return {
                ...state,
                sales: [...state.sales, action.payload],
                filteredSales: [...state.filteredSales, action.payload],
                loading: false,
            };
        case "ADD_SALE_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error adding the sale data.",
            };
        case "DELETE_SALE_SUCCESS":
            const updatedSales = state.sales.filter(
                (sale) => sale._id !== action.payload
            );
            return {
                ...state,
                sales: updatedSales,
                filteredSales: updatedSales,
                loading: false,
            };
        case "DELETE_SALE_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error deleting the sale data.",
            };
        case "SELECT_SALE_CATEGORY":
            return {
                ...state,
                category: action.payload,
            };
        default:
            return state;
    }
};

export default saleReducer;
