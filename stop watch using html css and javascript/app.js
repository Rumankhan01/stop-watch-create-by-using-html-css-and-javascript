let stopwatchHours = 0,
    stopwatchMinutes = 0,
    stopwatchSeconds = 0,
    stopwatchRunning = false,
    stopwatchInterval;

const stopwatch = () => {

    stopwatchSeconds++;

    if (stopwatchSeconds === 60) {
        stopwatchMinutes++;
        stopwatchSeconds = 0;
    }

    if (stopwatchMinutes === 60) {
        stopwatchHours++;
        stopwatchMinutes = 0;
    }

    document.getElementById("hour").innerHTML = stopwatchHours
    document.getElementById("mint").innerHTML = stopwatchMinutes
    document.getElementById("sec").innerHTML = stopwatchSeconds
};

const startStopwatch = () => {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(stopwatch, 1000);
        stopwatchRunning = true;
    }
};

const stopStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
};

const resetStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;
    stopwatchRunning = false;

    document.getElementById("hour").innerHTML = 00
    document.getElementById("mint").innerHTML = 00
    document.getElementById("sec").innerHTML = 00
};

const btnElem1 = document.querySelector("#startBtn");
const btnElem2 = document.querySelector("#ResetBtn");
const btnElem3 = document.querySelector("#stopBtn");

btnElem1.addEventListener('click', function () {
    startStopwatch();
})

btnElem2.addEventListener('click', function () {
    resetStopwatch();
})

btnElem3.addEventListener('click', function () {
    stopStopwatch();
})

