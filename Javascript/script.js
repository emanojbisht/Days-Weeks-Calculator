"use strict";

//HEADING : variables
const startDateEl = document.querySelector("#startDate");
const endDateEl = document.querySelector("#endDate");
const btnEl = document.querySelector("#btn");
const fromEl = document.querySelector(".fromEl");
const toEl = document.querySelector(".toEl");
const daysPrintEl = document.querySelector(".days-print");
const sectionEl = document.querySelector(".sectionbelow");
const totaldaysEl = document.querySelector(".totaldays");
const weekName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MonthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//HEADING : setting the current date to start Date input
const currentDate = new Date();
const todayYear = currentDate.getFullYear();
const todayMonth =
  currentDate.getMonth() + 1 < 10
    ? "0" + (currentDate.getMonth() + 1)
    : currentDate.getMonth() + 1;

const todayDate =
  currentDate.getDate() < 10
    ? "0" + currentDate.getDate()
    : currentDate.getDate();

startDateEl.value = todayYear + "-" + todayMonth + "-" + todayDate;
endDateEl.value = todayYear + "-" + todayMonth + "-" + todayDate;

//HEADING : calculate button
btnEl.addEventListener("click", () => {
  const endDate = endDateEl.value;
  const startDate = startDateEl.value;
  calculateDays(startDate, endDate);
});

//HEADING : function to calculate the days
function calculateDays(startDate, endDate) {
  const startDay = new Date(startDate);
  const start = startDay.getTime();
  const endDay = new Date(endDate);
  const end = endDay.getTime();
  const remainingTime = end - start;
  let week = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7));
  let day = Math.floor((remainingTime / (1000 * 60 * 60 * 24)) % 7);
  let hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const totaldays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  // let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  // let seconds = Math.floor((remainingTime / 1000) % 60);

  sectionEl.classList.remove("hidden");
  console.log(day);
  let weekDay = startDay.getDay();
  let monthNumber = startDay.getMonth();
  fromEl.textContent =
    weekName[weekDay] +
    " " +
    startDay.getDate() +
    " " +
    MonthName[monthNumber] +
    " " +
    startDay.getFullYear();
  weekDay = endDay.getDay();
  monthNumber = endDay.getMonth();
  toEl.textContent =
    weekName[weekDay] +
    " " +
    endDay.getDate() +
    " " +
    MonthName[monthNumber] +
    " " +
    endDay.getFullYear();
  daysPrintEl.textContent =
    "Weeks : " + week + " | Days : " + day + " | Hours : " + hours;
  totaldaysEl.textContent = "Total Days : " + totaldays;
}
