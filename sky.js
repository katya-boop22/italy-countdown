/* =========================================================
   LA DOLCE ATTESA
   Complete sky.js — Version 2.2
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

/* ---------- Atmosphere messages ---------- */

const skyMessages = {
  sunrise: [
    "🌅 Sunrise in Italy • The coast is waking softly",
    "🌅 Dawn in Italy • Golden light touches the cliffs",
    "☕ Early morning in Italy • The cafés are beginning to stir",
    "🌊 Sunrise on the coast • The Mediterranean is glowing"
  ],

  morning: [
    "☀️ Morning in Italy • Lemon trees glowing 🍋",
    "☕ Morning in Italy • Café terraces are opening",
    "🍋 Morning on the coast • Lemon blossoms scent the air",
    "🌿 Buongiorno from Italy • Gardens shimmer in the sunlight",
    "🌊 Morning in Amalfi • The sea is bright and peaceful"
  ],

  afternoon: [
    "🌿 Afternoon in Italy • Amalfi waters sparkling 🌊",
    "☀️ Afternoon on the coast • The sea shines turquoise",
    "🍋 Italian afternoon • Sunlight dances through the lemon trees",
    "🌊 Afternoon in Italy • Boats drift across the Mediterranean",
    "🌸 The coast is blooming beneath the Italian sun"
  ],

  evening: [
    "🌅 Golden hour in Italy • The coast is glowing",
    "🌇 Evening in Italy • The cliffs are turning amber",
    "🍷 Italian evening • Café lights begin to glow",
    "🌊 Sunset on the coast • The sea reflects the sky",
    "🌸 Buonasera from Italy • Warm light fills the gardens"
  ],

  night: [
    "🌙 Night in Italy • Stars over the Mediterranean ✨",
    "✨ Italian night • The coastline is glowing softly",
    "🌊 Night on the coast • Moonlight shimmers on the sea",
    "🌙 Buonanotte from Italy • The villages sparkle below",
    "⭐ The Mediterranean rests beneath a sky full of stars"
  ]
};

/* ---------- Message selection ---------- */

function getTimePeriod(hour) {
  if (hour >= 5 && hour < 8) {
    return "sunrise";
  }

  if (hour >= 8 && hour < 12) {
    return "morning";
  }

  if (hour >= 12 && hour < 18) {
    return "afternoon";
  }

  if (hour >= 18 && hour < 21) {
    return "evening";
  }

  return "night";
}

function getRotatingMessage(period) {
  const messages = skyMessages[period];

  if (!messages || messages.length === 0) {
    return "Italy is waiting for you 🇮🇹";
  }

  const rotationNumber = Math.floor(Date.now() / 300000);

  return messages[rotationNumber % messages.length];
}

function updateSkyDetails() {
  if (!skyDetails) {
    return;
  }

  const italyHour = getSkyItalyHour();
  const period = getTimePeriod(italyHour);

  skyDetails.textContent = getRotatingMessage(period);
}

/* ---------- Fireflies ---------- */

function createFireflies() {
  if (!skyScene) {
    return;
  }

  const existingFireflies =
    skyScene.querySelectorAll(".firefly");

  if (existingFireflies.length > 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  for (
    let index = 0;
    index < FIREFLY_COUNT;
    index += 1
  ) {
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

/* ---------- Refresh ---------- */

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
