document.addEventListener("DOMContentLoaded", () => {

  // Loader logic
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  setTimeout(() => {
    loader.style.display = "none";
    main.classList.remove("hidden");
    generateCalendar(); // 👈 generate calendar AFTER loading
  }, 2500);

  function generateCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // clear just in case

    const year = 2026;
    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    for (let month = 0; month < 12; month++) {
      const monthDiv = document.createElement("div");
      monthDiv.className = "month";

      // Month title
      const title = document.createElement("h2");
      title.textContent = monthNames[month];
      monthDiv.appendChild(title);

      // Days grid
      const daysDiv = document.createElement("div");
      daysDiv.className = "days";

      // Day names
      dayNames.forEach(day => {
        const dayEl = document.createElement("div");
        dayEl.textContent = day;
        dayEl.className = "day-name";
        daysDiv.appendChild(dayEl);
      });

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Empty spaces before first date
      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
empty.className = "empty";
daysDiv.appendChild(empty);
      }
      // Dates
    for (let day = 1; day <= daysInMonth; day++) {
  const dateEl = document.createElement("div");
  dateEl.textContent = day;
  dateEl.className = "date";

  const dayIndex = new Date(year, month, day).getDay();
  if (dayIndex === 0 || dayIndex === 6) {
    dateEl.classList.add("weekend");
  }

  daysDiv.appendChild(dateEl);
}

      monthDiv.appendChild(daysDiv);
      calendar.appendChild(monthDiv);
    }
  }

});
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const key = `${year}-${month + 1}-${day}`;
if (localStorage.getItem(key)) {
  dateEl.classList.add("has-note");
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
