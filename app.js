const currentStatus = document.querySelectorAll(".bigtext");
const pastStatus = document.querySelectorAll(".status span");
const week = document.querySelector(".week");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const dayCopy = [
    { day: "5hrs", previous: "Yesterday - 7hrs" },
    { day: "1hr", previous: "Yesterday - 2hrs" },
    { day: "0hrs", previous: "Yesterday - 1hr" },
    { day: "1hr", previous: "Yesterday - 1hr" },
    { day: "1hr", previous: "Yesterday - 3hrs" },
    { day: "0hrs", previous: "Yesterday - 1hr" },
];
const weekCopy = [
    {
        week: "32hrs",
        previous: "Last Week - 36hrs",
    },
    {
        week: "10hrs",
        previous: "Last Week - 8hrs",
    },
    {
        week: "4hrs",
        previous: "Last Week - 7hrs",
    },
    {
        week: "4hrs",
        previous: "Last Week - 5hrs",
    },
    {
        week: "5hrs",
        previous: "Last Week - 10hrs",
    },
    {
        week: "2hrs",
        previous: "Last Week - 2hrs",
    },
];
const monthCopy = [
    {
        month: "103hrs",
        previous: "Last Month - 128hrs",
    },
    {
        month: "23hrs",
        previous: "Last Month - 29hrs",
    },
    {
        month: "13hrs",
        previous: "Last Month - 19hrs",
    },
    {
        month: "11hrs",
        previous: "Last Month - 18hrs",
    },
    {
        month: "21hrs",
        previous: "Last Month - 23hrs",
    },
    {
        month: "7hrs",
        previous: "Last Month - 11hrs",
    },
];

function weeklyStats() {
    for (let i = 0; i < weekCopy.length; i++) {
        currentStatus[i].textContent = weekCopy[i].week;
        pastStatus[i].textContent = weekCopy[i].previous;
    }
}

function monthStats() {
    for (let i = 0; i < monthCopy.length; i++) {
        currentStatus[i].textContent = monthCopy[i].month;
        pastStatus[i].textContent = monthCopy[i].previous;
    }
}
function dayStats() {
    for (let i = 0; i < monthCopy.length; i++) {
        currentStatus[i].textContent = dayCopy[i].day;
        pastStatus[i].textContent = dayCopy[i].previous;
    }
}

week.addEventListener("click", () => {
    weeklyStats();
});
month.addEventListener("click", () => {
    monthStats();
});
day.addEventListener("click", () => {
    dayStats();
});
