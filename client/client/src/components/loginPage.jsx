import axios from "axios";
import React, { useState } from "react";
import ReactDom from "react-dom";
import { Route, Link } from "react-router-dom"
import { toast } from 'react-toastify';
import "../style/login.css";

const Login = () => {
    const [loader, setLoader] = useState(false)
    const [formdataa, setFromdata] = useState({
        email: "",
        password: "",
    });
    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFromdata({ ...formdataa, [name]: value })
    }
    const signIn = async () => {
        setLoader(true)
        try {
            console.log("data", formdataa);
            const response = await axios.post("http://localhost:8001/api/user/login", formdataa);
            console.log("Response",response)
            console.log("check",response.data);
            toast.success("Successfully logged in !!");

            setLoader(false)
        } catch (error) {
            console.log(error, "error");
            toast.error("error occured in logging in");
         
            setLoader(false);
        }
    }

    return (
        <div className="loginMain" >
            <div className="card1">
                <div className="loginHeader1">
                    <Link className="loginBtn" to="/Login">Login</Link>
                    <Link className="register1" to="/Register">Register</Link>
                </div>
                <div className="inputs1">
                    <input
                        type="email"
                        name="email"
                        value={formdataa.value}
                        onChange={changeFormData}
                        placeholder="email"></input>
                    <input
                        type="password"
                        name="password"
                        value={formdataa.value}
                        onChange={changeFormData}
                        placeholder="Password"></input>
                    <div>
                        <button onClick={signIn}>Login</button>
                        {loader ? (
                            <div className="loaderHead1">
                                <div className="loader1"></div>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;