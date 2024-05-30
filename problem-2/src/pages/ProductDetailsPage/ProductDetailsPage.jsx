import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [accessToken, setAccessToken] = useState("");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
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
        <div>
            {products
                .filter((product) => product.productName === id)
                .map((product, i) => {
                    if (i === 0)
                        return (
                            <div
                                key={i}
                                className="px-4 py-2 rounded-lg bg-slate-100"
                            >
                                <p>Name:{product.productName}</p>
                                <img
                                    src="https://picsum.photos/seed/picsum/200/300"
                                    alt=""
                                    className="w-[100px] aspect-square mx-auto"
                                />
                                <p>Price:{product.price}</p>
                                <p>Rating: {product.rating}</p>
                                <p>Discount: {product.discount}</p>
                                <p>Availiblity: {product.availability}</p>
                            </div>
                        );
                })}
        </div>
    );
};

export default ProductDetailsPage;
