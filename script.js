
/* ==================================
   OUR ANNIVERSARY DATE
================================== */

// Change this to your official anniversary date.
const anniversary = new Date("2025-08-12T00:00:00");


/* ==================================
   LIVE LOVE COUNTER
================================== */

function updateTimer() {

    const now = new Date();
    let difference = now - anniversary;

    if (difference < 0) {
        difference = 0;
    }

    const days = Math.floor(difference / 86400000);

    const hours = Math.floor(
        (difference / 3600000) % 24
    );

    const minutes = Math.floor(
        (difference / 60000) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);


/* ==================================
   REASONS WHY I LOVE YOU
================================== */

const reasons = [

    "Because your smile makes even my hardest days brighter. 💗",

    "Because you make me feel loved, appreciated, and special. 🌷",

    "Because even the simplest moments are beautiful when I'm with you. 🦋",

    "Because I am grateful for your patience, understanding, and love. 💕",

    "Because if I had to choose again, ikaw gihapon. Always ikaw. ♡"

];

function showReason(number) {

    const display = document.getElementById("reasonText");

    if (number >= 0 && number < reasons.length) {
        display.textContent = reasons[number];
    }

}


/* ==================================
   SECRET LETTER DATE UNLOCK
================================== */

// This must match the anniversary date above.
const correctDate = "2025-08-12";

function unlockLetter() {

    const enteredDate =
        document.getElementById("dateAnswer").value;

    const message =
        document.getElementById("dateMessage");

    const lockCard =
        document.getElementById("lockCard");

    const loveLetter =
        document.getElementById("loveLetter");

    if (enteredDate === "") {

        message.textContent =
            "Please enter our special date, langga. 💗";

        return;
    }

    if (enteredDate === correctDate) {

        message.textContent =
            "You remembered! I love you, langga! 🥹💗";

        lockCard.style.display = "none";

        loveLetter.style.display = "block";

        setTimeout(function() {

            loveLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    } else {

        message.textContent =
            "Awww, try again, my love. Remember our special day! 💗";

    }

}


/* ==================================
   FLOATING HEARTS
================================== */

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent =
        Math.random() > 0.5 ? "♡" : "💕";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 1200);
