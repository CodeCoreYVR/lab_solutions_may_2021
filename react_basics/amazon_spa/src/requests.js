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
    }
};

export { Product };
