window.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.playVideoOnImageHover');

    // Loop through each container and add hover functionality
    containers.forEach(container => {
        const video = container.querySelector('.hover-video');

        if(video == null)
            return;
        console.log("added mouse events");
        container.addEventListener('mouseenter', function() {
            video.play(); // Start video on hover
        });

        container.addEventListener('mouseleave', function() {
            video.pause(); // Pause video when not hovering
            video.currentTime = 0; // Reset video to the start
        });
    });
});