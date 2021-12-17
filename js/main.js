const textspan = document.querySelector(".typed-text");
const textarray = ["Online Shopping", "Online Shopping", "Online Shopping"];
const typingdelay = 200;
const earserdelay = 100;
const newtextdelay = 100;
let textarrayindex = 0;
let charindex = 0;


function type() {
    if (charindex < textarray[textarrayindex].length) {
        // textspan.textContent += textarray[textarrayindex].charAt(charindex);
        charindex++
        setTimeout(type, typingdelay);
    } else {
        setTimeout(earse, newtextdelay);
    }
}

function earse() {
    if (charindex > 0) {
        // textspan.textContent = textarray[textarrayindex].substring(0, charindex - 1);
        charindex--;
        setTimeout(earse, earserdelay);
    } else {
        textarrayindex++;
        if (textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newtextdelay);
})

var fashion = document.getElementById("fashion-products");
var phones = document.getElementById("phones-products");
var electronic = document.getElementById("Electronic-products");
var sports = document.getElementById("sports-products");
var books = document.getElementById("books-products");
var products = [fashion, phones, electronic, sports, books];

function showall() {
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = "block"
    }
}

function showfashion() {
    fashion.style.display = "block";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === fashion) {
            continue
        }
        products[i].style.display = "none";
    }
}

function showphones() {
    phones.style.display = "block";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === phones) {
            continue
        }
        products[i].style.display = "none";
    }

}
function showElectronics() {
    electronic.style.display = "block";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === electronic) {
            continue
        }
        products[i].style.display = "none";
    }
}
function showSports() {
    sports.style.display = "block";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === sports) {
            continue
        }
        products[i].style.display = "none";
    }
}
function showBooks() {
    books.style.display = "block";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === books) {
            continue
        }
        products[i].style.display = "none";
    }
}


function lowestFashion() {
    let fashionDiv = document.querySelectorAll("#fashion-products .card");
    let fashionPrice = document.querySelectorAll("#fashion-products .pro-price");
    for (let i = 0; i < fashionDiv.length - 1; i++) {
        for (let j = i + 1; j < fashionDiv.length; j++) {
            if (parseInt(fashionPrice[i].innerHTML) > parseInt(fashionPrice[j].innerHTML)) {
                var tmp = 0;
                tmp = fashionDiv[i].innerHTML;
                fashionDiv[i].innerHTML = fashionDiv[j].innerHTML;
                fashionDiv[j].innerHTML = tmp;
            }
        }
    }
}

function highestFashion() {
    let fashionDiv = document.querySelectorAll("#fashion-products .card");
    let fashionPrice = document.querySelectorAll("#fashion-products .pro-price");
    for (let i = 0; i < fashionDiv.length - 1; i++) {
        for (let j = i + 1; j < fashionDiv.length; j++) {
            if (parseInt(fashionPrice[i].innerHTML) < parseInt(fashionPrice[j].innerHTML)) {
                var tmp = 0;
                tmp = fashionDiv[i].innerHTML;
                fashionDiv[i].innerHTML = fashionDiv[j].innerHTML;
                fashionDiv[j].innerHTML = tmp;
            }
        }
    }
}

function lowestPhones() {
    let phonesDiv = document.querySelectorAll("#phDiv .card");
    let phonesPrice = document.querySelectorAll("#phDiv .pro-price");
    for (let i = 0; i < phonesDiv.length; i++) {
        for (let j = i + 1; j < phonesDiv.length; j++) {
            var tmp;
            if (parseInt(phonesPrice[i].innerHTML) > parseInt(phonesPrice[j].innerHTML)) {
                tmp = phonesDiv[i].innerHTML;
                phonesDiv[i].innerHTML = phonesDiv[j].innerHTML;
                phonesDiv[j].innerHTML = tmp;
            }
        }
    }
}

function highestPhones() {
    let phonesDiv = document.querySelectorAll("#phone-products .card");
    let phonesPrice = document.querySelectorAll("#phone-products .pro-price");
    for (let i = 0; i < phonesDiv.length; i++) {
        for (let j = i + 1; j < phonesDiv.length; j++) {
            var tmp;
            if (parseInt(phonesPrice[i].innerHTML) < parseInt(phonesPrice[j].innerHTML)) {
                tmp = phonesDiv[i].innerHTML;
                phonesDiv[i].innerHTML = phonesDiv[j].innerHTML;
                phonesDiv[j].innerHTML = tmp;
            }
        }
    }
}

