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







































// let sec = 59;
// let min = 14;
// const minutes = document.querySelector('.minutes');
// const seconds = document.querySelector('.seconds');
//
// minutes.innerHTML = min;
// seconds.innerHTML = sec;
// const timer = setInterval(display, 1000);
//
// function display() {
//   if (sec > 0) {
//     sec--;
//   }
//     if (sec >= 10) seconds.innerHTML = sec;
//     else seconds.innerHTML = "0" + sec;
//
//   if (sec == 0 && min > 0) {
//     sec = 59;
//     min--;
//     if (min >= 10) minutes.innerHTML = min;
//     else minutes.innerHTML = "0" + min;
//   }
//   if (sec == 0 && min == 0) {
//     clearInterval(timer);
//   }
// }
