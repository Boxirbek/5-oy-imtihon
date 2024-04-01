
const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");
const API_URL = "https://dummyjson.com/products";

async function fetchData(api) {
  let getData = await fetch(api);
  getData
    .json()
    .then((res) => createCard(res.products))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API_URL);

function createCard(data) {
  let fragment = document.createDocumentFragment();
  data.slice(0, 8).forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div data-id=${product.id} class="card">
       <div class="card__img">
           <img name="product-image" src="${product.thumbnail}" alt="">
       </div>
       <h3>${product.title}</h3>
       <div class="card__bottom">
       <h4>${product.price} $</h4>
       <img src="./img/Frame 566.png" alt="">
       </div>
    </div>
    `;
    fragment.appendChild(card); // To'g'ri qo'shib olish
  });
  wrapper.appendChild(fragment); // Fragmentni wrapper ga qo'shib olish
}

const singleRoate = (id) => {
  window.open(`/pages/product.html?id=${id}`, "_self");
  console.log(id);
};

wrapper.addEventListener("click", (e) => {
  if (e.target.name === "product-image") {
    let id = e.target.closest("[data-id]").dataset.id
    singleRoate(id);
  }
});



