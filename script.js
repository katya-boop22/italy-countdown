const tripDate = new Date("September 22, 2026 11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = tripDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById("countdown").innerHTML =
    `${days} days<br>
     ${hours} hours<br>
     ${minutes} minutes<br>
     ${seconds} seconds`;
}

function updateItalyClock() {
  const italyTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Rome",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long"
  });

  document.getElementById("italyClock").innerHTML = italyTime;
}

updateCountdown();
updateItalyClock();

setInterval(updateCountdown, 1000);
setInterval(updateItalyClock, 1000);
