import React, { Component } from "react";

import NewProductForm from "./NewProductForm";

export default class ProductNewPage extends Component {



    render() {
        return (
            <main>
                <div className="header">Create a Product</div>
                <NewProductForm onCreateProduct={this.createProduct} />
            </main>
        );
    }
}
