import { useEffect, useState } from "react";
import Project from "../components/Project";
import "./Projects.css";

function Projects() {
  const [projectData, setProjectData] = useState();

  //Load in the project data on initial mount
  useEffect(() => {
    const getData = async () => {
      const projectJSON = await fetch("./data/projects.json");
      setProjectData(await projectJSON.json());
    };
    getData();
  }, []);

  //Show loading while pulling in the project data
  if (projectData == null) {
    return (
      <>
        <h4>Loading...</h4>
      </>
    );
  }

  return (
    <>
      <section className="project-section-title">
        {projectData.section.title}
      </section>
      <div className="projects">
        {/* Loop through the data and emit all the projects */}
        {projectData.section.project.map((projectDetails, index) => (
          <div className="project-container" key={crypto.randomUUID()}>
            <Project
              name={projectDetails.title}
              links={projectDetails.link}
              description={projectDetails.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Projects;
