function myFunction() {
    var x = document.getElementById("show");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  const start = document.querySelector("#start");
  start.addEventListener("click", startTimer);
  
  
  
  function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;
  
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }
  
  window.onload = document.querySelector("#start").addEventListener("click",function () {
      var TFMinutes = 60 * 25,
          display = document.querySelector('#time');
      startTimer(TFMinutes, display);
  });
  
  let reset = document.querySelector("#reset").addEventListener("click",function Reset(){
      location.reload(); 
      }
  );
  