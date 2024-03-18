function showTime(){
  var timeDiff = timeEnd - Date.now();
  var date = new Date(timeDiff);
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  var days = Math.floor(timeDiff / oneDay);
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = days + " days " + h + ":" + m + ":" + s;
  document.getElementById("CountdownDisplay").innerText = time;
  document.getElementById("CountdownDisplay").textContent = time;

  if (timeDiff > 0) { change_image(flowers[40 - days]); }
  else { change_image("winter-flower.png"); }

  setTimeout(showTime, 1000);

}

function change_image(name_img){
  document.getElementById("a").style.backgroundImage="url(flowers/" + name_img + ")";
}

showTime();
