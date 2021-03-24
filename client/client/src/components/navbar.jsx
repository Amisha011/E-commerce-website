import React from "react";
import ReactDom from "react-dom"
import { Route, Link } from "react-router-dom"
import "../style/navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <Link to="/"> <i class="fas fa-home"></i></Link>
            <Link to="">Books <i class="fas fa-caret-down"></i></Link>
            <Link to="">New Arrivals</Link>
            <Link to="/bestsellers">Bestsellers</Link>
            <Link to="">TextBooks</Link>
            <Link to="" className="author">Featured Authors</Link>

        </div>
    )
}
export default navbar;