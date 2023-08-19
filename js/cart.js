if(document.readyState == "laoding"){
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready();
}

function ready() {

    //cart remove item
    var removeCartItemButtons = document.getElementsByClassName("remove-btn");

    for (var i = 0 ; i < removeCartItemButtons.length ; i++){
        var removeButton = removeCartItemButtons[i];
        removeButton.addEventListener("click" , removeCartItem)
    }

    //cart change item quantity
    var quantityInputs = document.getElementsByClassName("quantity");
    for (var i = 0 ; i < quantityInputs.length ; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    //cart add item
    var addToCartButton = document.querySelector(".add-cart");
    addToCartButton.addEventListener("click" , addToCartClicked)

    // document.querySelector("btn-checkout").addEventListener("click" , checkoutClicked);
    
    
  
}



//functions
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    var titleToRemove = buttonClicked.parentElement.parentElement.querySelector(".item-title").innerHTML;
    console.log(titleToRemove);
    var cartTitles = JSON.parse(localStorage.getItem("cartTitles"));
    var cartPrices = JSON.parse(localStorage.getItem("cartPrices"));
    var cartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
    var cartImages = JSON.parse(localStorage.getItem("cartImages"));
                     
                     
                     
    for ( var i = 0 ; i < cartTitles.length ; i++ ){
        if(cartTitles[i] === titleToRemove)
            {
                cartTitles.splice(i,1);
                cartPrices.splice(i,1);
                cartQuantity.splice(i,1);
                cartImages.splice(i,1);
            }
    };

    localStorage.setItem("cartTitles",JSON.stringify(cartTitles));
    localStorage.setItem("cartPrices",JSON.stringify(cartPrices));
    localStorage.setItem("cartQuantity",JSON.stringify(cartQuantity));
    localStorage.setItem("cartImages",JSON.stringify(cartImages));
    updateCartTotal();
}



function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updateCartTotal();
}




function addToCartClicked(event){
    var button = event.target;
    var product_right = button.parentElement.parentElement.parentElement
    var priceElement = product_right.querySelector(".bs-price");
    var priceArray = priceElement.innerText.split(" ");
    var product_price;
    if(priceArray.length>1)
        product_price = parseFloat(priceArray[1].replace("$" , ""));
    else
        product_price = parseFloat(priceArray[0].replace("$" , ""));

    var product_img = document.querySelector("picture").innerHTML;
    var product_title = document.querySelector(".main-title").innerText;
    var product_quantity = document.querySelector(".quantity-product").value;

    var titles = document.getElementsByClassName("item-title");
    
    
    addItemToLocalStorage(product_title, product_price, product_quantity, product_img);
    for (var i = 0; i <titles.length; i++){
        if(titles[i].innerHTML === product_title)
            {
                alert("you added this product to cart");
                return;
            }
    }
    addItemToCart(product_title, product_price, product_quantity, product_img);
    updateCartTotal();
}




function addItemToCart(product_title, product_price, product_quantity, product_img){
    

    var cartRow = document.createElement("div");
    
    cartRow.className = "cart-item";
    cartRow.innerHTML= `<div class="product-x">
                            <div class="product-img">
                                ${product_img}
                            </div>
                            <div class="item-content">
                                <div class="item-title">${product_title}</div>
                                <div class="item-price">${product_price+"$"}</div>
                                <div class="item-quantity"><input class="quantity" id="id_form-0-quantity" min="1" name="form-0-quantity" value="1" type="number"></div>
                            </div>
                        </div>
                        <div class="remove-item"><img class="remove-btn" src="../images/trash.png"></div>`;
    var cartList = document.querySelector(".cart-list");
    cartList.append(cartRow);
    var quantityElement = document.querySelector(".quantity");
    quantityElement.value = product_quantity;
    
   
    
    //slide the cart again
    const cart_sidebar = document.querySelector(".cart-sidebar");
    cart_sidebar.style.right = "0";

    cartRow.getElementsByClassName("remove-btn")[0].addEventListener("click" , removeCartItem);
    cartRow.getElementsByClassName("quantity")[0].addEventListener("change", quantityChanged);
    
}


