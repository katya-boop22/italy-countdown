/* =========================================================
   LA DOLCE ATTESA
   Complete sky.js
   ========================================================= */

"use strict";

const skyScene = document.getElementById("scene");
const skyDetails = document.getElementById("skyDetails");

const SKY_TIME_ZONE = "Europe/Rome";
const FIREFLY_COUNT = 18;

/* ---------- Italy time ---------- */

function getSkyItalyHour(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: SKY_TIME_ZONE,
    hour: "numeric",
    hourCycle: "h23"
  });

  return Number(formatter.format(date));
}

/* ---------- Sky message ---------- */

function getSkyMessage(hour) {
  if (hour >= 5 && hour < 8) {
    return "🌅 Sunrise in Italy • The coast is waking softly";
  }

  if (hour >= 8 && hour < 12) {
    return "☀️ Morning in Italy • Lemon trees glowing 🍋";
  }

  if (hour >= 12 && hour < 18) {
    return "🌿 Afternoon in Italy • Amalfi waters sparkling 🌊";
  }

  if (hour >= 18 && hour < 21) {
    return "🌅 Golden hour in Italy • The coast is glowing";
  }

  return "🌙 Night in Italy • Stars over the Mediterranean ✨";
}

function updateSkyDetails() {
  if (!skyDetails) {
    return;
  }

  const italyHour = getSkyItalyHour();

  skyDetails.textContent = getSkyMessage(italyHour);
}

/* ---------- Fireflies ---------- */

function createFireflies() {
  if (!skyScene) {
    return;
  }

  const existingFireflies = skyScene.querySelectorAll(".firefly");

  if (existingFireflies.length > 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let index = 0; index < FIREFLY_COUNT; index += 1) {
    const firefly = document.createElement("span");

    firefly.className = "firefly";
    firefly.setAttribute("aria-hidden", "true");

    const left = 6 + Math.random() * 88;
    const top = 30 + Math.random() * 62;
    const delay = Math.random() * -8;
    const duration = 5.5 + Math.random() * 5;
    const blinkDuration = 1.9 + Math.random() * 2.8;
    const size = 3 + Math.random() * 4;

    firefly.style.left = `${left}%`;
    firefly.style.top = `${top}%`;
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;

    firefly.style.animationDelay =
      `${delay}s, ${delay / 2}s`;

    firefly.style.animationDuration =
      `${duration}s, ${blinkDuration}s`;

    fragment.appendChild(firefly);
  }

  skyScene.appendChild(fragment);
}

/* ---------- Gentle banner refresh ---------- */

function refreshSky() {
  updateSkyDetails();
}

/* ---------- Start ---------- */

createFireflies();
refreshSky();

window.setInterval(refreshSky, 60000);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshSky();
  }
});

window.addEventListener("focus", refreshSky);
