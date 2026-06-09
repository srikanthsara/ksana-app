import axios from "axios";

const PRODUCT_URL = "http://localhost:9090/products";

class ProductService {

    getAllProducts() {

        return axios.get(PRODUCT_URL);
    }

 searchProducts(name) {

    return axios.get(
        "http://localhost:9090/products/search",
        {
            params: {
                name: name
            }
        }
    );
}
    getProductById(productId) {

        return axios.get(
            '${PRODUCT_URL}/${productId}'
        );
    }
}

export default new ProductService();