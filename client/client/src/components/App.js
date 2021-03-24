import React from "react";
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
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
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
                <Route exact path="/Admin/Login" component={AdminLogin} />
            </Switch>
            <Footer />
        </div>
    )
}
export default App;