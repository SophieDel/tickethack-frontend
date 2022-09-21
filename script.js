// fetch('http://localhost:3000/bookings')
// 	.then(response => response.json())
// 	.then(data => {
// 		if (data.bookings) {
// 			for (let i = 0; i < data.bookings.length; i++) {
// 				document.querySelector('#bookingsList').innerHTML += `
// 			<div class="bookings">
// 				<p class="name">${data.bookings[i]}</p>
// 			</div>
// 			`;
// 			} else {
//             }
// 			updateDeleteCityEventListener();
// 		}
// 	});

// fetch('http://localhost:3000/home')
// 	.then(response => response.json())
// 	.then(data => {
//         console.log(data)
// 		if (data.result) {
// 			for (let i = 0; i < data.trips.length; i++) {
// 				document.querySelector('#departure').innerHTML += `
// 			<div  id="masterTrajets" >
// 				<p id="departure">${data.home[i].departure}</p>
//             </div> 
            
//             <div  id="masterTrajets" >
// 				<p id="arrival">${data.arrival[i].arrival}</p>
// 			</div>
// 			`;
// 			}
// 		} else {
//             document.querySelector("xxx").innerHTML +=

//         }

//         updateDeleteCityEventListener();
// 	});

    document.querySelector('#search').addEventListener('click', function () {
        const user = {
            departure: document.querySelector('#departure').value,
            arrival: document.querySelector('#arrival').value,
            date: document.querySelector('#date').value,
        }
    
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    window.location.assign('index.html');
                }
            });
    });