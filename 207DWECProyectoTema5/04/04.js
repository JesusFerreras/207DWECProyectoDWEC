let audio = document.getElementById("audio");

document.getElementById("atras").addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
});

document.getElementById("reproducir").addEventListener("click", () => {
    audio.play();
});

document.getElementById("pausar").addEventListener("click", () => {
    audio.pause();
});

document.getElementById("parar").addEventListener("click", () => {
    audio.currentTime = 0;
    audio.pause();
});

document.getElementById("adelante").addEventListener("click", () => {
    audio.currentTime = audio.duration;
});

