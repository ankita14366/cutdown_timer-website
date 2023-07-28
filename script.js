// Set the date to count down to (example: 1st January 2024 00:00:00)
const countDownDate = new Date("2024-04-09T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = "Countdown is over!";
    }
}, 1000);

// Helper function to add leading zeros to single-digit numbers
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
