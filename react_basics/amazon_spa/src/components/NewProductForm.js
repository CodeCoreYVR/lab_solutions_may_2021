import React, { Component } from 'react';
import FormErrors from './FormErrors';
import { Product } from "../requests";


export default class NewProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }
    createProduct = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        Product.create({
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price')
        }).then(product => {
            console.log(product)
            if (product.errors) {
                this.setState({ errors: product.errors });
            }
            else
                this.props.history.push(`/products/${product.id}`);
        });
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.createProduct}>
                <div className="field">
                    <label htmlFor="title">Title</label>

                    <FormErrors errors={this.state.errors} formField="title" />
                    <input type="text" name="title" id="title" placeholder="Please Enter Title" />
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>

                    <FormErrors errors={this.state.errors} formField="price" />
                    <input type="number" name="price" id="price" placeholder="Please Enter Price" />
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>

                    <FormErrors errors={this.state.errors} formField="description" />
                    <input type="text" name="description" id="description" placeholder="Please Enter Description" />
                </div>
                <button className="ui button" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

