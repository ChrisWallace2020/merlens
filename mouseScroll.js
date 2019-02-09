//Determines the size of the area where scrolling will occur when the mouse is inside
var scrollZone = 100;

//Initial Values
var lowerThreshold = window.innerHeight - scrollZone;
var speed = 0;
var direction = 0;

//Recalibrate the direction and speed of the scroll
onmousemove = function (event) {
  if (event.clientY <= scrollZone) {
    speed = (scrollZone - event.clientY) / 10;
    direction = -1;
  } else if (event.clientY >= lowerThreshold) {
    speed = (event.clientY - window.innerHeight + scrollZone) / 10;
    direction = 1;
  } else {
    speed = 0;
  }
}

//Trigger the scroll
setInterval(function() {
  window.scrollBy(0, speed * direction);
}, 20);

//Stop scrolling when the mouse leaves the window
document.addEventListener("mouseleave", function () {
  decelerate();
});

//Smoothly stop scrolling
function decelerate() {
  var decelerate = setInterval(function () {
    if (speed > 0.5) {
      speed = speed - 0.5;
      console.log("slowing down");
    }
    else if (speed > 0) {
      speed = 0;
      clearTimeout(decelerate);
    }
  }, 20);
}