const grappleItOutImages= 
[
    "images/projects/GrappleItOut/GrappleItOut.png",
    "images/projects/GrappleItOut/GrappleItOut01.png",
    "images/projects/GrappleItOut/GrappleItOut02.png",
    "images/projects/GrappleItOut/GrappleItOut03.png",
    "images/projects/GrappleItOut/GrappleItOut04.png",
    "images/projects/GrappleItOut/GrappleItOut05.png"
];

const VRSHoppingImages=
[
    "images/projects/VRShopping/VRShopping01.png",
    "images/projects/VRShopping/VRShopping02.png",
    "images/projects/VRShopping/VRShopping03.png",
    "images/projects/VRShopping/VRShopping04.png",
    "images/projects/VRShopping/VRShopping05.png",
    "images/projects/VRShopping/VRShopping06.png",
    "images/projects/VRShopping/VRShopping07.png",
    "images/projects/VRShopping/VRShopping08.png",
    "images/projects/VRShopping/VRShopping09.png",
    "images/projects/VRShopping/VRShopping10.png",
    "images/projects/VRShopping/VRShopping11.png"
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

const AIPathfindingImages=
[
    "images/projects/AIPathfinding/AIPathfinding01.png",
    "images/projects/AIPathfinding/AIPathfinding02.png",
    "images/projects/AIPathfinding/AIPathfinding03.png",
    "images/projects/AIPathfinding/AIPathfinding04.png",
    "images/projects/AIPathfinding/AIPathfinding05.png",
    "images/projects/AIPathfinding/AIPathfinding06.png",
    "images/projects/AIPathfinding/AIPathfinding07.png"
];

const CheapSharkAPI_Images=
[
    "images/projects/CheapSharkAPI/CheapSharkAPI01.png",
    "images/projects/CheapSharkAPI/CheapSharkAPI02.png",
    "images/projects/CheapSharkAPI/CheapSharkAPI03.png",
    "images/projects/CheapSharkAPI/CheapSharkAPI04.png"
];

const BurgerTimeImages=
[
    "images/projects/BurgerTime/BurgerTime01.png",
    "images/projects/BurgerTime/BurgerTime02.png",
    "images/projects/BurgerTime/BurgerTime03.png",
    "images/projects/BurgerTime/BurgerTime04.png",
    "images/projects/BurgerTime/BurgerTime05.png",
    "images/projects/BurgerTime/BurgerTime06.png"
];

const DualRasterizerImages=
[
    "images/projects/DualRasterizer/DualRasterizer01.png",
    "images/projects/DualRasterizer/DualRasterizer02.png",
    "images/projects/DualRasterizer/DualRasterizer03.png",
    "images/projects/DualRasterizer/DualRasterizer04.png",
    "images/projects/DualRasterizer/DualRasterizer05.png",
    "images/projects/DualRasterizer/DualRasterizer06.png",
    "images/projects/DualRasterizer/DualRasterizer07.png",
    "images/projects/DualRasterizer/DualRasterizer08.png"
];

const SoftwareRayTracerImages=
[
    "images/projects/SoftwareRayTracer/SoftwareRayTracer01.png",
    "images/projects/SoftwareRayTracer/SoftwareRayTracer02.png"
];

window.onload = function()
{
    cycleImage(grappleItOutImages, "GrappleItOutImage");
    cycleImage(VRSHoppingImages, "VRShoppingImage");
    cycleImage(TeaForTheQueenImages, "TeaForTheQueenImage");
    cycleImage(ZombieAIGameImages, "ZombieAIGameImage");
    cycleImage(FlowFieldPathfindingImages, "FlowFieldPathfindingImage");
    cycleImage(AISteeringBehaviorsImages, "AISteeringBehaviorsImage");
    cycleImage(AIPathfindingImages, "AIPathfindingImage");
    cycleImage(CheapSharkAPI_Images, "CheapSharkAPI_Image");
    cycleImage(BurgerTimeImages, "BurgerTimeImage");
    cycleImage(DualRasterizerImages, "DualRasterizerImage");
    cycleImage(SoftwareRayTracerImages, "SoftwareRayTracerImage");
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