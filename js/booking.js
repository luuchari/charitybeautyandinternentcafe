document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const service=document.getElementById("service").value;
const date=document.getElementById("date").value;
const time=document.getElementById("time").value;

const booking={name,service,date,time};

let bookings=JSON.parse(localStorage.getItem("bookings"))||[];

bookings.push(booking);

localStorage.setItem("bookings",JSON.stringify(bookings));

document.getElementById("successMessage").innerText="Booking confirmed";

});


function bookingReminder(date,time,service){

const bookingDate = new Date(`${date} ${time}`);
const now = new Date();

const reminderTime = bookingDate - now - (60*60*1000);

if(reminderTime > 0){

setTimeout(()=>{

alert(`Reminder: You have a ${service} booking in 1 hour`);

}, reminderTime);

}

}

function whatsappBooking(){

window.open("https://wa.me/27820000000");

}

function whatsappBooking(){

const name = document.getElementById("name").value;
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

const message =
`Hello Royal-IT.
I would like to book:

Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}`;

window.open(`https://wa.me/27796854496?text=${encodeURIComponent(message)}`);

}

document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

const booking = {name,phone,service,date,time};

let bookings = JSON.parse(localStorage.getItem("royalitBookings")) || [];
bookings.push(booking);

localStorage.setItem("royalitBookings",JSON.stringify(bookings));

document.getElementById("successMessage").innerText="Booking confirmed 🎉";

});