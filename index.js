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
    const currentDate = new Date();
    const milliseconds = currentDate.getMilliseconds(); // Get milliseconds
    document.querySelector('[data-testid="currentUTCTime"]').textContent = milliseconds.toString().padStart(3, '0'); // Update the displayed milliseconds
}

// Initial update
updateCurrentLocalTime();

// Update the current milliseconds every second
setInterval(updateCurrentLocalTime, 1000);
