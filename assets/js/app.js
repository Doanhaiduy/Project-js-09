let list = document.querySelectorAll(".btn");
let currentAudio;

list.forEach((item) => {
    item.addEventListener("click", () => {
        const audio = item.querySelector("audio");
        if (currentAudio) {
            currentAudio.pause();
        }
        if (audio.paused) {
            audio.play();
            currentAudio = audio;
        } else {
            audio.pause();
            currentAudio = null;
        }
    });
});
