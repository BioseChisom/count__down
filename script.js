//Display the countdown timer in an element
// Set the date we're counting down to
var countDownDate = new Date("march 14 2024 15:41:00").getTime();

// Update the count down every 1 seconds
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

  // Display the result in the element with id="countdown"
  document.getElementById("days").innerHTML = days + " <span class='small'>DAYS</span>";
  document.getElementById("hours").innerHTML = hours + " <span class='small'>HOURS</span>";
  document.getElementById("minutes").innerHTML = minutes + " <span class='small'>MINS</span>";
  document.getElementById("seconds").innerHTML = seconds + " <span class='small'>SECS</span>";

 // If the count down is finished, write some text 
if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);