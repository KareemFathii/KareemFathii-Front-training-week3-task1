let linkss = document.querySelector("#Links")
let user = document.querySelector("#user-info a")
let logoutnavbar = document.querySelector("#logoutbtn");
let logoutbtn = document.querySelector("#logout");
let No_items = document.querySelector("#no_items")
let carts_item = localStorage.getItem("products_added") ? JSON.parse(localStorage.getItem("products_added")) : [];
let actualproduct = carts_item.reduce( (total,product) => {
    total +=  parseFloat(product.no_items) ;
    return total ;
},0)
No_items.innerHTML = ` <i class="fa fa-shopping-cart"></i>  cart (${actualproduct})`
user.innerHTML += localStorage.getItem("username")
if( localStorage.getItem("accepted_user")){
    linkss.style.display = "none"
    user.style.display = "flex"
    logoutnavbar.style.display = "flex"
}
else{
    linkss.style.display = "flex"
    user.style.display = "none"
    logoutnavbar.style.display = "none"
}
logoutbtn.addEventListener("click", function(e){
    e.preventDefault()
    if(localStorage.getItem("products_added"))
        localStorage.removeItem("products_added")   
    localStorage.removeItem("accepted_user")

    setInterval(() => {
        window.location = "Login.html"
    }, 1000);
})