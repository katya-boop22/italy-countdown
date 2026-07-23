const tripDate = new Date("September 22, 2026 11:00:00").getTime();



function updateCountdown() {

    const now = new Date().getTime();

    const distance = tripDate - now;



    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
        "🇮🇹 We are in Italy!";

        return;

    }



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


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


    const italyTime =

    new Intl.DateTimeFormat(
        "en-GB",
        {
            timeZone:"Europe/Rome",
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            hour12:false
        }

    ).format(new Date());



    document.getElementById("italyClock").innerHTML =
    italyTime;


}





function updateItalyMood() {


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



    const scene =
    document.getElementById("scene");


    const mood =
    document.getElementById("italyMood");





    if (hour >= 6 && hour < 12) {


        scene.className =
        "scene morning";


        mood.innerHTML =
        "☀️ Buongiorno from Italy";


    }



    else if (hour >= 12 && hour < 18) {


        scene.className =
        "scene afternoon";


        mood.innerHTML =
        "🌿 A beautiful Italian afternoon";


    }



    else if (hour >= 18 && hour < 21) {


        scene.className =
        "scene sunset";


        mood.innerHTML =
        "🌅 Golden hour on the Amalfi Coast";


    }



    else {


        scene.className =
        "scene night";


        mood.innerHTML =
        "🌙 A peaceful Italian night";


    }

}





function updateArrivalMessage() {


    const now = new Date();


    const arrivalDate =
    new Date("September 22, 2026 11:00:00");



    const arrivalBox =
    document.querySelector(".arrival-card");



    if (now >= arrivalDate) {


        arrivalBox.innerHTML =

        `

        <h2>
        🇮🇹 Benvenuti in Italia
        </h2>


        <p>
        The waiting is over.
        The memories begin.
        </p>


        <div class="arrival-details">


        🍋 First lemon tree spotted<br>

        🌊 First Mediterranean view<br>

        ☕ First Italian coffee<br>

        📸 First unforgettable moment


        </div>


        `;

    }


}





function createSparkles() {


    const scene =
    document.getElementById("scene");



    for (let i = 0; i < 15; i++) {


        const sparkle =
        document.createElement("div");



        sparkle.className =
        "sparkle";



        sparkle.style.left =
        Math.random() * 100 + "%";



        sparkle.style.top =
        Math.random() * 100 + "%";



        sparkle.style.animationDelay =
        Math.random() * 5 + "s";



        scene.appendChild(sparkle);


    }


}





updateCountdown();

updateItalyClock();

updateItalyMood();

updateArrivalMessage();

createSparkles();




setInterval(updateCountdown,1000);

setInterval(updateItalyClock,1000);

setInterval(updateItalyMood,60000);

setInterval(updateArrivalMessage,60000);
