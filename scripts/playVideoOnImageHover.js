 console.log("test");
 const containers = document.getElementsByClassName("playVideoOnImageHover");
console.log(containers);

if(document.readyState !== 'loading')
{
    console.log("executing if");
    document.addEventListener('DOMContentLoaded', function () 
    {
        addEventListeners();
    });
}
else
{
     console.log("executing else");
    addEventListeners();
}

function addEventListeners() {
    console.log("containers");
    console.log(containers);
    // Loop through each container and add hover functionality
    Array.from(containers).forEach(function (container) {
        const video = container.querySelector('.hover-video');

        if(video == null)
            return;

        container.addEventListener('mouseenter', function() {
            video.play(); // Start video on hover
        });

        container.addEventListener('mouseleave', function() {
            video.pause(); // Pause video when not hovering
            video.currentTime = 0; // Reset video to the start
        });
    });
}