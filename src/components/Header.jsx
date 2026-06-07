import { Link } from "react-router-dom";

export default function Header() {

    return (

       <nav className="navbar app-header">

            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Ksana Grocery
                </Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Products
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/cart"
                            >
                                Cart
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/orders"
                            >
                                Orders
                            </Link>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}