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
  const now = new Date();

  const italyHour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Rome",
      hour: "numeric",
      hour12: false
    }).format(now)
  );

  const italyTime = now.toLocaleString("en-US", {
    timeZone: "Europe/Rome",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  document.getElementById("italyClock").innerHTML = italyTime;

  const scene = document.querySelector(".scene");

  if (italyHour >= 7 && italyHour < 19) {
    scene.classList.remove("night");
  } else {
    scene.classList.add("night");
  }
}

updateCountdown();
updateItalyClock();

setInterval(updateCountdown, 1000);
setInterval(updateItalyClock, 1000);
