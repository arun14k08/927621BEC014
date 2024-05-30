import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

const App = () => {
    return (
        <>
            <RouterProvider router={Router} fallbackElement={"Loading..."} />
        </>
    );
};

export default App;
