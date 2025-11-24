const products = [
    {id:1, title:"Laptop", category:"electronics", price:800, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_-fKefeJAv6Dteapoeu_qliA5-nr_b4T9A&s"},
    {id:2, title:"T-Shirt", category:"clothing", price:20, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDGNEN-GHOrEDVlwildiLC1_forOoowaY3Q&s"},
    {id:3, title:"Book", category:"books", price:15, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbZJli5HpDTCTotS9SwmcwE5jd_tecNS98g&s"},
    {id:4, title:"Headphones", category:"electronics", price:50, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpitxpyDkXZn54mHvrG-VT8rh_4uxjuGUxg&s"},
    {id:5, title:"Jeans", category:"clothing", price:40, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWNOgaRmufklUBQOjg44XxSYNSbrfnhDJzA&s"},
    {id:6, title:"Necklace", category:"jewellery", price:120, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclBMYTwQg10v9DQd9BaP6vw156F-Jjug9bw&s"},
    {id:7, title:"Blender", category:"home-kitchen", price:60, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBW8OhEKD_ejj1yTsFVHwt3pRE2TOHsJ2Pg&s"}
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    document.querySelectorAll(".cart-count").forEach(el => {
        el.textContent = cart.length;
    });
}

function addToCart(id) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to Cart!");
}
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishlistCount() {
    document.querySelectorAll(".wishlist-count").forEach(el => {
        el.textContent = wishlist.length;
    });
}

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    displayProducts(products);
}

function displayProducts(list) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = "<p class='text-center fw-bold mt-4'>No products found</p>";
        return;
    }

    list.forEach(product => {
        const isWishlisted = wishlist.includes(product.id);

        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");

        card.innerHTML = `
            <div class="card shadow h-100">
                <img src="${product.img}" class="card-img-top" alt="${product.title}">

                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>

                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                        ${isWishlisted ? "❤️" : "🤍"}
                    </button>

                    <a href="product-details.html?id=${product.id}" 
                       class="btn btn-secondary w-100 mt-2">View Details</a>

                    <button class="btn btn-primary w-100 mt-2"
                        onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;

        productGrid.appendChild(card);
    });
}

function filterProducts() {
    const query = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    const maxPrice = Number(priceRange.value);

    priceValue.textContent = maxPrice;

    const filtered = products.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(query);
        const matchCategory = category === "all" || p.category === category;
        const matchPrice = p.price <= maxPrice;
        return matchSearch && matchCategory && matchPrice;
    });

    displayProducts(filtered);
}
displayProducts(products);
updateCartCount();
updateWishlistCount();
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
priceRange.addEventListener("input", filterProducts);
