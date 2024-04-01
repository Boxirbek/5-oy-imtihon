
const API_URL = "https://dummyjson.com/products";
const heroProduct = document.querySelector(".hero__product");
const loading = document.querySelector(".loading");
console.log(loading);
const notFound = document.querySelector(".not__found");

async function fetchData(api) {
  let path = new URLSearchParams(window.location.search);
  let id = path.get("id");


let getData = await fetch(`${api}/${id}`)
getData
    .json()
    .then(res => createSingle(res))
    .catch(err => {
        notFound.style.display = "block"
    })
    .finally(() => {
        loading.style.display = "none"
    })
}

fetchData(API_URL);

function createSingle(data) {
  heroProduct.innerHTML = `
      <div class="collect__product">
        <div class="products__img">
          <img src="${data.images[0]}" alt="" width="110" height="115">
          <img src="${data.images[1]}" alt="" width="110" height="115">
          <img src="${data.images[2]}" alt="" width="110" height="115">
          <img src="${data.images[3]}" alt="" width="110" height="115">
        </div>
        <img src="${data.thumbnail}" alt="" width="380" height="500">
      </div>
      <div class="product__info">
        <h1>${data.category}</h1>
        <img src="../img/Frame 566.png" alt="">
        <h2>$${data.price}</h2>
        <h5>.${data.description}.</h5>
        <div class="color">
          <h3>Color:</h3>
          <input type="color" name="" id="">
          <input type="color" name="" id="">
        </div>
        <div class="size">
          <h3>Size:</h3>
          <button class="btn__Size">xs</button>
          <button class="btn__Size">xl</button>
          <button class="btn__Size">x</button>
          <button class="btn__Size">l</button>
        </div>
        <div class="size__btn">
          <button class="btn">+</button>
          <button class="btn">2</button>
          <button class="btn">-</button>
          <button class="buy__btn">Buy Now</button>
          <img src="../img/Wishlist.png" alt="" width="25" height="25">
        </div>
        <a href="https://www.facebook.com/exclusive1delivery/">
          <img src="../img/dilvery.png" alt="" width="360" height="180">
        </a>
      </div>
  `;
}
