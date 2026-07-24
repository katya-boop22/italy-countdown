/* =========================================================
   LA DOLCE ATTESA
   Complete script.js
   ========================================================= */

"use strict";

/* ---------- Trip details ---------- */

const departureDate = new Date("2026-09-22T11:00:00-07:00");

const ITALY_TIME_ZONE = "Europe/Rome";

/* ---------- Page elements ---------- */

const scene = document.getElementById("scene");
const countdown = document.getElementById("countdown");
const italyClock = document.getElementById("italyClock");
const italyGreeting = document.getElementById("italyGreeting");
const greetingIcon = document.getElementById("greetingIcon");
const italyPeriod = document.getElementById("italyPeriod");

/* ---------- Helpers ---------- */

function padNumber(number) {
  return String(number).padStart(2, "0");
}

function getItalyTimeParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: ITALY_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const parts = formatter.formatToParts(date);

  const values = {};

  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  });

  return {
    hour: Number(values.hour),
    minute: Number(values.minute),
    second: Number(values.second)
  };
}

function createTimeBox(value, label) {
  return `
    <div class="time-box">
      <span class="number">${padNumber(value)}</span>
      <span class="label">${label}</span>
    </div>
  `;
}

/* ---------- Countdown ---------- */

function updateCountdown() {
  if (!countdown) {
    return;
  }

  const now = new Date();
  const remainingTime = departureDate.getTime() - now.getTime();

  if (remainingTime <= 0) {
    countdown.innerHTML = `
      <div class="arrival-message">
        Benvenuti in Italia! 🇮🇹🍋
      </div>
    `;

    document.body.classList.add("trip-has-begun");
    return;
  }

  const totalSeconds = Math.floor(remainingTime / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdown.innerHTML = `
    <div class="time-grid">
      ${createTimeBox(days, "Days")}
      ${createTimeBox(hours, "Hours")}
      ${createTimeBox(minutes, "Minutes")}
      ${createTimeBox(seconds, "Seconds")}
    </div>
  `;
}

/* ---------- Italy clock ---------- */

function updateItalyClock() {
  if (!italyClock) {
    return;
  }

  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: ITALY_TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  italyClock.textContent = timeFormatter.format(now);
}

/* ---------- Italy atmosphere ---------- */

function getItalyAtmosphere(hour) {
  if (hour >= 5 && hour < 8) {
    return {
      sceneClass: "scene-morning",
      greeting: "Buongiorno, Jipka",
      icon: "🌅",
      period: "Italian sunrise"
    };
  }

  if (hour >= 8 && hour < 12) {
    return {
      sceneClass: "scene-morning",
      greeting: "Buongiorno, Jipka",
      icon: "☀️",
      period: "Italian morning"
    };
  }

  if (hour >= 12 && hour < 18) {
    return {
      sceneClass: "scene-day",
      greeting: "Buon pomeriggio, Jipka",
      icon: "🍋",
      period: "Italian afternoon"
    };
  }

  if (hour >= 18 && hour < 21) {
    return {
      sceneClass: "scene-evening",
      greeting: "Buonasera, Jipka",
      icon: "🌅",
      period: "Italian golden hour"
    };
  }

  return {
    sceneClass: "scene-night",
    greeting: "Buonanotte, Jipka",
    icon: "🌙",
    period: "Italian night"
  };
}

function updateItalyAtmosphere() {
  if (!scene) {
    return;
  }

  const italyTime = getItalyTimeParts();
  const atmosphere = getItalyAtmosphere(italyTime.hour);

  scene.classList.remove(
    "scene-morning",
    "scene-day",
    "scene-evening",
    "scene-night"
  );

  scene.classList.add(atmosphere.sceneClass);

  if (italyGreeting) {
    italyGreeting.textContent = atmosphere.greeting;
  }

  if (greetingIcon) {
    greetingIcon.textContent = atmosphere.icon;
  }

  if (italyPeriod) {
    italyPeriod.textContent = atmosphere.period;
  }

  document.body.dataset.italyHour = String(italyTime.hour);
}

/* ---------- Visibility refresh ---------- */

function refreshPageDetails() {
  updateCountdown();
  updateItalyClock();
  updateItalyAtmosphere();
}

/* ---------- Start everything ---------- */

refreshPageDetails();

window.setInterval(updateCountdown, 1000);
window.setInterval(updateItalyClock, 1000);
window.setInterval(updateItalyAtmosphere, 60000);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshPageDetails();
  }
});

window.addEventListener("focus", refreshPageDetails);
