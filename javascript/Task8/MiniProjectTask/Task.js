
let api = document.querySelector(".api");

api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(data => {

        api.innerHTML = "";

        data.forEach(p => {

            let div = document.createElement("div");

            div.className = "card";

            div.innerHTML = `
                <p>Product ID: ${p.id}</p>

                <h2>${p.title.slice(0, 50)}</h2>

                <img src="${p.image}" alt="Product Image">

                <p class="price">Price: $${p.price}</p>

                <p>${p.description.slice(0, 100)}</p>
            `;

            api.append(div);

        });

    })
    .catch(error => {

        api.innerHTML = `
            <p class="error">Error: ${error.message}</p>
        `;

    })
    .finally(() => {

        console.log("API request completed");

    });
