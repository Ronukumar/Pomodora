let seconds = 1500; // 25 minutes
let timer;

function showTime() {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("time").innerText =
        min + ":" + (sec < 10 ? "0" + sec : sec);
}

function startTimer() {
    timer = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            showTime();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 1500;
    showTime();
}

showTime();
