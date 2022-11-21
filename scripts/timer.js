const hour = document.querySelector('.hour')
var timerSeconds = 0;
var timerMinutes = 0;

const timer = () => {

    if (timerSeconds == 60) {
        timerSeconds = 0;
        timerMinutes++;
    }
    
    return formatTimer(timerMinutes) + ":" + formatTimer(timerSeconds++);
}

console.log()

const formatTimer = (t) => {
    return t < 10 ? "0" + t : t;
}

const showTime = (current) => {
    hour.textContent = current;
}
