const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

const myTime = function(){
  const now = Date.now();
  document.querySelector('[data-testid="currentUTCTime"]').innerHTML = now;
};

setInterval(myTime,1000);

day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});