const BASE_URL = "http://localhost:3000/api/v1";
const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

Session.create({
    email: "admin@user.com",
    password: "123"
});

const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include"
        }).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

function refreshProducts() {
    Product.all().then(products => {
        const productsContainer = document.querySelector("ul.product-list");
        productsContainer.innerHTML = products
            .map(q => {
                return `
                <li>
                    <a class="product-link" data-id="${q.id}" href="">
                        <span>${q.id} - </span>
                        ${q.title}
                    </a>
                </li>
            `;
            })
            .join("");
    });
}

function getAndDisplayProduct(id) {
    Product.one(id).then(product => {
        const productDetailsContainer = document.querySelector("#product-show");
        const htmlString = `
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <small>Price: ${product.price}</small>
            <a class="link" data-target="product-edit" data-id="${product.id}" href="">Edit</a>
            <h3>Reviews</h3>
            <ul>
                ${product.reviews.map(a => '<li>' + a.body + '</li>').join("")}
            </ul>
        `;
        productDetailsContainer.innerHTML = htmlString;
        navigateTo("product-show",);
    });
}

function navigateTo(sectionId) {
    if (sectionId === "product-index") {
        refreshProducts();
    }
    document.querySelectorAll(".page").forEach(node => {
        node.classList.remove("active");
    });
    document.querySelector(`.page#${sectionId}`).classList.add("active");
    document.querySelectorAll(".navbar a").forEach(link => {
        link.classList.remove("active");
    });
    document.querySelector(`.navbar [data-target=${sectionId}]`).classList.add("active");

}

document.addEventListener("DOMContentLoaded", () => {
    refreshProducts();

    document.querySelector(".navbar").addEventListener("click", event => {
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            navigateTo(targetPage);
        }
    });

    document.querySelector("ul.product-list").addEventListener("click", event => {
        const productLink = event.target.closest("a.product-link");
        if (productLink) {
            event.preventDefault();
            const {
                id
            } = productLink.dataset;
            getAndDisplayProduct(id);
        }
    });

    const newProductForm = document.querySelector("#new-product-form");
    newProductForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const newProduct = {
            title: formData.get("title"),
            price: formData.get("price"),
            description: formData.get("description")
        };
        Product.create(newProduct).then(product => {
            newProductForm.reset();
            getAndDisplayProduct(product.id);
        });
    });
});