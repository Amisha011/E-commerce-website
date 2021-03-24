import React from "react";
import ReactDom from "react-dom";
import "../style/footer.css";

function footer() {
    return (
        <div className="Footerr">
            <div className="footer">
                <div className="row">
                    <h3 className="heading">Policies</h3>
                    <p className="data">Privacy Policy</p>
                    <p className="data">Terms Of Use</p>
                    <p className="data">Secure Shopping</p>
                </div>
                <div className="row">
                    <h3 className="heading">Help</h3>
                    <p className="data">Payment</p>
                    <p className="data">Return</p>
                    <p className="data">FAQ</p>
                </div>
                <div className="row3">
                    <h3 className="heading">Follow Us</h3>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="address">
                <hr />
                <p className="addDetails">Address: Nayak Mohalla,zirniya,Khargone distric,MP | Email: amishaagrawal011@gmail.com | Contact-Number: 9617542042</p>
                <hr />
                <p className="copyright">Copyright 2021. Bookstore.com All Rights Reserved
                    <br />Privacy Policy | Terms & conditions
                </p>
            </div>
        </div>
    )
}
export default footer;