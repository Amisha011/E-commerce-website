import React from "react";
<<<<<<< HEAD
import SignUp from "../components/user_login-signup/signUp"
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "../components/user_login-signup/loginPage";
import Header from "./header/header";
import Navbar from "./user-navbar/navbar";
import HomePage from "./homepage/homePage";
import Footer from "./footer/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bestsellers from "../components/Bestseller/bestsellers";
import NewArrival from "../components/newArrivals/newArrival";
import TextBook from "../components/textBooks/textBook";
import AdminHomePage from "../Admin/Admin-homePage/adminHomePage"
import AdminLogin from "../Admin/Admin login/adminLogin";
import FeaturedAuthor from "../components/Featured Authors/featuredAuthors"
import Profile from "./customer-profile/profile"
import ProductTable from "../Admin/Products/productTable"
import GetAllUsers from "../Admin/getAllUsers/getUsers";
import AddProduct from "../Admin/Products/addProduct";
import EditProduct from "../Admin/Products/editProduct"


function App() {
    const history = useHistory();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('userType');
=======
import SignUp from "../components/signUp"
import { Route, Switch, link } from "react-router-dom";
import Login from "./loginPage";
import Header from "./header";
import Navbar from "./navbar";
import HomePage from "./homePage";
import Footer from "./footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bestsellers from "../components/Bestseller/bestsellers";
import AdminLogin from "../Admin/adminLogin";

function App() {
>>>>>>> df351c45ad8016cc144f5e27ef8a85e2d863ad16
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
<<<<<<< HEAD
                pauseOnFocusLoss={false}
=======
                pauseOnFocusLoss
>>>>>>> df351c45ad8016cc144f5e27ef8a85e2d863ad16
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Register" component={SignUp} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/bestsellers" component={Bestsellers} />
<<<<<<< HEAD
                <Route exact path="/NewArrival" component={NewArrival} />
                <Route exact path="/TextBooks" component={TextBook} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/Featured Authors" component={FeaturedAuthor} />
                <Route exact path="/Admin" component={AdminLogin} />
                {isLoggedIn && userType === "admin" ? 
                < > 
                <Route exact path="/Admin/home" component={AdminHomePage} />
                <Route exact path="/Admin/home/ProductTable" component={ProductTable} />
                <Route exact path="/Admin/home/GetAllUsers" component={GetAllUsers} />)
                <Route exact path="/Admin/home/addProduct" component={AddProduct} />
                </>:history.push("/Admin")
                }
                <Route exact path="/Admin/home/productsList/editProduct" component={EditProduct} />
=======
                <Route exact path="/Admin/Login" component={AdminLogin} />
>>>>>>> df351c45ad8016cc144f5e27ef8a85e2d863ad16
            </Switch>
            <Footer />
        </div>
    )
}
export default App;