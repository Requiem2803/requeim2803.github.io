const d = new Date();
const currentTime = d.getHours();

console.log(`The current hour of the day is ${currentTime}`);
const main = document.querySelector("main");

if (currentTime < 12) {
    main.innerHTML = "<h2>Good Morning!<h2>";
} else if (currentTime > 12 && currentTime < 18) {
    main.innerHTML = "<h2>Good Afternoon!<h2>";
} else {
    main.innerHTML = "<h2>Good Evening!<h2>";
}