function addItemToLocalStorage(product_title, product_price, product_quantity, product_img){
    var cartTitles = [];
    var cartPrices = [];
    var cartQuantity = [];
    var cartImages = [];
    let x=1;
    var cartNofItems = JSON.parse(localStorage.getItem("cartTitles"));

    if(cartNofItems === null)
        {
            
            cartTitles.push(product_title);
            cartPrices.push(product_price);
            cartQuantity.push(product_quantity);
            cartImages.push(product_img);

            localStorage.setItem("cartTitles",JSON.stringify(cartTitles));
            localStorage.setItem("cartPrices",JSON.stringify(cartPrices));
            localStorage.setItem("cartQuantity",JSON.stringify(cartQuantity));
            localStorage.setItem("cartImages",JSON.stringify(cartImages));
        }
    else
        {  
            cartTitles = JSON.parse(localStorage.getItem("cartTitles"));
            cartPrices = JSON.parse(localStorage.getItem("cartPrices"));
            cartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
            cartImages = JSON.parse(localStorage.getItem("cartImages"));
            for ( var i = 0 ; i <cartPrices.length ; i++){
               
                if(cartTitles[i] === product_title)
                    {
                        x = 0;
                        break;
                    }
            };
            if(x == 1){
                cartTitles.push(product_title);
                cartPrices.push(product_price);
                cartQuantity.push(product_quantity);
                cartImages.push(product_img);

                localStorage.setItem("cartTitles",JSON.stringify(cartTitles));
                localStorage.setItem("cartPrices",JSON.stringify(cartPrices));
                localStorage.setItem("cartQuantity",JSON.stringify(cartQuantity));
                localStorage.setItem("cartImages",JSON.stringify(cartImages));

            }
            
        }
}

function cartImport(){
    //cart show 
    var cartTitles = [];
    var cartPrices = [];
    var cartQuantity = [];
    var cartImages = [];

    cartTitles = JSON.parse(localStorage.getItem("cartTitles"));
    cartPrices = JSON.parse(localStorage.getItem("cartPrices"));
    cartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
    cartImages = JSON.parse(localStorage.getItem("cartImages"));

    


    for ( var i = 0 ; i <cartPrices.length ; i++){
        addItemToCart(cartTitles[i], cartPrices[i], cartQuantity[i], cartImages[i]);

    };

}




function updateCartTotal(){
    var cartItemContainer = document.querySelector(".cart-list");
    var cartRows = cartItemContainer.getElementsByClassName("cart-item");
    var total = 0;
    for ( var i = 0 ; i< cartRows.length ; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("item-price")[0];
        var quantityElement = cartRow.getElementsByClassName("quantity")[0];
        var priceArray = priceElement.innerText.split(" ");
        var price;
        var quantity = quantityElement.value;
        if(priceArray.length>1)
            price = parseFloat(priceArray[1].replace("$" , ""));
        else
            price = parseFloat(priceArray[0].replace("$" , ""));

        total = total + (price * quantity);
    }
    total = Math.round(total * 100 ) / 100;

    document.getElementsByClassName("total-price")[0].innerHTML = total+"$";

}





function checkoutClicked(){
    alert("nice");

}

//cart Slide
function cartSlide(){
    const cart_btn = document.querySelector(".cart");
    const cart_sidebar = document.querySelector(".cart-sidebar");
    const cart_close = document.querySelector(".cart-close");
    
    cart_btn.addEventListener("click" , () => {
        console.log("slm");
        cart_sidebar.style.right = "0";
    })
    
    cart_close.addEventListener("click" , () => {
        cart_sidebar.style.right = "-700px";
    })
    }
    
    
    
      //cart Slide
      cartSlide();
    
      cartImport();
  updateCartTotal();