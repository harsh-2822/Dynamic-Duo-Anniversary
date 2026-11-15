const PASSCODE = "2822";

const lockScreen = document.querySelector(".lockScreen");
const loading = document.getElementById("loading");
const main = document.getElementById("main");
const wrong = document.getElementById("wrong");
const music = document.getElementById("music");
const message = document.getElementById("message");

function unlock() {

    const value = document.getElementById("password").value;

    if (value === PASSCODE) {

        lockScreen.style.display = "none";
        loading.style.display = "flex";

        setTimeout(() => {

            loading.style.display = "none";
            main.style.display = "block";

            music.play().catch(() => {});

            typeLetter();

        }, 2500);

    } else {

        wrong.style.display = "block";

        setTimeout(() => {
            wrong.style.display = "none";
        }, 2000);

    }
}


// ===============================
// MAAPFINAMA MESSAGE
// ===============================

let text = `❤️ I'm Sorry, Maharani Sahiba (Princess) ❤️

Yaha tumhara maafinaama aayega...

🥺❤️`;


let i = 0;

function typeLetter() {

    message.innerHTML = "";
    i = 0;

    function typing() {

        if (i < text.length) {

            message.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 18);

        }

    }

    typing();
}


// ===============================
// MUSIC PLAY / PAUSE
// ===============================

function toggleMusic() {

    if (music.paused) {

        music.play().catch(() => {});

    } else {

        music.pause();

    }

}