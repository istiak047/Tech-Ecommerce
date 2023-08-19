"use strict";

const init = function(e) {
    //clear local storage
    localStorage.removeItem("details");
    localStorage.removeItem("img");
    localStorage.removeItem("price");
    localStorage.removeItem("position");
    localStorage.removeItem("outofstock");
    localStorage.removeItem("quantity");

    // //get each element
    // var item = document.querySelectorAll(".item-link");
    // var item_details = document.getElementsByClassName("details");
    // var item_img = document.getElementsByTagName("picture");
    // var item_price = document.getElementsByClassName("bs-price");
    var details = [];
    var img = [];
    var price = [];
    // var i=0;

    // item.forEach(item => {
    //     item.addEventListener("click", ()=>{
    //         let position = item.getAttribute("name");
    //         localStorage.setItem("position", JSON.stringify(position));
    //     })
    // })

    // while(i<item.length){
        
      
    //     details[i] = item_details[i].innerHTML,
    //     img[i] = item_img[i].innerHTML,
    //     price[i] = item_price[i].innerHTML
        
        
    //     localStorage.setItem("details",JSON.stringify(details));
    //     localStorage.setItem("img",JSON.stringify(img));
    //     localStorage.setItem("price",JSON.stringify(price));
    
    //     i++;
    // };
      
    //get all Items
    var item_details;
    var item_img;
    var item_price;
    var item_quantity_BD;
    var item = document.querySelectorAll(".item-link");
    
        item.forEach(item => {
            item.addEventListener("click",()=>{
                item_quantity_BD = item.querySelector(".p-q");
                
                item_details = item.querySelector(".details");
                item_img = item.querySelector("picture");
                item_price = item.querySelector(".bs-price");
                localStorage.setItem("details",JSON.stringify(item_details.innerHTML));
                localStorage.setItem("img",JSON.stringify(item_img.innerHTML));
                localStorage.setItem("price",JSON.stringify(item_price.innerHTML));
                localStorage.setItem("outofstock",JSON.stringify(item_quantity_BD.value));
        
                console.log(item_img,item_price,item_details);
            })
        });

        
 
    
};

//functions



document.addEventListener('DOMContentLoaded' , function(){init();});