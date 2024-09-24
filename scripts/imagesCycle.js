addEventListener("DOMContentLoaded", (event) => {
console.log("test");
    fetch('projectsImagesPaths.json')
    .then(response => response.json())  // Parse the JSON response
    .then(data => 
    {
        console.log(data);
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

        console.log(images);

        function updateImage()
        {
            ++currentImageIndex;

            if(currentImageIndex >= images.length)
                currentImageIndex = 0;
            
            let image = document.getElementById(elementId);
        
            if(image != null)
                image.src=images[currentImageIndex];

            setTimeout(updateImage, 3000);
        }
    
        updateImage();
    }
});