function lowestElectronic() {
    let electronicDiv = document.querySelectorAll("#electronics-products .card");
    let electronicPrice = document.querySelectorAll("#electronics-products .pro-price");
    for (let i = 0; i < electronicDiv.length; i++) {
        for (let j = i + 1; j < electronicDiv.length; j++) {
            var tmp;
            if (parseInt(electronicPrice[i].innerHTML) > parseInt(electronicPrice[j].innerHTML)) {
                tmp = electronicDiv[i].innerHTML;
                electronicDiv[i].innerHTML = electronicDiv[j].innerHTML;
                electronicDiv[j].innerHTML = tmp;
            }
        }
    }
}

function highestElectronic() {
    let electronicDiv = document.querySelectorAll("#electronics-products .card");
    let electronicPrice = document.querySelectorAll("#electronics-products .pro-price");
    for (let i = 0; i < electronicDiv.length; i++) {
        for (let j = i + 1; j < electronicDiv.length; j++) {
            var tmp;
            if (parseInt(electronicPrice[i].innerHTML) < parseInt(electronicPrice[j].innerHTML)) {
                tmp = electronicDiv[i].innerHTML;
                electronicDiv[i].innerHTML = electronicDiv[j].innerHTML;
                electronicDiv[j].innerHTML = tmp;
            }
        }
    }
}

function lowestSports() {
    let sportsDiv = document.querySelectorAll("#sports-products .card");
    let sportsPrice = document.querySelectorAll("#sports-products .pro-price");
    for (let i = 0; i < sportsDiv.length; i++) {
        for (let j = i + 1; j < sportsDiv.length; j++) {
            var tmp;
            if (parseInt(sportsPrice[i].innerHTML) > parseInt(sportsPrice[j].innerHTML)) {
                tmp = sportsDiv[i].innerHTML;
                sportsDiv[i].innerHTML = sportsDiv[j].innerHTML;
                sportsDiv[j].innerHTML = tmp;
            }
        }
    }
}

function highestSports() {
    let sportsDiv = document.querySelectorAll("#sports-products .card");
    let sportsPrice = document.querySelectorAll("#sports-products .pro-price");
    for (let i = 0; i < sportsDiv.length; i++) {
        for (let j = i + 1; j < sportsDiv.length; j++) {
            var tmp;
            if (parseInt(sportsPrice[i].innerHTML) < parseInt(sportsPrice[j].innerHTML)) {
                tmp = sportsDiv[i].innerHTML;
                sportsDiv[i].innerHTML = sportsDiv[j].innerHTML;
                sportsDiv[j].innerHTML = tmp;
            }
        }
    }
}

function lowestBooks() {
    let booksDiv = document.querySelectorAll("#books-products .card");
    let booksPrice = document.querySelectorAll("#books-products .pro-price");
    for (let i = 0; i < booksDiv.length; i++) {
        for (let j = i + 1; j < booksDiv.length; j++) {
            var tmp;
            if (parseInt(booksPrice[i].innerHTML) > parseInt(booksPrice[j].innerHTML)) {
                tmp = booksDiv[i].innerHTML;
                booksDiv[i].innerHTML = booksDiv[j].innerHTML;
                booksDiv[j].innerHTML = tmp;
            }
        }
    }
}

function highestBooks() {
    let booksDiv = document.querySelectorAll("#books-products .card");
    let booksPrice = document.querySelectorAll("#books-products .pro-price");
    for (let i = 0; i < booksDiv.length; i++) {
        for (let j = i + 1; j < booksDiv.length; j++) {
            var tmp;
            if (parseInt(booksPrice[i].innerHTML) < parseInt(booksPrice[j].innerHTML)) {
                tmp = booksDiv[i].innerHTML;
                booksDiv[i].innerHTML = booksDiv[j].innerHTML;
                booksDiv[j].innerHTML = tmp;
            }
        }
    }
}

//cart
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    /////////////////
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    ////////////////
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName("shop-item-button");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked)
    }
    ////////////////////
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    ////////////////////////
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
    /////////////////////
    var imgSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
    //console.log(title, price);
    addItemToCart(title, price, imgSrc);
}


function addItemToCart(price, title, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column bord">
            <img class="cart-item-image img-cart" src="${img}">
            <span class="cart-item-title ">${title}</span>
            <br>
        <span class="cart-price cart-column">$${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div></div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    updateCartTotal()
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
function showcart() {
    cartSection.style.display = "block";
}
function closeCart() {
    cartSection.style.display = "none";

}
function closeLogin() {
    loginForm.style.display = "none";
}

function showlogin() {
    loginForm.style.display = "flex";
}
function closesignup() {
    signupForm.style.display = "none";
}

function showsignup() {
    signupForm.style.display = "flex";
}