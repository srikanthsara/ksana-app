import axios from "axios";

const PRODUCT_URL =
    "http://localhost:9090/products";

class ProductService {

    getAllProducts() {

        return axios.get(
            PRODUCT_URL
        );
    }

    getProductById(
        productId
    ) {

        return axios.get(
            '${PRODUCT_URL}/${productId}'
        );
    }
}

export default new ProductService();