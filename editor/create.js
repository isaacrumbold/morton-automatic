const fs = require("fs");
const projectJson = require("./projects.json");

const projects = projectJson;
// these vars will be passed from html form
const projectId =
  projects.length === 0 ? 1 : projects[projects.length - 1].projId + 1;
const projectTitle = "a new project";
const projectDescription = `Here would be a great place to describe the project.
It can be a very long description or it can be
short, simple, and to the point. I mean that is the
whole point of this part, that YOU can create it,
edit it and make it to your liking. So go ahead and
enjoy, dream, and create. The sky is the limit...`;

const examples = [
  {
    exmpId: Number(`${projectId}1`),
    exmpTitle: "Example 1",
    exmpDescription: "This is example 1",
    exmpPicsPath: "blah",
  },
];
///////////////////////////////////////////

projects.push({
  projId: projectId,
  projTitle: projectTitle,
  projDescription: projectDescription,
  examples: examples,
});

console.log(projects);

fs.writeFile("./projects.json", JSON.stringify(projects), (err) => {
  if (err) {
    console.error(err);
  }
});
