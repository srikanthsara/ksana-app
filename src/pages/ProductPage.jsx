import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductService  from "../services/ProductService";



export default function ProductPage() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        ProductService
            .getAllProducts()

            .then(response => {

                setProducts(
                    response.data
                );

            });

    }, []);

    const addToCart = (product) => {

        const payload = {

            customerId: "CUST1001",

            customerName: "Srikanth",

            productId: product.productId,

            quantity: 1
        };

        axios
            .post(
                "http://localhost:9090/cart/add",
                payload
            )
            .then(response => {

                //alert("Product Added To Cart");

                navigate("/cart");

            })
            .catch(error => {

                console.error(error);

                alert("Failed To Add Product");
            });
    };

    return (
        <>
              <Header />
        <div className="container mt-4">

            <h2>Grocery Products</h2>

            <table className="table table-bordered table-striped">

                <thead>

                    <tr>

                        <th>Product Id</th>

                        <th>Product Name</th>

                        <th>Brand</th>

                        <th>Price</th>

                        <th>GST %</th>

                        <th>Stock</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        products.map(product => (

                            <tr key={product.productId}>

                                <td>{product.productId}</td>

                                <td>{product.productName}</td>

                                <td>{product.brand}</td>

                                <td>₹ {product.price}</td>

                                <td>{product.gstPercentage}%</td>

                                <td>{product.availableQuantity}</td>

                                <td>

                                    <button
                                        className="btn btn-primary"
                                        onClick={() => addToCart(product)}
                                    >

                                        Add To Cart

                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

         </div>

        <Footer />

    </>
);
}