import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from "../requests";


export default function ProductIndexPage(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Product.all().then(products => {
            setProducts(products)
        });
    }, [])
    const deleteProduct = (id) => {
        setProducts(products.filter((q) => q.id !== id))
    }
    return (
        <main>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <p>
                            <Link to={`/products/${product.id}`}>{product.title}</Link>
                            <button onClick={() => deleteProduct(product.id)} >
                                Delete
                            </button>
                            <br />
                            <small>Price: {product.price} </small>
                            <br />
                            <small>Created at: {new Date(product.created_at).toLocaleDateString()}</small>
                            <br />
                            <small>Seller: {product.seller.full_name}</small>
                            <br />
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
