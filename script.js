// script.js
document.getElementById('tempUp').addEventListener('click', function() {
    let temp = parseInt(document.getElementById('temperatureValue').textContent, 10);
    document.getElementById('temperatureValue').textContent = ++temp;
});

document.getElementById('tempDown').addEventListener('click', function() {
    let temp = parseInt(document.getElementById('temperatureValue').textContent, 10);
    document.getElementById('temperatureValue').textContent = --temp;
});

// Simulating adaptive display changes
setInterval(function() {
    let display = document.getElementById('adaptiveDisplay');
    if(display.textContent.includes("Clear Highway")) {
        display.textContent = "Navigation: Heavy Traffic - Slow Down!";
    } else {
        display.textContent = "Navigation: Clear Highway - Enjoy the Ride!";
    }
}, 5000);
