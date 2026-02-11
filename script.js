// Crear corazones animados
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000000);
}

let heartInterval = setInterval(createHeart, 300);



// Transiciones
const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

startBtn.addEventListener("click", () => {

    // 🔥 DETENER CORAZONES
    clearInterval(heartInterval);

    // 🔥 ELIMINAR LOS QUE ESTÁN EN PANTALLA
    document.querySelectorAll(".heart").forEach(heart => heart.remove());

    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("screen2").classList.add("hidden");
        document.getElementById("screen3").classList.remove("hidden");
    }, 6000);

});


    yesBtn.addEventListener("click", () => {
        document.getElementById("screen3").classList.add("hidden");
        document.getElementById("screen4").classList.remove("hidden");
    });

    noBtn.addEventListener("click", () => {
        document.getElementById("screen3").classList.add("hidden");
        document.getElementById("screen5").classList.remove("hidden");
    });

