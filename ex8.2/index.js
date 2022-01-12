var seconds = 0;

function incrementSeconds() {
    seconds += 1;
    document.getElementById('seconds-counter').innerText = "You have been here for " + seconds + " seconds.";
}

setInterval(incrementSeconds, 1000);
