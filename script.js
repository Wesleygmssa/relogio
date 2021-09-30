let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s"); //poneiro de segundos
let mElement = document.querySelector(".p_m"); // ponteiros minutos
let hElement = document.querySelector(".p_h"); // ponteiro de horas

function updateClock() {
  //pegando datahoras e minutos
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  //relogio digital
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;

  //relogio analógico
  let sDeg = (360 / 60) * second - 90;
  let mDeg = (360 / 60) * minute - 90;
  let hDeg = (360 / 12) * hour - 90;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

//funcção para ajustar
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();
