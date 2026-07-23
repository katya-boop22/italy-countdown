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
  const distance = departure.getTime() - now.getTime();

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
      <div class="time-box">
        <div class="number">${days}</div>
        <div class="label">Days</div>
      </div>

      <div class="time-box">
        <div class="number">${hours}</div>
        <div class="label">Hours</div>
      </div>

      <div class="time-box">
        <div class="number">${minutes}</div>
        <div class="label">Minutes</div>
      </div>

      <div class="time-box">
        <div class="number">${seconds}</div>
        <div class="label">Seconds</div>
      </div>
    </div>
  `;
}

function getItalyHour() {
  const hourFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    hourCycle: "h23"
  });

  return Number(hourFormatter.format(new Date()));
}

function updateItalyExperience() {
  const now = new Date();

  italyClock.textContent = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);

  const italyHour = getItalyHour();

  scene.classList.remove(
    "scene-morning",
    "scene-day",
    "scene-evening",
    "scene-night"
  );

  if (italyHour >= 5 && italyHour < 12) {
    italyGreeting.textContent = "Buongiorno, Jipka";
    greetingIcon.textContent = "☀️";
    italyPeriod.textContent = "Italian morning";
    scene.classList.add("scene-morning");
  } else if (italyHour >= 12 && italyHour < 18) {
    italyGreeting.textContent = "Buon pomeriggio, Jipka";
    greetingIcon.textContent = "🍋";
    italyPeriod.textContent = "Italian afternoon";
    scene.classList.add("scene-day");
  } else if (italyHour >= 18 && italyHour < 21) {
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
updateItalyExperience();

setInterval(updateCountdown, 1000);
setInterval(updateItalyExperience, 1000);
