import axios from "axios";
import {Link, useHistory} from "react-router-dom"
import React, { useEffect, useState } from "react";
import "../Products/products.css";

const ProductTable = () => {
   
    const [state, setState] = useState([])
    const history = useHistory() ;
    const products = async() => {
        console.log("jii")
        const response = await axios.get("http://Localhost:8001/api/product/getAllProducts");
        console.log("response", response);
        const products = response.data
        setState(products);
    }

    useEffect(() => {
        products()
    }, [])

    return (
        <div className="products">
            <h1>PRODUCTS TABLE</h1>
            <div className="productTable">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Image url</th>
                        <th>Cut price</th>
                        <th>Price</th>
                        <th>Book Type</th>
                        <th>Created at</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data, index) => {
                        return (
                            <tr className="productTable">
                                <td>{index + 1}</td>
                                <td>{data.bookName}</td>
                                <td>{data.author}</td>
                                <td>{data.image}</td>
                                <td>{data.price}</td>
                                <td>{data.cutPrice}</td>
                                <td>{data.bookType}</td>
                                <td>{data.createdAt}</td>
                                {/* <td><Link to="/Admin/home/productsList/editProduct"><i class="far fa-edit" ></i></Link></td> */}
                                <td><i  onClick={() => {
                                    history.push({
                                        pathname:"/Admin/home/productsList/editProduct",
                                        state:data 
                                    }) ;
                                    // history.push("/Admin/home/productsList/editProduct") ;
                                }} class="far fa-edit" ></i></td>
                                <td ><i class="fas fa-trash-alt"></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </div>
        </div>
    )
}
export default ProductTable