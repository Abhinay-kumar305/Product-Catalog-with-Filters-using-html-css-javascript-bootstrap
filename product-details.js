
const products = [
    {id:1, title:"Laptop", category:"electronics", price:800, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_-fKefeJAv6Dteapoeu_qliA5-nr_b4T9A&s", desc:"High-performance laptop for work and gaming."},
    {id:2, title:"T-Shirt", category:"clothing", price:20, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDGNEN-GHOrEDVlwildiLC1_forOoowaY3Q&s", desc:"Comfortable cotton T-shirt."},
    {id:3, title:"Book", category:"books", price:15, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbZJli5HpDTCTotS9SwmcwE5jd_tecNS98g&s", desc:"Interesting and educational book."},
    {id:4, title:"Headphones", category:"electronics", price:50, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpitxpyDkXZn54mHvrG-VT8rh_4uxjuGUxg&s", desc:"Noise-cancelling over-ear headphones."},
    {id:5, title:"Jeans", category:"clothing", price:40, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWNOgaRmufklUBQOjg44XxSYNSbrfnhDJzA&s", desc:"Stylish regular-fit jeans."},
    {id:6, title:"Necklace", category:"jewellery", price:120, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclBMYTwQg10v9DQd9BaP6vw156F-Jjug9bw&s", desc:"Beautiful handcrafted necklace."},
    {id:7, title:"Blender", category:"home-kitchen", price:60, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBW8OhEKD_ejj1yTsFVHwt3pRE2TOHsJ2Pg&s", desc:"Powerful kitchen blender."}
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const product = products.find(p => p.id === id);

const container = document.getElementById("detailsContainer");

if (!product) {
    container.innerHTML = "<h3>Product not found.</h3>";
} else {
    container.innerHTML = `
        <div class="col-md-6">
            <img src="${product.img}" class="img-fluid rounded shadow">
        </div>

        <div class="col-md-6">
            <h2>${product.title}</h2>
            <p class="text-muted">${product.category.toUpperCase()}</p>
            <h4 class="text-success">$${product.price}</h4>
            <p>${product.desc}</p>

            <!-- Add to Cart -->
            <button class="btn btn-primary btn-lg mt-3" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
}

