const month = document.querySelector(".month");
const weekday = document.querySelector(".weekday");
const day = document.querySelector(".day");
const year = document.querySelector(".year");

window.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  console.log(date, "date");
  console.log("month", date.getMonth());
  console.log("day", date.getDate());
  console.log("year", date.getFullYear());
  console.log("weekday", date.toLocaleDateString("en-US", { weekday: "long" }));
  console.log("month", date.toLocaleDateString("en-US", { month: "long" }));
  day.textContent = date.getDate();
  year.textContent = date.getFullYear();
  month.textContent = date.toLocaleDateString("en-us", { month: "long" });
  weekday.textContent = date.toLocaleDateString("en-us", { weekday: "long" });
});
