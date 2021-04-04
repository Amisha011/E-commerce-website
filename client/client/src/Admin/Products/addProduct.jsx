import React, {  useEffect,useState } from "react";
// import ProductTable from "../Products/productTable"
import axios from "axios";
import "../Products/products.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Product = () => {
    // const [product, setProduct] = useState([]);
    const [productFormData, setProductFormData] = useState({
        bookName: "",
        price: "",
        image: "",
        author: "",
        cutPrice: "",
        bookType: "",

    })
    // const [productId, setProductId] = useState(" ");
    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    const changeProductFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductFormData({ ...productFormData, [name]: value });
    };

    //post api for adding product in table
    
    const addProduct = async () => {
        console.log("heyy")
        try {
            console.log("productFormData", productFormData);
            const response = await axios.post("http://localhost:8001/api/product/addProduct", productFormData)
            console.log("response :", response);
            toast.success("Successfully Added product");
        } catch (error) {
            console.log("error", error);
            toast.error("Failed in adding product");
        }
    } 
    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0]);
        data.append('upload_preset', 'eyowpxag')
       // setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/ddcy8imkx/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json();
        console.log(file);
        return file.secure_url;
       // setImagestate(file.secure_url)

        //setLoading(false)
    }
    
    //get api for fetching the product


    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios.get("http://Localhost:8001/api/product/getAllProducts", productFormData);
    //         setProduct(response.data);
    //     } catch (error) {
    //         console.log("error", error);
    //     }

    // }
    //put api for updating a product
    
    // const updateProductData = (item) => {
    //     console.log("hello")
    //     setProductFormData ({
    //         ...productFormData,
    //         ["bookName"]: item.bookName,
    //         ["price"]: item.price,
    //         ["image"]:item.image,
    //         ["author"]:item.author,
    //         ['cutPrice']: item.cutPrice,
    //         ["bookType"]: item.bookType,
            
    //     });
    //     setProductId(item._id);
    //     console.log(item._id)
    // };
    
    // const updateProduct = async() =>{
    //     console.log(productFormData);
    //     console.log(productId);
    //     try {
    //         const response = await axios.put(`http://localhost:8001/api/product/updateProduct/${productId}`, productFormData);
    //         toast.success("Successfully Updated product !!");
    //     } catch (error) {
    //         console.log("error", error.response);
    //     }
    // }

    // //delete product 

    // const deleteProduct=async(_id)=>{
    //     try {
    //       const response=await axios.delete(`http://localhost:8001/api/product/deleteProduct/${_id}`)  
    //       console.log("response ",response);
    //       toast.success("Successfully deleted product !!");
    //     } catch (error) {
    //         console.log("error",error.response);
    //     }
    // }
    return (
        <div style={{backgroundColor:"cadetblue",padding:"10px"}}>
            <div className="productDetails">
                <h1>ADD PRODUCT DETAILS </h1>

                <input
                    type="text"
                    name="bookName"
                    placeholder="bookName"
                    value={productFormData.bookName}
                    onChange={changeProductFormData}></input>


                <input
                    type="file"
                    name="image"
                    placeholder="image url"
                    onChange={async(e)=>{
                        const url=await uploadImage(e)
                        setProductFormData({ ...productFormData, ["image"]: url });
                        console.log("url",url);
                        
                    }}></input>

                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={productFormData.author}
                    onChange={changeProductFormData}></input>

                <input
                    type="number"
                    name="cutPrice"
                    placeholder="cut price"
                    value={productFormData.cutPrice}
                    onChange={changeProductFormData}></input>

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productFormData.price}
                    onChange={changeProductFormData}></input>

                <input
                    type="text"
                    name="bookType"
                    placeholder="bookType"
                    value={productFormData.bookType}
                    onChange={changeProductFormData}></input>

                <button onClick={addProduct} >ADD PRODUCT </button>
                {/* <button onClick={updateProduct}>Update Product</button> */}

            </div>
            {/* < ProductTable data={product} updateProductData={updateProductData} deleteProduct={deleteProduct} /> */}
        </div>
    )
}
export default Product;