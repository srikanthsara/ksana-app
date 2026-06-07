import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderPage() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        axios
            .get(
                "http://localhost:9090/orders/customer/CUST1001"
            )
            .then(response => {

                setOrders(response.data);

            })
            .catch(error => {

                console.error(error);

            });

    }, []);

    return (

        <div className="container mt-4">

            <h2>My Orders</h2>

            <table className="table table-bordered">

                <thead>

                <tr>

                    <th>Order Id</th>

                    <th>Customer</th>

                    <th>Total Amount</th>

                    <th>Status</th>

                </tr>

                </thead>

                <tbody>

                {

                    orders.map(order => (

                        <tr key={order.orderId}>

                            <td>{order.orderId}</td>

                            <td>{order.customerName}</td>

                            <td>
                                ₹ {order.totalAmount}
                            </td>

                            <td>
                                {order.orderStatus}
                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>
    );
}