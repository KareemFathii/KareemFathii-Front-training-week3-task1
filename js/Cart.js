let linkss = document.querySelector("#Links")
let user = document.querySelector("#user-info a")
let logoutbtn = document.querySelector("#logoutbtn");
let No_items = document.querySelector("#no_items")
let carts_item = localStorage.getItem("products_added") ? JSON.parse(localStorage.getItem("products_added")) : [];
let cartmainsection = document.querySelector("#cartsec")
let subTotalDiv  = document.getElementById("Subtotal");
let actualproduct ;

user.innerHTML += localStorage.getItem("username")
if( localStorage.getItem("accepted_user")){
    linkss.style.display = "none"
    user.style.display = "flex"
    logoutbtn.style.display = "flex"
}
else{
    linkss.style.display = "flex"
    user.style.display = "none"
    logoutbtn.style.display = "none"
}
function drawcart(){
    if (carts_item.length !== 0){
        let Drawncart = carts_item.map((item)=>{
            
            const totalprice = parseFloat(item.no_items) *  parseFloat(item.price) ;
            
            return `<div class="product-item d-flex ">
                     
                        <div class="productdata d-flex mt-2" >
                            <img class="product_item_img me-5" src=${item.imgurl} style="width: 200px;" alt="">
                            <div class="product-item-desc">
                                <h2>${item.title} </h2>
                                <span> ${item.descr}</span>
                            </div>
                        </div>
                                
                        <div class="priceforeach">
                            <p class="priceparagraph" style="font-size: 23px;" > &pound; ${item.price}  </p>
                        </div>
                     
                        <div class="product-item-actions ">
                            <div class="theItems mt-3  mb-4 d-flex justify-content-evenly">
                                <button class="decreasebtn me-3"  onClick="updateNumberOfitems(${item.id} , 'decrease')">-</button>
                                <span class="itemsnum" style="font-size: 20px;">${item.no_items}</span>
                                <button class="increasebtn ms-3"  onClick="updateNumberOfitems(${item.id} , 'increase')">+</button>
                            </div>
                        </div>
                        
                        <div class="totalPrice d-flex">
                            <h4>&pound;${totalprice}</h4> <button type="button" onClick="removeproduct(${item.id})" class="btn-close mx-3 mt-1  removecartbtn" aria-label="Close"></button>
                        </div>
                    </div>`
        }).join("");
        cartmainsection.innerHTML = Drawncart; 
         let actualproduct = carts_item.reduce( (total,product) => {
            total +=  parseFloat(product.no_items) ;
            return total ;
        },0)
         No_items.innerHTML = ` <i class="fa fa-shopping-cart"></i>  cart (${actualproduct})`
    }
    else{

        let carttitles = document.getElementById("carttitles")
        carttitles.style.display = "none"
        cartmainsection.innerHTML = `<h1 class="text-center">No items in the cart</h1>`
        No_items.innerHTML = ` <i class="fa fa-shopping-cart"></i> cart (0)`
    }
}    

function updateNumberOfitems(id , updatetype) {
    let Updateditem = carts_item.find(item => {return item.id == id})
    if( updatetype === 'decrease'){
        if(Updateditem.no_items <=1) return;
        Updateditem.no_items--;
    }
    else 
    Updateditem.no_items++;
    localStorage.setItem("products_added", JSON.stringify(carts_item))
    drawcart();   
    displayTotalprice();

}
function displayTotalprice(){
    let subTotal = carts_item.reduce((total, item) => {
        return total + parseFloat(item.price) * parseFloat(item.no_items)
    }, 0)
    subTotalDiv.innerHTML = `&pound; ${subTotal.toFixed(2)}`  
}
function removeproduct(id){
    let updatedcart = carts_item.filter(item => {
        return item.id !== id
    })
    carts_item = updatedcart;
    localStorage.setItem("products_added", JSON.stringify(updatedcart))
    drawcart()
    displayTotalprice()
}
drawcart()
displayTotalprice()

let checkoubtn = document.getElementById("checkoutbtn");
checkoubtn.addEventListener("click",()=>{
    if(carts_item.length > 0)
    alert("Order purchased Successfully")  
})

