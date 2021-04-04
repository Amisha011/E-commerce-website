import React, { useState, useEffect } from "react"
import axios from "axios"
//import { render } from "react-dom"
//import axios from "axios";
import { Link } from "react-router-dom"
import "../customer-profile/profile.css"

const Profile = () => {

    const [data, setData] = useState({})
    const[userData,setUserdata]=useState({
        name:data.name,
        email:data.email,
        phoneNumber:data.number,
        
    })
    const [loading, setLoading] = useState(false);
    const [imgstate, setImagestate] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
    const token = localStorage.getItem("token");

    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0]);
        data.append('upload_preset', 'eyowpxag')
        setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/ddcy8imkx/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json();
        console.log(file);
        setImagestate(file.secure_url)

        setLoading(false)
    }
    const getAUser = async () => {
        console.log("hello")
        console.log("token", token)
        try {
            const response = await axios.get(`http://localhost:8001/api/user/getAUser/${token}`, { headers: { "Authorization": `Bearer ${token}` } })
            console.log("response", response);
            const userData = response.data;
            console.log("data ==", userData)
            setData(userData);
            console.log("mm", data)
        } catch (error) {
            console.log("error", error)
        }
    }
    const changeUserData=()=>{
      
    }
    
    useEffect(() => {
        getAUser()
    }, [])
    return (

        <div className="container">
            <div className="box1">
                <div className="top">
                    <img src={imgstate} alt="bookstore"></img>
                    <button >Name </button>
                </div>
                <div className="list">
                    <Link to="">My Orders</Link>
                    <Link to="">My WishList</Link>
                    <button >Logout</button>
                </div>
            </div>
            <div className="box2">
                <h2>
                    Customer Profile
                </h2>
                <div className="box3" >

                    <div className="div1">
                        <input
                            type="text"
                            placeholder="Name"
                            value={data?.name}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={data?.email}
                        />
                        <input
                            type="number"
                            placeholder="Contact Number"
                            value={data?.number}
                        />
                    </div>


                    <div className="div2">
                        <h3>Profile Upload</h3>
                        {
                            loading ?
                                (<h3>loading</h3>) :
                                <img src={imgstate} alt="bookstore"></img>
                        }
                        <div>
                            <input
                                type="file"
                                name="image-upload"
                                accept="image/*"
                                id="input"
                                onChange={uploadImage}
                                placeholder="Upload"
                            ></input>

                            <div className="label">
                                <label className="image-upload" htmlFor="input">
                                    Choose your Photo
					            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="Edit">Edit Profile</button>
                <button className="Edit">update Profile</button>
            </div>
        </div>
    )
}
export default Profile;