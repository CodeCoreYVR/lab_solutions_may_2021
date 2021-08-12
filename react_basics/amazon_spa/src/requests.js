const BASE_URL = "http://localhost:3000/api/v1";

const Product = {
    // fetch all products from server
    all() {
        return fetch(`${BASE_URL}/products`, { credentials: "include" }).then(
            res => res.json()
        );
    },
    // fetch a single product
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    // creating a product
    create(params) {
        // `params` is an object that represents a product
        return fetch(`${BASE_URL}/products`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    // updating a product
    update(id, params) {
        return fetch(`${BASE_URL}/products/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    delete(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};
const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};

const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/users`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};
export { Product, Session, User };
