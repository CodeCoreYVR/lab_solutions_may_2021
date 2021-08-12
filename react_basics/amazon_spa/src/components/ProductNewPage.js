import React, { Component } from "react";

import NewProductForm from "./NewProductForm";
import { Product } from "../requests";

export default class ProductNewPage extends Component {

    createProduct = params => {
        Product.create(params).then(product => {
            this.props.history.push(`/products/${product.id}`);
        });
    };

    render() {
        return (
            <main>
                <div className="header">Create a Product</div>
                <NewProductForm onCreateProduct={this.createProduct} />
            </main>
        );
    }
}
