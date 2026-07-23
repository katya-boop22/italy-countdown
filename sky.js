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
        "🌿 Afternoon breeze • Amalfi waters sparkling 🌊";


    }



    else if (hour >= 18 && hour < 21) {


        skyDetails.innerHTML =
        "🌅 Golden hour • Italian sunsets and memories ✨";


    }



    else {


        skyDetails.innerHTML =
        "🌙 ✨ Stars above the Mediterranean";


    }


}





function addFloatingFireflies() {


    for (let i = 0; i < 18; i++) {


        const firefly =
        document.createElement("div");


        firefly.className =
        "firefly";


        firefly.style.left =
        Math.random() * 100 + "%";


        firefly.style.top =
        Math.random() * 100 + "%";


        firefly.style.animationDelay =
        Math.random() * 5 + "s";


        scene.appendChild(firefly);


    }

}





updateSkyDetails();

addFloatingFireflies();




setInterval(
    updateSkyDetails,
    60000
);
