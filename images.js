const grappleItOutImages= 
[
    "images/projects/grappleitout/grappleitout.jpg",
    "images/projects/grappleitout/GrappleItOut01.png",
    "images/projects/grappleitout/GrappleItOut02.png",
    "images/projects/grappleitout/GrappleItOut03.png",
    "images/projects/grappleitout/GrappleItOut04.png",
    "images/projects/grappleitout/GrappleItOut05.png"
    ];

window.onload = function()
{
    cycleImage(grappleItOutImages, 0);
}

function cycleImage(images)
{
    let currentImageIndex = 0;

    function updateImage()
    {
        ++currentImageIndex;

        if(currentImageIndex >= images.length)
            currentImageIndex = 0;

        image = document.getElementById("GrappleItOutImage");

        image.src=images[currentImageIndex];

        setTimeout(updateImage, 3000);
    }
    
    updateImage();
}