import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<ProductPage />}
                />

                <Route
                    path="/cart"
                    element={<CartPage />}
                />

                <Route
                    path="/orders"
                    element={<OrderPage />}
                />

                <Route
                    path="/order-success"
                    element={<OrderSuccessPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;