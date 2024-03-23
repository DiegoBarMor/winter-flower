function toggleDecoration(event){
  deco_active = !deco_active;
  if (deco_active) {
    // set initial coordinates to the adjusted position of the touch event
    var rect = document.getElementById("butterfly").getBoundingClientRect();
    var x = event.clientX - rect.width / 2;
    var y = event.clientY - rect.height / 2;

    // clamp coordinates to be inside the screen
    x = Math.max(0, Math.min(x, window.innerWidth - rect.width - 1));
    y = Math.max(0, Math.min(y, window.innerHeight - rect.height - 1));
    startDecoration(x, y);
  }
  else {
    stopDecoration();
  }
}

function startDecoration(x,y) {
  document.getElementById("butterfly").style.left = x + "px";
  document.getElementById("butterfly").style.top = y + "px";
  document.getElementById("butterfly").style.visibility = "visible";

  setTimeout(setRandomDisplacements, deco_change_wait_init);
  updatePos();
}

function stopDecoration() {
  document.getElementById("butterfly").style.visibility = "hidden";

  // clear old timeouts
  clearTimeout(timeout_updatePos);
  clearTimeout(timeout_setRandomDisplacements);

  // reset deco variables
  deco_firstCycle = true;
  deco_dx = 0; //
  deco_dy = 0; //
  deco_change_wait = deco_change_wait_init;
}

function updatePos(){
  var rect = document.getElementById("butterfly").getBoundingClientRect();
  if (rect.left < 0 || rect.right >= window.innerWidth) { deco_dx = -deco_dx; }
  if (rect.top < 0 || rect.bottom >= window.innerHeight) { deco_dy = -deco_dy; }

  var new_left = rect.left + deco_dx;
  var new_top = rect.top + deco_dy;

  document.getElementById("butterfly").style.left = new_left + "px";
  document.getElementById("butterfly").style.top = new_top + "px";
  document.getElementById("butterfly").style.transform = deco_dx < 0 ? "scaleX(-1)" : "";

  timeout_updatePos = setTimeout(updatePos, deco_dt);
}

function setRandomDisplacements(){
  var r_dx = Math.random() * 2 - 1; //
  var r_dy = Math.random() * 2 - 1; //
  var r_wait = Math.random(); //
  var r_move = Math.random(); //

  // stationary mode only avaible after the first cycle
  if (r_move > deco_chance_stationary || deco_firstCycle) {
    deco_dx = deco_dx_max * r_dx;
    deco_dy = deco_dy_max * r_dy;
  }
  else {
    deco_dx = 0;
    deco_dy = 0;
  }

  deco_firstCycle = false;
  deco_change_wait = deco_change_wait_max * r_wait;
  timeout_setRandomDisplacements = setTimeout(setRandomDisplacements, deco_change_wait);
}

stopDecoration();
document.addEventListener("click", toggleDecoration);
