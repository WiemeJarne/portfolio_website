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

        function updateImage()
        {
            const image = document.getElementById(elementId);
            console.log(elementId);
            console.log(image);         

            if(image != null)
                image.src=images[currentImageIndex];

            currentImageIndex = (currentImageIndex + 1) % images.length;

            setTimeout(updateImage, 3000);
        }
    
        updateImage();
    }
});