import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import { RefreshContextProvider } from "./Context/RefreshContext";



ReactDOM.render(
    <RefreshContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RefreshContextProvider>
    , document.getElementById("root"));
