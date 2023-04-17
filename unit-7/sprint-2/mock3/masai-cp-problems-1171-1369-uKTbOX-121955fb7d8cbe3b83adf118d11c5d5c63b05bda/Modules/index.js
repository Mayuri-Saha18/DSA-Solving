

// Code that you want to import goes here
let data;

async function catchData() {
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products");
    data = await res.json();

    console.log(data.data);
    appendProduct(data.data);
}

catchData();


function appendProduct(data) {
    let container = document.querySelector("#product-container>div");
    container.innerHTML = "";

    data.forEach(el => {

        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let title = document.createElement("h2");
        title.innerText = el.title;

        let brand = document.createElement("p");
        brand.innerText = el.brand;

        let category = document.createElement("p");
        category.innerText = el.category;

        let price = document.createElement("p");
        price.innerText = el.price;

        let cart = document.createElement("button")
        cart.innerText = "Add To Cart";
        cart.onclick = () => addToCart(el);

        box.append(img, title, brand, category, price, cart);
        container.append(box);
    });

}



let alertHead=document.getElementById("alert");

function addToCart(el) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartData.includes(el.id)) {
        alertHead.innerText="Product already in the cart"
        alert("Product already in the cart");
        return;
    }
    else {
        cartData.push(el.id);
        localStorage.setItem("cart", JSON.stringify(cartData));
        alertHead.innerHTML="Product added to The cart";
        alert("Product added to The cart");
    }
}


function filter(event){
    const {value}=document.getElementById("roadster").checked;

    console.log(value);
}







