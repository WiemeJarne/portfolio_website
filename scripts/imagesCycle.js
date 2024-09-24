window.addEventListener('DOMContentLoaded', function() {
    fetch('projectsImagesPaths.json')
    .then(response => response.json())  // Parse the JSON response
    .then(data => 
    {
        data.forEach(project => 
        {
            cycleImage(project.images, `${project.folderName}Image`);
        });
    })
    .catch(error => 
    {
        console.error('Error loading JSON:', error);
    });

    function cycleImage(images, elementId)
    {
        let currentImageIndex = 0;
        const image = document.getElementById(elementId);

        function updateImage()
        {
            if(image != null)
                image.src=images[currentImageIndex];

            currentImageIndex = (currentImageIndex + 1) % images.length;

            setTimeout(updateImage, 3000);
        }
    
        updateImage();
    }


    //add event listeners to all the video elements
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