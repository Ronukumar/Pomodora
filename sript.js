let seconds = 1500;
let defaultTime = 1500;
let timer;

function showTime() {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("time").innerText =
        min + ":" + (sec < 10 ? "0" + sec : sec);
}

function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            showTime();
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

function Pomodora() {
    clearInterval(timer);
    seconds = 1500;
    defaultTime = 1500;
    showTime();
}

function shortBreak() {
    clearInterval(timer);
    seconds = 300;
    defaultTime = 300;
    showTime();
}

function LongBreak() {
    clearInterval(timer);
    seconds = 900;
    defaultTime = 900;
    showTime();
}

function restartTimer() {
    clearInterval(timer);
    seconds = defaultTime;
    showTime();
}

document.getElementById("start").addEventListener("click", startTimer);

showTime();