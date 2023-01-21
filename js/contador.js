var deadline = new Date("Feb 7, 2023 23:59:59").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);

document.querySelector(".demo-days-p").innerHTML = days;
document.querySelector(".demo-hours-p").innerHTML = hours;
document.querySelector(".demo-minutes-p").innerHTML = minutes;
document.querySelector(".demo-seconds-p").innerHTML = seconds;

if (t < 0) {
    clearInterval(x);
    document.querySelector(".demo").innerHTML = "EXPIRED";
    }
}, 1000);