document.addEventListener("DOMContentLoaded", function () {

    // OPEN MESSAGE
    const openMessage = document.getElementById("openMessage");
    const messageCard = document.getElementById("messageCard");

    openMessage.addEventListener("click", function () {

        messageCard.classList.toggle("show");

        if (messageCard.classList.contains("show")) {

            openMessage.innerHTML =
                "<span>Close Message</span><span class='arrow'>↑</span>";

            setTimeout(function () {
                messageCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 300);

        } else {

            openMessage.innerHTML =
                "<span>Open My Message</span><span class='arrow'>→</span>";
        }
    });


    // AUDIO
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {

        if (audio.paused) {

            audio.play();

            playButton.textContent = "❚❚ Pause Message Audio";

        } else {

            audio.pause();

            playButton.textContent = "♪ Play Message Audio";
        }
    });


    // AUDIO FINISHED
    audio.addEventListener("ended", function () {
        playButton.textContent = "♪ Play Message Audio";
    });

});