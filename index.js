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

// Function to update the current local time in Nigeria (WAT time zone)
function updateCurrentLocalTime() {
    const currentDate = new Date();
    const options = { timeZone: 'Africa/Lagos' }; // Nigeria's time zone
    const localTime = currentDate.toLocaleTimeString('en-US', options);
    const milliseconds = currentDate.getMilliseconds(); // Get milliseconds
    const formattedTime = `${localTime}.${milliseconds.toString().padStart(3, '0')}`; // Format the time with milliseconds
    document.querySelector('[data-testid="currentUTCTime"]').textContent = formattedTime; // Update the displayed time
}

// Initial update
updateCurrentLocalTime();

// Update the current local time every millisecond (if you want to display milliseconds)
setInterval(updateCurrentLocalTime, 1);


// Initial update
updateCurrentLocalTime();

// Update the current local time every second
setInterval(updateCurrentLocalTime, 1000);
