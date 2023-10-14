import "./App.css";
import { Route, Routes } from "react-router";

import Inventory from "./Pages/Inventory/Inventory";
import Sales from "./Pages/Sales/Sales";
import { useSelector } from "react-redux";
import Reports from "./Pages/Reports/Reports";

function App() {
    const state = useSelector((state) => state.sale);
    console.log(state);
    return (
        <>
            <Routes>
                <Route path="/" element={<Inventory />}></Route>
                <Route path="/sales" element={<Sales />}></Route>
                <Route path="/reports-analytics" element={<Reports />}></Route>
            </Routes>
        </>
    );
}

export default App;
