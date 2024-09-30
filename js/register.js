let username = document.querySelector("#username_reg")
let pass = document.querySelector("#pass_reg")
let email = document.querySelector("#email")
let regbtn = document.querySelector("#sign_up")
let checkeditem = document.querySelector("#check");

regbtn.addEventListener("click",function(e){
    if(username.value === "" || email.value === "" || pass.value === ""){
        alert("please fill all the data")
    }
    else{
        if (!checkeditem.checked) {
            alert("Please accept the General Terms and Conditions before signing up.");
        } else {
        e.preventDefault()
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",pass.value)
        setInterval(()=>{
            window.location="Login.html"
        },1000)
    }
}

})
