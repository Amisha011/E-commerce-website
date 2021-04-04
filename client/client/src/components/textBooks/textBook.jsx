import React from "react";
import textBookImg1 from "../../images/textBook1.jpg"
import textBookImg2 from "../../images/textBook2.jpg"
import textBookImg3 from "../../images/textBook3.jpg"
import "../textBooks/textBook.css"
const textBook = () => {
    return (
        <div className="textBook">
            <h1>New Arrivals</h1>

            <div className="product2">

                <img src={textBookImg1} alt="bookstore"></img>
                <div className="productSummary2">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice2">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details2">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                        Rs.39 shipping in India per item and low cost <br />
                        Worldwide </p>
                    <button className="buynow2" >Buy Now</button>
                    <button className="wishlist2">Add to wishlist</button>

                </div>
            </div>

            <div className="product2">

                <img src={textBookImg2} alt="bookstore"></img>
                <div className="productSummary2">
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
                    <button className="buynow2" >Buy Now</button>
                    <button className="wishlist2">Add to wishlist</button>

                </div>
            </div>
            <div className="product2">

                <img src={textBookImg3} alt="bookstore"></img>
                <div className="productSummary2">
                    <h2>Think And Grow</h2>
                    <p>Publisher: Amaing Reads</p>
                    <p className="cutprice2">Rs.170</p>
                    <h3>Rs.105</h3>
                </div>
                <div className="details2">
                    <b>Available</b>
                    <p>Ships within 8-10 Days <br />
                       Rs.39 shipping in India per item and low cost <br />
                       Worldwide </p>
                    <button className="buynow2" >Buy Now</button>
                    <button className="wishlist2">Add to wishlist</button>

                </div>
            </div>
        </div>


    )
}
export default textBook;
