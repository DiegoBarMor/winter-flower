function showTime(){
  var timeDiff = timeEnd - Date.now();
  var display;

  if (timeDiff > 0) {
    var days = Math.floor(timeDiff / oneDay);
    var h = Math.floor((timeDiff % oneDay) / oneHour);
    var m = Math.floor((timeDiff % oneHour) / oneMinute);
    var s = Math.floor((timeDiff % oneMinute) / oneSecond);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    display = days + " days " + h + ":" + m + ":" + s;
    change_image(flowers[test]);
  }
  else {
    display = "";
    change_image("winter-flower.png");
  }

  document.getElementById("CountdownDisplay").innerText = display;
  document.getElementById("CountdownDisplay").textContent = display;

  setTimeout(showTime, 1000);
}

function change_image(name_img){
  document.getElementById("mainBody").style.backgroundImage="url(flowers/" + name_img + ")";
}
function update_test(){
  test += 1;
  document.getElementById("test").innerText = test + " : " + flowers[test];
}

showTime();
