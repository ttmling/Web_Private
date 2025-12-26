let restaurants = [];

// Load dữ liệu từ cards.json, sau khi load xong mới renderList được
fetch("cards.json")
  .then(res => res.json())  //chuyển dữ liệu json->js
  .then(data => {          //data: kq sau khi đọc json, biến cục bộ
    restaurants = data;
    renderList(restaurants);
  })
  .catch((error) => console.error("❌ Lỗi:", error));


const input = document.getElementById('input');
const container = document.getElementById('container');


// Hàm hiển thị danh sách ra màn hình
function renderList(list) {
  container.innerHTML = ""; 

  if (list.length === 0) {
    container.innerHTML = "Không tìm thấy.";
    return;
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = "card";

    card.innerHTML =
      `
      <div class="image"><img src="${item.image}" alt=""></div>
      <div class="name">${item.name}</div>
      <div class="cuisine">${item.cuisine}</div>
      <div class="priceForTwo">${item.priceForTwo}</div>
      <div class="distance">${item.distance}</div>
      <div class="discount">${item.discount}</div>
      <div class="rating">${item.rating}</div>
      <div class="location">${item.location}</div>
      <div class="isPromoted">${item.isPromoted}</div>
      `;

    container.appendChild(card);
  });
}


//tìm kiếm
input.addEventListener("input", event => {
  const keyword = event.target.value.toLowerCase(); //lấy gtri hiện tại của ô input đang gõ
  const result = restaurants.filter(item => { //result là mảng các item trong restaurants phù hợp với điều kiện
    return item.name.toLowerCase().includes(keyword); //true->giữ, false->bỏ
  });
  renderList(result);
});

