//will keep our data in it as list
const products = [
    {id:1, title:"Laptop", price:800, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_-fKefeJAv6Dteapoeu_qliA5-nr_b4T9A&s"},
    {id:2, title:"T-Shirt", price:20, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDGNEN-GHOrEDVlwildiLC1_forOoowaY3Q&s"},
    {id:3, title:"Book", price:15, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbZJli5HpDTCTotS9SwmcwE5jd_tecNS98g&s"},
    {id:4, title:"Headphones", price:50, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpitxpyDkXZn54mHvrG-VT8rh_4uxjuGUxg&s"},
    {id:5, title:"Jeans", price:40, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWNOgaRmufklUBQOjg44XxSYNSbrfnhDJzA&s"},
    {id:6, title:"Necklace", price:120, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclBMYTwQg10v9DQd9BaP6vw156F-Jjug9bw&s"},
    {id:7, title:"Blender", price:60, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBW8OhEKD_ejj1yTsFVHwt3pRE2TOHsJ2Pg&s"}
];
//Gets cart items saved earlier,converts JSON → array, else give empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];
//updateCartCount how many items we add
function updateCartCount() {
    document.querySelectorAll(".cart-count").forEach(el => {
        el.textContent = cart.length;
    });
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");
//if empty return empty
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalAmount.innerText = 0;
        return;
    }
//clears previous list , total price = 0
    cartItems.innerHTML = "";

    let total = 0;
//adds product price to total
    cart.forEach((id, index) => {
        const p = products.find(x => x.id === id);
        total += p.price;
//keep the product in code
        cartItems.innerHTML += `
            <div class="d-flex align-items-center mb-3 p-3 bg-white rounded shadow-sm">
                <img src="${p.img}" width="80" height="80" class="rounded me-3">
                <div>
                    <h5>${p.title}</h5>
                    <p>$${p.price}</p>
                </div>
                <button class="btn btn-danger ms-auto" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });
//total price
    totalAmount.innerText = total;
}
//remove one item  from index ussing idex value
function removeItem(i) {
    cart.splice(i, 1);
//store in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
//renderCart
    renderCart();
    updateCartCount();
}
renderCart();
updateCartCount();
