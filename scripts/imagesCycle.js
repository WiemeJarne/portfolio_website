window.addEventListener("DOMContentLoaded", (event) => {
    fetch('projectsImagesPaths.json')
    .then(response => response.json())  // Parse the JSON response
    .then(data => 
    {
        data.forEach(project => 
        {
            cycleImage(project.images, `"${project.folderName}Image"`);
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
            ++currentImageIndex;

            if(currentImageIndex >= images.length)
                currentImageIndex = 0;   

                image = document.getElementById(elementId);
        console.log(elementId);
        console.log(image);         

            if(image != null)
                image.src=images[currentImageIndex];

            setTimeout(updateImage, 3000);
        }
    
        updateImage();
    }
});