const scene = document.getElementById("scene");


const skyDetails = document.createElement("div");

skyDetails.className = "sky-details";

scene.appendChild(skyDetails);




function updateSkyDetails() {


    const hour = Number(

        new Intl.DateTimeFormat(

            "en-GB",

            {
                timeZone:"Europe/Rome",
                hour:"numeric",
                hour12:false
            }

        ).format(new Date())

    );




    if (hour >= 6 && hour < 12) {


        skyDetails.innerHTML =
        "☀️ Morning in Italy • Lemon trees glowing 🍋";


    }


    else if (hour >= 12 && hour < 18) {


        skyDetails.innerHTML =
        "🌿 Afternoon in Italy • Amalfi waters sparkling 🌊";


    }


    else if (hour >= 18 && hour < 21) {


        skyDetails.innerHTML =
        "🌅 Golden hour in Italy • Memories waiting ✨";


    }


    else {


        skyDetails.innerHTML =
        "🌙 Italian night • Stars over the Mediterranean";

    }

}





function createFireflies() {


    for (let i = 0; i < 20; i++) {


        const firefly =
        document.createElement("div");


        firefly.className =
        "firefly";


        firefly.style.left =
        Math.random() * 100 + "%";


        firefly.style.top =
        Math.random() * 100 + "%";


        firefly.style.animationDelay =
        Math.random() * 6 + "s";


        scene.appendChild(firefly);


    }

}





updateSkyDetails();

createFireflies();




setInterval(
    updateSkyDetails,
    60000
);
