function createNewJourney(id, departure, arrival, date, price) {
  let html = `<div id=${id} class="trips">
    <div class="cities">${departure} > ${arrival}</div>
    <div class="hour">${new Date(date).getHours()} : ${new Date(
    date
  ).getMinutes()}</div>
    <div class="price">${price}</div>
<button class="book">Book</button>
</div>`;
  return html;
}

document.querySelector("#search").addEventListener("click", function () {
  fetch("http://localhost:3000/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      departure: document.querySelector("#departure").value,
      arrival: document.querySelector("#arrival").value,
      date: document.querySelector("#calendar").value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.result);
      if (data.result) {
        // Suppression du contenu de la div de résultat
        let resultElement = document.querySelector("#result");
        if (resultElement.childNodes) {
          while (resultElement.firstChild) {
            resultElement.removeChild(resultElement.firstChild);
          }
        }
        let trips = data.trips;
        for (let i = 0; i < trips.length; i++) {
          // Ajout du contenu HTML pour chaque trip trouvé
          let trip = trips[i];
          console.log(
            trip._id,
            trip.departure,
            trip.arrival,
            trip.date,
            trip.price
          );
          let tripHtml = createNewJourney(
            trip._id,
            trip.departure,
            trip.arrival,
            trip.date,
            trip.price
          );
          document.querySelector("#result").innerHTML += tripHtml;
        }
        document.querySelectorAll(".book").forEach((item) => {
            console.log("toto", item.parentNode.id)
          item.addEventListener("click", function () {
            fetch("http://localhost:3000/carts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: item.parentNode.id,
              }),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
                //window.location.assign("cart.html");
              });
          });
        });
      } else {
        let resultElement = document.querySelector("#result");
        if (resultElement.childNodes) {
          while (resultElement.firstChild) {
            resultElement.removeChild(resultElement.firstChild);
          }
        }
        document.querySelector("#result").innerHTML += `<div id="emptyCart">
                    <img src="images/notfound.png" />
                    <div class="divider">No trip found</div>
                  </div>`;
      }
    });
});
