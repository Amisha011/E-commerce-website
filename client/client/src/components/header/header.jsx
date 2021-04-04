import React from "react";
import Img from "../../images/bookStore.jpg"
import { Link,useHistory } from "react-router-dom"
import "../header/header.css"
function Header(props) {
    console.log("props",props);
    const history=useHistory();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userType = localStorage.getItem("userType")
    console.log(isLoggedIn);

    const clearLocalStorage = () => {
        localStorage.clear();
        if(userType==="user"){
            history.push("/")
        }else{
            history.push("/Admin/Login")
        }
    }

    // const login =()=>{
    //     if(!props.location?.pathname?.includes("Admin")){
           
    //         return history.push("/Login");
    //     }
    //     history.push("/Admin/Login");
        // else{
        //     history.push("/Admin/Login")
        // }
    //}
    return (

        <div className="header2">
            <div className="headerImg">
                <img src={Img} className="logoImg" alt="bookstore"></img>
            </div>
            <div className="searchBar">
                <input type="search" className="headerSearchbar" placeholder="Search"></input>
                <i class="fas fa-search" ></i>
            </div>
            {isLoggedIn && userType === "user" ? (
                <div className="profile">
                    <button><Link to="/profile">Profile  <i class="fas fa-user-circle"></i></Link></button>

                </div>
            ) : null
            }
            { isLoggedIn && userType === "admin" ? (
                <div className="profile">
                    <button><Link to="/Admin/home">Admin  <i class="fas fa-user-circle"></i></Link></button>

                </div>
            ) : null
            }
            {!isLoggedIn ? (
                <div className="header-login">
                    <button ><Link to="/Login">Login <i class="fas fa-sign-in-alt"></i></Link></button>
                </div>
            ) :
                <div className="header-login">
                    <button onClick={clearLocalStorage}><Link to="/Login">Logout  <i class="fas fa-sign-in-alt"></i></Link></button>
                </div>

            }
            {isLoggedIn && userType === "user" ? (
                <div className="headerCart">
                    <button className="cartBtn">0  <i class="fas fa-cart-plus"></i></button>
                </div>
            ) : null
            }
        </div>
    )

}
export default Header;