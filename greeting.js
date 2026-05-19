let hour = new Date().getHours();

if (hour < 6) {
    message = "It's midnight – go to sleep!";
} else if (hour < 12) {
    message = "Good Morning!";
} else if (hour < 17) {
    message = "Good Afternoon!";
} else {
    message = "Good Evening!";
}
document.write(message);