import React from "react";
import ReactDom from "react-dom";
import prodImg1 from "../../images/bs1.jpg"
import "../Bestseller/bestseller.css";
const bestseller = () => {
    return (
        <div className="bestsellers">
            <h1> Bestsellers</h1>

            <div className="product">

                <img src={prodImg1}></img>
                <div className="productSummary">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                        Rs.39 shipping in India per item and low cost <br />
                        Worldwide </p>
                    <button className="buynow" >Buy Now</button>
                    <button className="wishlist">Add to wishlist</button>

                </div>
            </div>

            <div className="product">

                <img src={prodImg1}></img>
                <div className="productSummary">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                        Rs.39 shipping in India per item and low cost <br />
                        Worldwide </p>
                    <button className="buynow" >Buy Now</button>
                    <button className="wishlist">Add to wishlist</button>

                </div>
            </div>
            <div className="product">

                <img src={prodImg1}></img>
                <div className="productSummary">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                       Rs.39 shipping in India per item and low cost <br />
                       Worldwide </p>
                    <button className="buynow" >Buy Now</button>
                    <button className="wishlist">Add to wishlist</button>

                </div>
            </div>
        </div>


    )
}
export default bestseller;