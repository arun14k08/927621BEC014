import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<ProductsPage/>,
    },
    {
        path:'/products/:id',
        element:<ProductDetailsPage/>,
    }
])

export default Router;