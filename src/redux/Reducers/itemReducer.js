const initialState = {
    items: [],
    filteredItems: [],
    category: "",
    selectFilter: "",
    loading: false,
    error: null,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ITEMS_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_ITEMS_SUCCESS":
            return {
                ...state,
                items: action.payload,
                filteredItems: action.payload,
                loading: false,
            };
        case "FETCH_ITEMS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the items data.",
            };
        case "ADD_ITEM_SUCCESS":
            return {
                ...state,
                items: [...state.items, action.payload],
                filteredItems: [...state.filteredItems, action.payload],
                loading: false,
            };
        case "ADD_ITEM_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the item data.",
            };
        case "UPDATE_ITEMS_SUCCESS":
            return {
                ...state,
                items: action.payload,
                filteredItems: action.payload,
                loading: false,
            };
        case "UPDATE_ITEMS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error updating the item data.",
            };
        case "DELETE_ITEM_SUCCESS":
            const updatedItems = state.items.filter(
                (item) => item._id !== action.payload
            );
            return {
                ...state,
                items: updatedItems,
                filteredItems: updatedItems,
                loading: false,
            };
        case "DELETE_ITEM_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error deleting the item data.",
            };
        case "SELECT_ITEM_CATEGORY":
            return {
                ...state,
                category: action.payload,
            };
        case "SET_SELECTFILTER":
            return {
                ...state,
                selectFilter: action.payload,
            };
        default:
            return state;
    }
};

export default itemReducer;
