import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from "../requests";
import Spinner from './Spinner'

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.createProduct = this.createProduct.bind(this);
    }
    componentDidMount() {
        Product.all().then(products => {
            this.setState({
                products: products
            });
        });
    }
    createProduct(params) {
        this.setState((state) => {
            return {
                products: [
                    {
                        ...params,
                        created_at: new Date(),
                        id: Math.max(...state.products.map((product) => product.id)) + 1,
                        seller: { full_name: "Mao" }
                    },
                    ...state.products
                ]
            };
        });
    }
    deleteProduct(id) {
        this.setState((state, props) => {
            return {
                products: state.products.filter((q) => q.id !== id)
            };
        });
    }
    render() {
        if (!this.state.products) {
            return <Spinner />;
        }
        return (
            <main>
                <h1>Products</h1>
                <ul>
                    {this.state.products.map((product, index) => (
                        <li key={index}>
                            <p>
                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                                <button onClick={() => this.deleteProduct(product.id)} >
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
}

export default ProductIndexPage;