in projects.json is the data for all the projects.
each project has a folderName attribute:
make sure the folderName has NO SPACES. 
This is the name of the folder where the images are in (this folder should be in the image folder) and should also be the name of the video

to test the website go to cmd inside the folder which contains index.html (so this one) and use the command: py -m http.server 8000
then type in your broweser: http://localhost:8000/
This is because the project data is loaded in with a json file and it does not work when just opening the index.html file in a browser.