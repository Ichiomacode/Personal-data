// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfTheWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfTheWeek;
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const currentUTCTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}

// Call the functions to update day of the week and UTC time when the page loads
window.addEventListener('load', () => {
    updateDayOfTheWeek();
    updateUTCTime();
});
