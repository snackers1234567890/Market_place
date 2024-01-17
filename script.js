let grid = document.getElementById("grid");
let itemCards = [];
let xhr = new XMLHttpRequest();
let link = 'https://my-json-server.typicode.com/snackers1234567890/MarketPlace/products'

xhr.open('GET', link);
xhr.responseType = 'json';
xhr.onload = function(){
    let products = xhr.response;
    grid.innerHTML = null;
    console.log(products)

    products.forEach(product => {
        itemCards.push(product);
        grid.innerHTML += `
            <div class="item-card">
            <h2 class="item-name">${product.name}</h2>
            <img src=" ${product.photo_url}" alt="" class="item-img">
            <p class="item-price">price: ${product.price}</p>
            <p class="item-desc">${product.description}</p>
            <a href="${product.author_id}" class="item-seller">Seller profile</a>
            <div class="item-buy">BUY</div>
            </div> 
       `
    });
}
xhr.send();