function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    const currentDayOfTheWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;

    const currentUTCTime = currentDate.toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}

document.addEventListener("DOMContentLoaded", function () {
    updateDateTime(); 
    setInterval(updateDateTime, 500); 
});
