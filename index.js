function updateCurrentDayOfTheWeek() {
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const currentDate = new Date();
    const options = { weekday: 'long', timeZone: 'Africa/Lagos' }; // Nigeria's time zone
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
}

// Initial update
updateCurrentDayOfTheWeek();

// Update the current day of the week every 24 hours
setInterval(updateCurrentDayOfTheWeek, 86400000);

function updateCurrentLocalTime() {
    const utcTimeMilliseconds = Date.now(); // Get current UTC time in milliseconds
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTimeMilliseconds.toString();
}

// Initial update
updateCurrentLocalTime();

// Update the current UTC time in milliseconds every second
setInterval(updateCurrentLocalTime, 1000);


// Initial update
updateCurrentLocalTime();

// Update the current milliseconds every second
setInterval(updateCurrentLocalTime, 1000);
