import React from "react";
import data from "./data";
function Products() {
    return (
        <div className="content">
            <ul className="products">
               {data.products.map((product) => (
                <li>
                    <div className="product">
                        <img
                        className="product-image"
                        src= {product.imageUrl}
                        alt="product"
                        />
                    </div>
                </li>
               ))}
            </ul>
        </div>
    );
}
export default Products;