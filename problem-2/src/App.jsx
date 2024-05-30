import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const App = () => {
    return (
        <>
            <RouterProvider router={Router} />
        </>
    );
};

export default App;
