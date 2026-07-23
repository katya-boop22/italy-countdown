// ======================================================
// LA DOLCE ATTESA
// Complete script.js
// ======================================================

const departure = new Date("September 22, 2026 11:00:00 GMT-0700");

const countdown = document.getElementById("countdown");
const italyClock = document.getElementById("italyClock");

function updateCountdown() {

    const now = new Date();

    const distance = departure - now;

    if (distance <= 0) {

        countdown.innerHTML =
        "✨ Benvenuti in Italia! ✨";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

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

function updateItalyClock() {

    const now = new Date();

    const options = {

        timeZone: "Europe/Rome",

        weekday: "long",

        hour: "numeric",

        minute: "2-digit",

        second: "2-digit",

        hour12: true

    };

    italyClock.innerHTML =
    now.toLocaleString("en-CA", options);

}

updateCountdown();
updateItalyClock();

setInterval(updateCountdown, 1000);
setInterval(updateItalyClock, 1000);
