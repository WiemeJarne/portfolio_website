const grappleItOutImages= 
[
    "images/projects/grappleitout/GrappleItOut.png",
    "images/projects/grappleitout/GrappleItOut01.png",
    "images/projects/grappleitout/GrappleItOut02.png",
    "images/projects/grappleitout/GrappleItOut03.png",
    "images/projects/grappleitout/GrappleItOut04.png",
    "images/projects/grappleitout/GrappleItOut05.png"
];

const VRSHoppingImages=
[
    "images/projects/VRSHopping/VRShopping01.png",
    "images/projects/VRSHopping/VRShopping02.png",
    "images/projects/VRSHopping/VRShopping03.png",
    "images/projects/VRSHopping/VRShopping04.png",
    "images/projects/VRSHopping/VRShopping05.png",
    "images/projects/VRSHopping/VRShopping06.png",
    "images/projects/VRSHopping/VRShopping07.png",
    "images/projects/VRSHopping/VRShopping08.png",
    "images/projects/VRSHopping/VRShopping09.png",
    "images/projects/VRSHopping/VRShopping10.png",
    "images/projects/VRSHopping/VRShopping11.png"
];

window.onload = function()
{
    cycleImage(grappleItOutImages, "GrappleItOutImage");
    cycleImage(VRSHoppingImages, "VRShoppingImage");
}

function cycleImage(images, elementId)
{
    let currentImageIndex = 0;

    function updateImage()
    {
        ++currentImageIndex;

        if(currentImageIndex >= images.length)
            currentImageIndex = 0;

        image = document.getElementById(elementId);

        image.src=images[currentImageIndex];

        setTimeout(updateImage, 3000);
    }
    
    updateImage();
}