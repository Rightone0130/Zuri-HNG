function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    const currentDayOfTheWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;

    const currentUTCTime = currentDate.toUTCString();
    document.querySelector('[data-testid="currentUTCFullTime"]').textContent = currentUTCTime;
}

document.addEventListener("DOMContentLoaded", function () {
    updateDateTime(); 
    setInterval(updateDateTime, 500); 
});


function getCurrentTimeInMilliseconds() {
    return new Date().getTime();
}

function updateCurrentTime() {
    const currentTimeMs = getCurrentTimeInMilliseconds();
    const timeContainer = document.getElementById('timeContainer');
    timeContainer.innerText = `Current Time in Milliseconds: ${currentTimeMs}`;
}

setInterval(updateCurrentTime, 1000);

updateCurrentTime();
