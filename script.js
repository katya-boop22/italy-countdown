const tripDate = new Date("September 22, 2026 11:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = tripDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🇮🇹 We are in Italy!";
        return;
    }

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
        `${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds`;
}


function updateItalyClock() {

    const options = {
        timeZone: "Europe/Rome",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };

    const italyTime = new Intl.DateTimeFormat(
        "en-GB",
        options
    ).format(new Date());


    document.getElementById("italyClock").innerHTML =
        italyTime;
}



function updateItalyMood() {

    const italyHour = new Intl.DateTimeFormat(
        "en-GB",
        {
            timeZone: "Europe/Rome",
            hour: "numeric",
            hour12: false
        }
    ).format(new Date());


    const hour = Number(italyHour);

    const scene = document.getElementById("scene");
    const stars = document.getElementById("stars");
    const mood = document.getElementById("italyMood");


    if (hour >= 6 && hour < 12) {

        scene.className = "scene morning";
        stars.style.opacity = "0";

        mood.innerHTML =
        "☀️ Buongiorno from Italy";

    }

    else if (hour >= 12 && hour < 18) {

        scene.className = "scene afternoon";
        stars.style.opacity = "0";

        mood.innerHTML =
        "🌿 A beautiful Italian afternoon";

    }

    else if (hour >= 18 && hour < 21) {

        scene.className = "scene sunset";
        stars.style.opacity = "0";

        mood.innerHTML =
        "🌅 Golden hour on the Amalfi Coast";

    }

    else {

        scene.className = "scene night";
        stars.style.opacity = "1";

        mood.innerHTML =
        "🌙 A peaceful Italian night";

    }

}



updateCountdown();
updateItalyClock();
updateItalyMood();


setInterval(updateCountdown, 1000);
setInterval(updateItalyClock, 1000);
setInterval(updateItalyMood, 60000);
