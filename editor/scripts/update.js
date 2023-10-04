const fs = require("fs");
const projectJson = require("../projects.json");

// these vars will be passed from html form
const editProjId = 22;
const newProjTitle = "My Project 6";
const newProjDescription = "This is my project 6";
////////////////////////////////////////////////////

const projects = projectJson;
const projectIndex = projects.findIndex(
  (project) => project.projId === editProjId
);

if (projectIndex === -1) {
  console.error("Project not found");
  return;
} else {
  projects.splice(projectIndex, 1, {
    projId: editProjId,
    projTitle: newProjTitle,
    projDescription: newProjDescription,
    examples: projects[projectIndex].examples,
  });

  fs.writeFile("./projects.json", JSON.stringify(projects), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
