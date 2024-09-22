fetch('projects.json')
.then(response => response.json())  // Parse the JSON response
.then(data => 
        {
            const projectsContainer = document.getElementById("projectsSection");
            data.projects.forEach(project => 
            {
                projectsContainer.innerHTML += createProjectHTML(project);
            });
        })
.catch(error => 
        {
            console.error('Error loading JSON:', error);
        });

function createProjectHTML(project)
{
    //console.log(project.folderName);
    if (project.styleType === 1)
    {
        // Layout style 1 (original Fijit example)
        return `
                <div class="roundedCorners boxContainerItemsVertical projectContainer dropShadow">
                <h3><strong>${project.title}</strong></h3>
                <div class="playVideoOnImageHover">
                <img id="${project.folderName}Image" alt="${project.title} image" class="roundedCorners projectVisials" style="border-radius:25px">
                ${project.videoSrc ? `
                <video class="hover-video roundedCorners projectVisials" muted loop preload="metadata" style="border-radius:25px">
                <source src="${project.videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                ` : ""}
                </div>
                <div class="boxContainerItemsHorizontal transparentBackground">
                ${project.technologies.map(tech => `<img src="${tech.src}" alt="${tech.alt}" class="smallLogoImage">`).join("")}
                </div>
                <p>${project.description}</p>
                <div class="boxContainerItemsVertical transparentBackground">
                <span>Last update: ${project.lastUpdate}</span>
                ${project.codeLink ? `<a href="${project.codeLink}" target="_blank" class="projectCodeLink">View Code</a>` : ""}
                </div>
                </div>
        `;
    } 
    else if (project.styleType === 2)
    {
        // Layout style 2 (Train game example)
        return `
                <div class="roundedCorners boxContainerItemsVertical projectContainer dropShadow" style="padding:0%">
                <div class="playVideoOnImageHover">
                <img id="${project.folderName}Image" alt="${project.title} image" class="roundedCorners projectVisials">
                ${project.videoSrc ? `
                <video class="hover-video roundedCorners projectVisials" muted loop preload="metadata">
                <source src="${project.videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                ` : ""}
                </div>
                <div class="boxContainerItemsHorizontal transparentBackground">
                ${project.technologies.map(tech => `<img src="${tech.src}" alt="${tech.alt}" class="smallLogoImage">`).join("")}
                </div>
                <h3><strong>${project.title}</strong></h3>
                <div class="boxContainerItemsVertical transparentBackground" style="margin:2%">
                <p>${project.description}</p>
                <span>Last update: ${project.lastUpdate}</span>
                ${project.codeLink ? `<a href="${project.codeLink}" target="_blank" class="projectCodeLink">View Code</a>` : ""}
                </div>
                </div>
        `;
            }
        }