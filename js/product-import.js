"use strict";

const init = function(e) {
    
    
    const product_title = document.querySelector(".product-title");
    const main_title = document.querySelector(".main-title");
    const prodcut_img = document.querySelector("picture");
    const prodcut_price = document.querySelector(".bs-price");
    
    
    var details =JSON.parse(localStorage.getItem("details"));
    var img =JSON.parse(localStorage.getItem("img"));
    var price =JSON.parse(localStorage.getItem("price"));
    const outofstock = JSON.parse(localStorage.getItem("outofstock"));

    //for buy now button clicked
    var item_quantity = document.querySelector(".quantity-product");
    localStorage.setItem("quantity",JSON.stringify(item_quantity.value));
    item_quantity.addEventListener("change",()=>{
        localStorage.setItem("quantity",JSON.stringify(item_quantity.value));
    })
  
  
    
    product_title.innerHTML = "Home / " + details;
    main_title.innerHTML = details;
    prodcut_img.innerHTML = img;
    prodcut_price.innerHTML = price;

    if(outofstock==0){
        var addToCartBtn = document.querySelector(".add-cart");
        var buyNowBtn = document.querySelector(".buy-now");
        var commingSoonBtn = document.querySelector(".comming-soon");
        addToCartBtn.classList.add("hide");
        buyNowBtn.classList.add("hide");
        commingSoonBtn.classList.remove("hide");
        commingSoonBtn.addEventListener("click",()=>{
            alert("This Product is out of Stock Come Back Later");
        })
    }


    

    
};



document.addEventListener('DOMContentLoaded' , function(){init();});