function addTripInCart(id, departure, arrival, date, price) {
  let html = `<div id=${id} class="trips">
      <div class="cities">${departure} > ${arrival}</div>
      <div class="hour">${new Date(date).getHours()} : ${new Date(
    date
  ).getMinutes()}</div>
      <div class="price">${price}</div>
  <button class="delete">X</button>
  </div>`;
  return html;
}

fetch("http://localhost:3000/carts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: document.querySelector("#departure").value,
    arrival: document.querySelector("#arrival").value,
    date: document.querySelector("#calendar").value,
  }),
});
