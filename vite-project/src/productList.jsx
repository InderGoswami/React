import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
function ProductList() {
    let [prodList,setProductList]=useState([]);
    setTimeout(() => {
        setProductList([
            { name: "Product1", price: 20 },
            { name: "Product2", price: 50 },
            { name: "Product3", price: 60 }
        ]);
    }, 5000);
    return (
        <div>
            <table style={{ border: '2px solid red' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prodList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ProductList;
