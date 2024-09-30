let linkss = document.querySelector("#Links")
let user = document.querySelector("#user-info a")
let logoutbtn = document.querySelector("#logoutbtn");
user.innerHTML += localStorage.getItem("username")
if( localStorage.getItem("accepted_user")){
    linkss.style.display = "none"
    user.style.display = "flex"
    logoutbtn.style.display = "flex"
}
else{
    setTimeout(()=> {
        alert("login first")
        window.location = "Login.html"
    }, 500) 
    linkss.style.display = "flex"
    user.style.display = "none"
    logoutbtn.style.display = "none"
}

let productsdiv = document.querySelector(".products")
const Products = [{
    id : 1 ,
    title : "HP Victus",
    descr : "Gaming laptop with Ryzen 5 CPU, NVIDIA GTX 1650/RTX 3050, 15.6 FHD 144Hz display, 8GB RAM, and 512G " ,
    imgurl : "images/HPVictus.jpeg",
    price : "45000",
    no_items : 0
} ,
{
    id : 2 ,
    title : "Dell G15 ",
    descr : "G15 5530 Gaming Laptop - 13th Intel Core i7-13650HX 14 Cores, NVIDIA GeForce RTX 4050 6GB GDDR6 Graphics",
    imgurl : "images/DellG15.jpeg",
    price : "65000",
    no_items : 0
},
{
    id : 3 ,
    title : "MacBook Air 13",
    imgurl : "images/MacBook.jpeg",
    descr :  " Apple 2024 MacBook Air 13-inch Laptop with M3 chip: 13.6-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage" ,
    price : "63000",
    no_items : 0
},
{
    id : 4 ,
    title : "Lenovo IdeaPad 5",
    descr : "Lenovo IdeaPad 5 14ALC05 82LM00P7ED Laptop, AMD Ryzen 7 5700U, 512GB SSD PCIe M.2, 8GB RAM, 14 Inches, FHD, IPS, AMD Radeon Graphics, Windows 11" ,
    imgurl : "images/LenovoIdeapad5.jpeg",
    price : "30000",
    no_items : 0
},
{
    id : 5 ,
    title : "Sumsung s24 ultra",
    descr : "Samsung Galaxy S24 Ultra, AI Phone, 256GB Storage, Titanium Black, 12GB RAM, Android Smartphone, 200MP Camera" ,
    imgurl : "images/samsung.jpeg",
    price : "48000" ,
    no_items : 0
},
{
    id : 6 ,
    title : "IPhone 14",
    descr : "Apple iPhone 14 128GB  Blue  offers a 6.1 Super Retina XDR display, A15 Bionic chip, dual 12MP cameras with advanced low-light performance." , 
    imgurl : "images/iphone14.jpeg",
    price : "40000" ,
    no_items : 0
},
{
    id : 7 ,
    title : "Iphone 15 pro max",
    descr : "Apple iPhone 15 Pro Max (256 GB) - Black offers a 6.1 Super Retina XDR display, A15 Bionic chip, dual 12MP cameras with advanced low-light performance." , 
    imgurl : "images/iPhone15ProMax.jpeg",
    price : "55000" ,
    no_items : 0
}]

function draw() {
    let data = Products.map(item => {
        return `<div class=" mb-5 card card-style " style="width:310px">
        <img class="card-img-top" src=${item.imgurl} height="250px" alt="Card image">
        <div class="card-body" id>
        <h4 class="card-title " >${item.title}</h4>
        <p>${item.descr}</p>
        <p class="card-text">${item.price} &pound;</p>
        </div>
        <div class="product-item-actions">
        <button
        class="btn btnn-add mb-3 mx-3 float-start add-item-to-cart" onClick="additem(${item.id})"  price=${item.price} name=${item.title}>Add to Cart 
        </button>
        <i class="far fa-heart fav mt-2 me-2"></i>
        </div>
        </div>
        `
    }).join('');
    productsdiv.innerHTML = data
}
draw()
let No_items = document.querySelector("#no_items")
let carts_item = localStorage.getItem("products_added") ? JSON.parse(localStorage.getItem("products_added")) : [] ;
let CartNumberItems = carts_item.reduce( (total,product) => {
    total +=  parseFloat(product.no_items) ;
    return total ;
},0
)
No_items.innerHTML += `cart (${CartNumberItems})`
function additem(id) {
    if(localStorage.getItem("accepted_user")){
        let requiredproduct = Products.find((item)=> item.id === id);
        let IteminCart = carts_item.find((item)=> item.id === requiredproduct.id); 
        if(IteminCart) {
            IteminCart.no_items++;
        } else {
           requiredproduct.no_items = 1;
           carts_item = [...carts_item , requiredproduct]
        }
        CartNumberItems = carts_item.reduce((total, product) => {
            total += parseFloat(product.no_items);
            return total;
        }, 0);
        No_items.innerHTML = `<i class="fa fa-shopping-cart"></i> cart (${CartNumberItems})`;
        localStorage.setItem("products_added", JSON.stringify(carts_item));
    }
    else{
        alert("login first")
        setInterval(() => {
            window.location ="Login.html"
        }, 1000);
    }
}