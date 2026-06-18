import axios from "axios";

const ORDER_URL =
    "http://localhost:8883/orders";

class OrderService {

    checkout(
        request
    ) {

        return axios.post(
            '${ORDER_URL}/checkout',
            request
        );
    }

    getOrders(
        customerId
    ) {

        return axios.get(
            '${ORDER_URL}/customer/${customerId}'
        );
    }

    getOrderById(
        orderId
    ) {

        return axios.get(
            '${ORDER_URL}/${orderId}'
        );
    }
}

export default new OrderService();