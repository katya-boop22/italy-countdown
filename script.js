// ======================================================
// LA DOLCE ATTESA
// Complete script.js
// ======================================================

const departure = new Date("2026-09-22T11:00:00-07:00");

const countdown = document.getElementById("countdown");
const italyClock = document.getElementById("italyClock");
const italyGreeting = document.getElementById("italyGreeting");
const greetingIcon = document.getElementById("greetingIcon");
const italyPeriod = document.getElementById("italyPeriod");
const scene = document.getElementById("scene");

function updateCountdown() {
  const now = new Date();
  const distance = departure - now;

  if (distance <= 0) {
    countdown.innerHTML = "✨ Benvenuti in Italia! ✨";
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  countdown.innerHTML = `
    <div class="time-grid">
      <div class="time-box"><div class="number">${days}</div><div class="label">Days</div></div>
      <div class="time-box"><div class="number">${hours}</div><div class="label">Hours</div></div>
      <div class="time-box"><div class="number">${minutes}</div><div class="label">Minutes</div></div>
      <div class="time-box"><div class="number">${seconds}</div><div class="label">Seconds</div></div>
    </div>`;
}

function italyHour() {
  return Number(new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    hourCycle: "h23"
  }).format(new Date()));
}

function updateItaly() {
  const now = new Date();

  italyClock.textContent = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);

  scene.classList.remove("scene-morning","scene-day","scene-evening","scene-night");

  const h = italyHour();

  if (h >= 5 && h < 12) {
    italyGreeting.textContent = "Buongiorno, Jipka";
    greetingIcon.textContent = "☀️";
    italyPeriod.textContent = "Italian morning";
    scene.classList.add("scene-morning");
  } else if (h >= 12 && h < 18) {
    italyGreeting.textContent = "Buon pomeriggio, Jipka";
    greetingIcon.textContent = "🍋";
    italyPeriod.textContent = "Italian afternoon";
    scene.classList.add("scene-day");
  } else if (h >= 18 && h < 21) {
    italyGreeting.textContent = "Buonasera, Jipka";
    greetingIcon.textContent = "🌅";
    italyPeriod.textContent = "Italian evening";
    scene.classList.add("scene-evening");
  } else {
    italyGreeting.textContent = "Buonanotte, Jipka";
    greetingIcon.textContent = "🌙";
    italyPeriod.textContent = "Italian night";
    scene.classList.add("scene-night");
  }
}

updateCountdown();
updateItaly();

setInterval(updateCountdown, 1000);
setInterval(updateItaly, 1000);
