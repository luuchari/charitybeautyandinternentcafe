console.log("Admin dashboard loaded");
const bookings = JSON.parse(localStorage.getItem("royalitBookings")) || [];

const container = document.querySelector(".main");

if(bookings.length > 0){
  bookings.forEach(b => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${b.service}</h3>
      <p><strong>Name:</strong> ${b.name}</p>
      <p><strong>Phone:</strong> ${b.phone}</p>
      <p><strong>Date:</strong> ${b.date}</p>
      <p><strong>Time:</strong> ${b.time}</p>
    `;
    container.appendChild(div);
  });
}

function showSection(section){

document.getElementById("bookings-section").style.display="none";
document.getElementById("payments-section").style.display="none";
document.getElementById("users-section").style.display="none";

if(section === "bookings"){
document.getElementById("bookings-section").style.display="block";
}

if(section === "payments"){
document.getElementById("payments-section").style.display="block";
}

if(section === "users"){
document.getElementById("users-section").style.display="block";
}

}

function toggleSidebar(){
document.getElementById("sidebar").classList.toggle("active");
}

function logout(){
alert("Admin logged out");

}

const ctx = document.getElementById('bookingChart');

new Chart(ctx, {
type: 'bar',

data: {

labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],

datasets: [{
label: 'Bookings',

data: [5,7,4,6,8,10,3],

borderWidth:1
}]

},

options:{
responsive:true
}

});
document.addEventListener('DOMContentLoaded', function() {

var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {

initialView: 'dayGridMonth',

events: [

{
title:'Hair Appointment',
start:'2026-03-10'
},
{
  title:'Nail Appointment',
  start:'2026-03-20'
},
{
  title:'Make-up Appointment',
  start:'2026-03-25'
},

{
title:'Website Consultation',
start:'2026-04-04'
},
{
  title:'print out documents',
  start:'2026-05-20'
}


]

});

calendar.render();

});

const bookingsList=JSON.parse(localStorage.getItem("bookings"))||[];

const bookingsContainer=document.getElementById("bookingList");

bookingsList.forEach(b=>{

const div=document.createElement("div");

div.innerHTML=`
<p>${b.name}</p>
<p>${b.service}</p>
<p>${b.date}</p>
<p>${b.time}</p>
<hr>
`;

bookingsContainer.appendChild(div);

});