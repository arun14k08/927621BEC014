import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductsPage = () => {
    const [accessToken, setAccessToken] = useState("");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState("AMZ");
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
        if (!accessToken || !companyName) return;
        axios
            .get(
                `http://20.244.56.144/test/companies/${companyName}/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
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
    }, [accessToken, companyName]);

    return (
        <>
            <div>
                <select
                    name="componyName"
                    id=""
                    value={companyName}
                    onChange={(ev) => setCompanyName(ev.target.value)}
                >
                    <option value="AMZ">AMZ</option>
                    <option value="FLP">FLP</option>
                    <option value="SNP">SNP</option>
                    <option value="MYN">MYN</option>
                    <option value="AZO">AZO</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-3 bg-slate-400 px-4 py-2">
                {products?.map((product, index) => {
                    return (
                        <button
                            key={index}
                            className="px-4 py-2 rounded-lg bg-slate-100"
                            onClick={() =>
                                navigate("/products/" + product.productName)
                            }
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
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default ProductsPage;
