
function updateTime() {
    const now = new Date();
    const hours = now.getHours() > 12 ? (now.getHours() - 12).toString().padStart(2, '0') : now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
    document.getElementById("ampm").textContent = ampm;
}

setInterval(updateTime, 1000); // Update time every second
updateTime(); // Initial call to set the time
