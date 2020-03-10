/*------- COUNDOWN CLOCK ------- */

var countDownDate = new Date("Jul 30, 2019 00:00:00").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("ngay").innerHTML = days + " ngày";
    document.getElementById("gio").innerHTML = hours + " giờ";
    document.getElementById("phut").innerHTML = minutes + " phút";
    document.getElementById("giay").innerHTML = seconds + " giây";
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000)

/* ---------Menu _ bars icons -------- */

function myFunction(x) {
    x.classList.toggle("change");
}