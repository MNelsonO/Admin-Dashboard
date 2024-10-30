import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import NewUser from "./pages/new User/NewUser";
import Product from "./pages/products/Product";
import NewProduct from "./pages/new Product/NewProduct";

function App() {
    return (
        <BrowserRouter>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userid" element={<User />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/newUser" element={<NewUser/>} />
                    <Route path="/product/:productid" element={<Product/>} />
                    <Route path="/newproduct" element={<NewProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
