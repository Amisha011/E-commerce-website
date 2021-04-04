import React from "react";
import newarriavlImg from "../../images/newarrival1.jpg"
import "../newArrivals/newarrival.css"
const newarrival = () => {
    return (
        <div className="newarrival">
            <h1>New Arrivals</h1>

            <div className="product1">

                <img src={newarriavlImg} alt="bookstore"></img>
                <div className="productSummary1">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice1">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details1">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                        Rs.39 shipping in India per item and low cost <br />
                        Worldwide </p>
                    <button className="buynow1" >Buy Now</button>
                    <button className="wishlist1">Add to wishlist</button>

                </div>
            </div>

            <div className="product">

                <img src={newarriavlImg} alt="bookstore"></img>
                <div className="productSummary1">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice1">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details1">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                        Rs.39 shipping in India per item and low cost <br />
                        Worldwide </p>
                    <button className="buynow1" >Buy Now</button>
                    <button className="wishlist1">Add to wishlist</button>

                </div>
            </div>
            <div className="product1">

                <img src={newarriavlImg} alt="bookstore"></img>
                <div className="productSummary1">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice1">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details1">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                       Rs.39 shipping in India per item and low cost <br />
                       Worldwide </p>
                    <button className="buynow1" >Buy Now</button>
                    <button className="wishlist1">Add to wishlist</button>

                </div>
            </div>
        </div>


    )
}
export default newarrival;
