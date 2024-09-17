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

const TeaForTheQueenImages=
[
    "images/projects/TeaForTheQueen/TeaForTheQueen.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen01.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen02.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen03.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen04.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen05.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen06.png",
    "images/projects/TeaForTheQueen/TeaForTheQueen07.png",
];

const ZombieAIGameImages=
[
    "images/projects/ZombieAIGame/ZombieAIGame01.png",
    "images/projects/ZombieAIGame/ZombieAIGame02.png",
    "images/projects/ZombieAIGame/ZombieAIGame03.png"
];

const FlowFieldPathfindingImages=
[
    "images/projects/FlowFieldPathfinding/FlowFieldPathfinding01.png",
    "images/projects/FlowFieldPathfinding/FlowFieldPathfinding02.png",
    "images/projects/FlowFieldPathfinding/FlowFieldPathfinding03.png"
];

const AISteeringBehaviorsImages=
[
    "images/projects/AISteeringBehaviors/AISteeringBehaviors01.png",
    "images/projects/AISteeringBehaviors/AISteeringBehaviors02.png",
    "images/projects/AISteeringBehaviors/AISteeringBehaviors03.png",
    "images/projects/AISteeringBehaviors/AISteeringBehaviors04.png",
    "images/projects/AISteeringBehaviors/AISteeringBehaviors05.png"
];

window.onload = function()
{
    cycleImage(grappleItOutImages, "GrappleItOutImage");
    cycleImage(VRSHoppingImages, "VRShoppingImage");
    cycleImage(TeaForTheQueenImages, "TeaForTheQueenImage");
    cycleImage(ZombieAIGameImages, "ZombieAIGameImage");
    cycleImage(FlowFieldPathfindingImages, "FlowFieldPathfindingImage");
    cycleImage(AISteeringBehaviorsImages, "AISteeringBehaviorsImage");
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