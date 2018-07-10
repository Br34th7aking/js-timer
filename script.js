const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = 15;
let seconds = 0;

minutesDisplay.innerHTML = minutes;
secondsDisplay.innerHTML = '0' + seconds;

const counter = setInterval(() => {
  // count down to 0 minutes and 0 seconds.
  if (seconds === 0 && minutes !== 0) {
    seconds = 60;
    minutes--;
  }
  if (seconds > 0) {
    seconds--;
  }
  if (seconds >= 10) secondsDisplay.innerHTML = seconds;
  else secondsDisplay.innerHTML = '0' + seconds;
  if (minutes >= 10) minutesDisplay.innerHTML = minutes;
  else minutesDisplay.innerHTML = '0' + minutes;
}, 1000);

if (seconds === 0 && minutes === 0) {
  clearInterval(counter);
}
