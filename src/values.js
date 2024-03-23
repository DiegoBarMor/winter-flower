const flowers = [ // 41 flowers
  "IMG_20231231_112728.jpg", // 17/03
  "IMG_20231231_112743.jpg", // 18/03
  "IMG_20240210_160251.jpg", // 19/03
  "IMG_20240319_164407.jpg", // 20/03
  "IMG-20240229-WA0001.jpg", // 21/03
  "IMG-20240311-WA0094.jpg", // 22/03
  "IMG_20240303_124938.jpg", // 23/03
  "IMG_20240303_124950.jpg",
  "IMG_20240303_125005.jpg",
  "photo_2024-03-23_14-47-49.jpg",
  "photo_2024-03-23_14-47-36.jpg",
  "photo_2024-03-23_14-47-46.jpg",
  "IMG-20240218-WA0040.jpg",
  "IMG-20240225-WA0003.jpg",
  "IMG-20240306-WA0065.jpg",
  "IMG-20240315-WA0006.jpg",
  "IMG-20240315-WA0015.jpg",
  "IMG-20240315-WA0024.jpg",
  "IMG-20240315-WA0023.jpg",
  "IMG_20231230_115031.jpg",
  "IMG-20240317-WA0056.jpg",
  "IMG-20240317-WA0057.jpg",
  "IMG-20240317-WA0058.jpg",
  "IMG_20231227_151341.jpg",
  "IMG_20231230_114318.jpg",
  "IMG-20240317-WA0050.jpg",
  "IMG-20240307-WA0009.jpg",
  "IMG_20231230_115119.jpg",
  "IMG-20240118-WA0015.jpg",
  "IMG-20240317-WA0060.jpg",
  "IMG-20240224-WA0016.jpg",
  "IMG-20240317-WA0059.jpg",
  "IMG-20240303-WA0026.jpg",
  "IMG-20240317-WA0051.jpg",
  "A.jpg",
  "B.jpg",
  "C.jpg",
  "D.jpg",
  "E.jpg",
  "F.jpg",
  "winter-flower.png",
]
const timeEnd = 1714176300000; // arrival
const oneSecond = 1000; // milliseconds
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;

const deco_dt = 16.66; // milliseconds it takes to update the decoration's position
const deco_dx_max = 3.0; // max value for deco_dx
const deco_dy_max = 3.0; // max value for deco_dy
const deco_change_wait_max = 5000; // max value for deco_change_wait
const deco_change_wait_init = 2000; // value for deco_change_wait in the first timeOut
const deco_chance_stationary = 0.2; // probability that in a setRandomDisplacements call, deco_dx and deco_dy are set to 0

var deco_firstCycle = true; // whether it's the first time calling setRandomDisplacements
var deco_dx = 0; // rate of change on the X position
var deco_dy = 0; // rate of change on the Y position
var deco_change_wait = deco_change_wait_init; // milliseconds it takes to call setRandomDisplacements and change deco_dx and deco_dy
var deco_active = false; // whether the decoration is currently active

var timeout_updatePos;
var timeout_setRandomDisplacements;

var test = 40 - Math.floor((timeEnd - Date.now()) / oneDay);
