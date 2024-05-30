import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
    const [accessToken, setAccessToken] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .post("http://20.244.56.144/test/auth", {
                companyName: "arun14k08",
                clientID: "33ffffee-f8b4-4b48-936b-27a21ff06a10",
                clientSecret: "AFGYnoXNjZydVPsw",
                ownerName: "ARUN KUMAR D",
                ownerEmail: "arun14k08@gmail.com",
                rollNo: "927621BEC014",
            })
            .then((response) => {
                setAccessToken(response.data.access_token);
            });
    }, []);

    useEffect(() => {
        if (!accessToken) return;
        axios
            .get(
                "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((response) => {
                const { data } = response;
                setProducts(data);
            });
    }, [accessToken]);

    return (
        <div className="grid grid-cols-3 gap-3 bg-slate-400 px-4 py-2">
            {products?.map((product) => {
                return (
                    <div
                        key={product.id}
                        className="px-4 py-2 rounded-lg bg-slate-100"
                    >
                        <p>Name:{product.productName}</p>
                        <p>Price:{product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsPage;
