import axios from "axios";
import React, { useState, useEffect } from "react";
import prodImg1 from "../../images/bs1.jpg"
import "../Bestseller/bestseller.css";
const Bestseller = () => {
    const [bestSellers, setBestSellers] = useState([]);

    const getBestSeller = async () => {
        const response = await axios.get("http://Localhost:8001/api/product/getAllProducts");
        console.log("response", response);
        const arrayOfData = []
        for (let book of response.data) {
            if (book.bookType === "bestSellers") {
               arrayOfData.push(book)
            }
        }
        setBestSellers(arrayOfData);

    }
    useEffect(() => {
        getBestSeller()
    }, [])

    return (
        <div className="bestsellers">
            <h1> Bestsellers</h1>

            <div className="product">

                <img src={prodImg1} alt="book-store"></img>
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

                <img src={prodImg1} alt="book-store"></img>
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

                <img src={prodImg1} alt="bookstore"></img>
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
export default Bestseller;