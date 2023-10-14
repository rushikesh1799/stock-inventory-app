import axios from "axios";

export const fetchItems = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_ITEMS_LOADING" });
            const response = await axios.get(
                "https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/items"
            );
            const data = response.data.items;
            dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the items,", error);
            dispatch({ type: "FETCH_ITEMS_FAILURE" });
        }
    };
};

export const addItems = (item) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/items`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(item),
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({ type: "ADD_ITEM_SUCCESS", payload: data.item });
            }
        } catch (error) {
            dispatch({ type: "ADD_ITEM_FAILURE" });
        }
    };
};

export const deleteItem = (itemId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/items/${itemId}`
            );
            if (response.status === 201) {
                dispatch({ type: "DELETE_ITEM_SUCCESS", payload: itemId });
            }
        } catch (error) {
            dispatch({ type: "DELETE_ITEM_FAILURE" });
        }
    };
};

export const updateItem = (itemId, item) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://inventory-management-backend-api.rushikeshbunge1.repl.co/api/items/${itemId}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(item),
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({ type: "UPDATE_ITEMS_SUCCESS", payload: data.items });
            }
        } catch (error) {
            dispatch({ type: "UPDATE_ITEMS_FAILURE" });
        }
    };
};
