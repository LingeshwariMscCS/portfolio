const eye = document.querySelector(".eye");
const eyeball = document.querySelector(".eyeball");

eye.addEventListener("mousemove", (event) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
    const radius = eyeRect.width / 4; // Adjust this value for the eyeball movement sensitivity
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    eyeball.style.transform = `translate(${x}px, ${y}px)`;
});
