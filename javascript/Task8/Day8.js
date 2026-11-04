
let api = document.querySelector(".api");

// Change this number to practice a different task (1-20)
let taskNumber = 1;

api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }
        return response.json();
    })
    .then(data => {
        console.log("API data loaded successfully");

        if (taskNumber === 1) {
            // 1. Display only the title inside h1
            data.forEach(p => {
                api.innerHTML += `<h1>${p.title}</h1>`;
            });
        }

        else if (taskNumber === 2) {
            // 2. Product ID and title inside h2
            data.forEach(p => {
                api.innerHTML += `<h2>${p.id} - ${p.title}</h2>`;
            });
        }

        else if (taskNumber === 3) {
            // 3. First 30 characters of title
            data.forEach(p => {
                api.innerHTML += `<p>${p.title.slice(0, 30)}</p>`;
            });
        }

        else if (taskNumber === 4) {
            // 4. First 100 characters of description
            data.forEach(p => {
                api.innerHTML += `<p>${p.description.slice(0, 100)}</p>`;
            });
        }

        else if (taskNumber === 5) {
            // 5. Display image inside a div
            data.forEach(p => {
                api.innerHTML += `
                    <div>
                        <img src="${p.image}" width="200" alt="${p.title}">
                    </div>`;
            });
        }

        else if (taskNumber === 6) {
            // 6. Title, description and image in one div
            data.forEach(p => {
                api.innerHTML += `
                    <div>
                        <h2>${p.title}</h2>
                        <p>${p.description}</p>
                        <img src="${p.image}" width="200" alt="${p.title}">
                    </div>`;
            });
        }

        else if (taskNumber === 7) {
            // 7. Price inside p
            data.forEach(p => {
                api.innerHTML += `<p>Price: $${p.price}</p>`;
            });
        }

        else if (taskNumber === 8) {
            // 8. Category inside h3
            data.forEach(p => {
                api.innerHTML += `<h3>${p.category}</h3>`;
            });
        }

        else if (taskNumber === 9) {
            // 9. Title in uppercase
            data.forEach(p => {
                api.innerHTML += `<h2>${p.title.toUpperCase()}</h2>`;
            });
        }

        else if (taskNumber === 10) {
            // 10. Title and character count
            data.forEach(p => {
                api.innerHTML += `
                    <p>${p.title}</p>
                    <p>Character count: ${p.title.length}</p>`;
            });
        }

        else if (taskNumber === 11) {
            // 11. First 5 products only
            data.slice(0, 5).forEach(p => {
                api.innerHTML += `<h2>${p.title}</h2>`;
            });
        }

        else if (taskNumber === 12) {
            // 12. IDs, titles and prices
            data.forEach(p => {
                api.innerHTML += `
                    <div>
                        <p>ID: ${p.id}</p>
                        <h2>${p.title}</h2>
                        <p>Price: $${p.price}</p>
                    </div>`;
            });
        }

        else if (taskNumber === 13) {
            // 13. Image width 200px
            data.forEach(p => {
                api.innerHTML += `
                    <img src="${p.image}"
                         style="width: 200px"
                         alt="${p.title}">`;
            });
        }

        else if (taskNumber === 14) {
            // 14. Separate div with class card
            data.forEach(p => {
                let card = document.createElement("div");
                card.className = "card";
                card.textContent = p.title;
                api.append(card);
            });
        }

        else if (taskNumber === 15) {
            // 15. Title and first 50 description characters
            data.forEach(p => {
                api.innerHTML += `
                    <h2>${p.title}</h2>
                    <p>${p.description.slice(0, 50)}...</p>`;
            });
        }

        else if (taskNumber === 16) {
            // 16. Titles in console and webpage
            data.forEach(p => {
                console.log(p.title);
                api.innerHTML += `<h2>${p.title}</h2>`;
            });
        }

        else if (taskNumber === 17) {
            // 17. Title and category in same div
            data.forEach(p => {
                api.innerHTML += `
                    <div>
                        <h2>${p.title}</h2>
                        <p>${p.category}</p>
                    </div>`;
            });
        }

        else if (taskNumber === 18) {
            // 18. Success message
            api.textContent = "API data loaded successfully!";
        }

        else if (taskNumber === 19) {
            // 19. Loading message before fetching
            // The loading message was displayed above fetch().
            api.textContent = "Products loaded successfully!";
        }

        else if (taskNumber === 20) {
            // 20. Completion message is handled in finally()
            api.textContent = "Products processed successfully!";
        }
    })
    .catch(error => {
        // Handle API or JSON parsing errors
        api.textContent = "Error: " + error.message;
        api.style.color = "red";
        console.error(error);
    })
    .finally(() => {
        // 20. Runs whether the request succeeds or fails
        console.log("API request completed");

        if (taskNumber === 20) {
            api.textContent = "API request completed";
        }
    });
