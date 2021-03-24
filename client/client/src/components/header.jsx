import React from "react";
import ReactDom from "react-dom";
import Img from "../images/bookStore.jpg"
import { Route, Link } from "react-router-dom"
import "../style/header.css"
function header() {
    return (
        <div className="header">
            <div className="header2">
                <img src={Img} className="logoImg"></img>
                <div className="searchBar">
                    <input type="search" className="headerSearchbar" placeholder="Search"></input>
                    <i class="fas fa-search" ></i>
                </div>
                <div className="profile">
                    <button>Profile</button>
                    <i class="fas fa-user-circle"></i>
                </div>
                <div className="logins">
                    <Link className="headerLogin" to="/Login">Login/Signup</Link>
                    {/* <Link className="headerSignUp" to="/">Register</Link> */}
                </div>
                <div className="headerCart">
                    <button className="cartBtn">0</button>
                    <i class="fas fa-cart-plus"></i>

                </div>
            </div>
        </div>
    )

}
export default header;