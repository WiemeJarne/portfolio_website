const fs = require('fs');
const path = require('path');

// Path to the local JSON file
const jsonFilePath = path.join(__dirname, '../projects.json');

// Read the JSON file
let projectsData;
try {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
  projectsData = JSON.parse(jsonData);
} catch (err) {
  console.error('Error reading or parsing JSON:', err);
  return;
}

//loop over all projects and find the images
let projectsImagesFolderPath= [];
projectsData.projects.forEach(project =>
{
    const projectFolderPath = path.join(__dirname, '../images/projects', project.folderName);

  // Initialize an array to store image filenames for the current project
    let images = [];

  // Check if the project folder exists
    if (fs.existsSync(projectFolderPath)) {
    // Read the directory and filter for `.png` and .'jpg' files
        images = fs.readdirSync(projectFolderPath)
        .filter(file => file.endsWith('.png') || file.endsWith('.jpg'))
        .map(file => `images/projects/${project.folderName}/${file}`);
        ;
    } else {
        console.warn(`Directory not found: ${projectFolderPath}`);
    }

  // Add the project folder name and images names to the main array
    projectsImagesFolderPath.push({
        folderName: project.folderName,
        images: images
    });
});

// Path to the output JSON file
const outputJsonPath = path.join(__dirname, '../projectsImagesPaths.json');

// Write the projectsWithImages array to a new JSON file
try {
  fs.writeFileSync(outputJsonPath, JSON.stringify(projectsImagesFolderPath, null, 2), 'utf8');
  console.log('Successfully saved projects with images to', outputJsonPath);
} catch (err) {
  console.error('Error writing JSON file:', err);
}