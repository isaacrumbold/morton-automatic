const fs = require("fs");
const projectJson = require("../projects.json");

// these vars will be passed from html form
const projId = 15;
const exmpId = 2;
////////////////////////////////////////////////

const projects = projectJson;
const projectIndex = projects.findIndex((project) => project.projId === projId);

if (projectIndex === -1) {
  console.error("Project not found");
  return;
} else {
  projects.splice(projectIndex, 1);

  fs.writeFile("./projects.json", JSON.stringify(projects), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
