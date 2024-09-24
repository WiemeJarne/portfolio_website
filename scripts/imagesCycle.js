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