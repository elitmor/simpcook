const deadline = '2022-09-01';

const getTimeRemaining = endtime => {
  let days, hours, minutes, seconds;
  const total = Date.parse(endtime) - Date.parse(new Date());

  if (total <= 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    days = Math.floor(total / (1000 * 60 * 60 * 24));
    seconds = Math.floor((total / 1000) % 60);
    minutes = Math.floor((total / 1000 / 60) % 60);
    hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  }

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const getZero = num => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};

const setClock = (selector, endtime) => {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
};

setClock('.timer', deadline);
