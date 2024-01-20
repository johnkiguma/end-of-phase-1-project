// const url ='https://docs.impala.travel/docs/booking-api/';
// const options ={
//   method :'GET' ,
// }
const db = "https://docs.impala.travel/docs/booking-api/"

document.addEventListener("DOMContentLoaded", () => {
    getHotels(data);
    document.querySelector("#book-hotel").addEventListener("click", handleBookTicket);
<<<<<<< HEAD
=======
});

function getHotels() {
    fetch(db)
    .then(res => res.json())
    .then(hotel => {
        hotel.forEach(hotel => {renderHotelList(hotel)})
        const firstHotel = document.querySelector("#id1");
        firstHotel.dispatchEvent(new Event("click"));
    })
}
function handleHotelClick(hotel) {
  const poster = document.querySelector("img#poster")
  poster.src = hotel.poster;
  poster.alt = hotel.title;
  const info = document.querySelector("#showing");
  info.querySelector("ln-list").textContent = hotel.contact;
  // info.querySelector("#runtime").textContent = movie.runtime+" minutes";
  info.querySelector("ln-hotel").textContent = hotel.description;
  // info.querySelector("#showtime").textContent = movie.showtime;
  info.querySelector("#ticket-num").textContent = movie.capacity - movie.tickets_sold + " remaining tickets";
}
function handleBookHotel() {
  const ticketDiv = document.querySelector("#ticket-num");
  const tickets = ticketDiv.textContent.split(" ")[0];
  if (tickets > 0) {
      ticketDiv.textContent = tickets - 1 + " remaining tickets";
  }
}
function addEventListener(){
  
}
>>>>>>> 94f0e85380e206035e75c2dc39595b651f39008d
});

function getHotels() {
    fetch(db)
    .then(res => res.json())
    .then(hotel => {
        hotel.forEach(hotel => {renderHotelList(hotel)})
        const firstHotel = document.querySelector("#id1");
        firstHotel.dispatchEvent(new Event("click"));
    })
}
function handleHotelClick(hotel) {
  const poster = document.querySelector("img#poster")
  poster.src = hotel.poster;
  poster.alt = hotel.title;
  const info = document.querySelector("#showing");
  info.querySelector("ln-list").textContent = hotel.contact;
  // info.querySelector("#runtime").textContent = movie.runtime+" minutes";
  info.querySelector("ln-hotel").textContent = hotel.description;
  // info.querySelector("#showtime").textContent = movie.showtime;
  info.querySelector("#ticket-num").textContent = movie.capacity - movie.tickets_sold + " remaining tickets";
}
function handleBookHotel() {
  const ticketDiv = document.querySelector("#ticket-num");
  const tickets = ticketDiv.textContent.split(" ")[0];
  if (tickets > 0) {
      ticketDiv.textContent = tickets - 1 + " remaining tickets";
  }
}
function addEventListener(){
  
}