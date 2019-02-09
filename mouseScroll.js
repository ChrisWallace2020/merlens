//Initialize mouseScroll.
mouseScroll();

/**
 * 
 * @param scrollUpZone
 * number of pixels below the top of the window where scrolling up starts.
 * Default: 100
 * 
 * @param scrollDownZone 
 * number of pixels above the bottom of the window where scrolling down starts.
 * Default: 100
 * 
 * @param refreshInterval
 * interval in milliseconds that will check the mouse's position and scroll.
 * the smaller the number, the smoother the scroll.
 * Default: 20 ms
 * 
 * @param scrollDist
 * a mulitplier that determines how much the scroll moves per refresh.
 * the higher the number, the faster the scroll.
 * Default: 0.10
 */
function mouseScroll(scrollUpZone = 100,
                    scrollDownZone = 100,
                    refreshInterval = 20,
                    scrollDist = 0.10) {

  var lowerThreshold = window.innerHeight - scrollDownZone;
  var speed = 0;
  var direction = 0;

  //Recalibrate the direction and speed of the scroll
  onmousemove = function (event) {
    if (event.clientY <= scrollUpZone) {
      speed = (scrollUpZone - event.clientY) * scrollDist;
      direction = -1;
    } else if (event.clientY >= lowerThreshold) {
      speed = (event.clientY - window.innerHeight + scrollDownZone) * scrollDist;
      direction = 1;
    } else {
      speed = 0;
    }
  }

  //Trigger the scroll
  setInterval(function () {
    window.scrollBy(0, speed * direction);
  }, refreshInterval);

  //Stop scrolling when the mouse leaves the window
  document.addEventListener("mouseleave", function () {
    decelerate();
  });

  //Smoothly stop scrolling
  function decelerate() {
    var decelerate = setInterval(function () {
      if (speed > 0.5) {
        speed = speed - 0.5;
      }
      else if (speed > 0) {
        speed = 0;
        clearTimeout(decelerate);
      }
    }, refreshInterval);
  }
}