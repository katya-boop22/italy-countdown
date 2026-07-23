const scene = document.getElementById("scene");

const skyDetails = document.createElement("div");

skyDetails.className = "sky-details";

scene.appendChild(skyDetails);



function updateSkyDetails() {

    const hour = Number(
        new Intl.DateTimeFormat(
            "en-GB",
            {
                timeZone: "Europe/Rome",
                hour: "numeric",
                hour12: false
            }
        ).format(new Date())
    );



    if (hour >= 6 && hour < 12) {

        skyDetails.innerHTML =
        "☀️ Morning light • Lemon trees waking in Italy 🍋";

    }


    else if (hour >= 12 && hour < 18) {

        skyDetails.innerHTML =
        "🌿 Afternoon breeze • Amalfi Coast views 🌊";

    }


    else if (hour >= 18 && hour < 21) {

        skyDetails.innerHTML =
        "🌅 Golden sunset • The coast is glowing ✨";

    }


    else {

        skyDetails.innerHTML =
        "🌙 ✨ A quiet Italian night under the stars";

    }

}



updateSkyDetails();


setInterval(
    updateSkyDetails,
    60000
);
