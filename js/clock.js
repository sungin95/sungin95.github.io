const clockTitle = document.querySelector("#clock");

const countDownTimer = function (_class, date) {
  const D_day = new Date(date); //지정 날짜를 D_day에 대입
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  function showRemaining() {
    const now = new Date(); //현재 시간
    const showDate = now - D_day ; //
    const days = (Math.floor(showDate / _day));
    const hours = String(Math.floor((showDate % _day) / _hour)).padStart(2,"0");
    const minutes = String(Math.floor((showDate % _hour) / _minute)).padStart(2,"0");
    const seconds = String(Math.floor((showDate % _minute) / _second)).padStart(2,"0");
    _class.textContent = days + "d " + hours + "h ";
    _class.textContent += minutes + "m " + seconds + "s";
  }
  setInterval(showRemaining, 1000); //1초에 한번 갱신
};
countDownTimer(clockTitle, "02/20/2022");

const clock = document.querySelector("#real_clock");

function time(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `현재 시간:${hour}:${minutes}:${seconds}`;
}
time();
setInterval(time,1000);
//참고 파일: https://goddaehee.tistory.com/229