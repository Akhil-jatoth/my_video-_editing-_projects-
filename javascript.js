const video = document.getElementById("myVideo");

// Stop vibration and video after 30 seconds
setTimeout(() => {
    // Stop vibration
    document.querySelectorAll(".vibrate").forEach(el => {
        el.classList.remove("vibrate");
    });

    // Pause video
    video.pause();
}, 30000); // 30000ms = 30 seconds
