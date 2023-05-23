import Project from "../components/Project";
import "./Projects.css";

function Projects() {
  const topProjectSectionTitle = "React Projects";

  const mySiteName = "DemonMage.com";
  const mySiteProjectURL = "https://github.com/DemonMage/demonmage.com";
  const mySiteDescription =
    "A simple about me and portfolio website. Created in JS with React.";

  return (
    <>
      <section className="project-section-title">
        {topProjectSectionTitle}
      </section>
      <div className="projects">
        <Project
          name={mySiteName}
          url={mySiteProjectURL}
          description={mySiteDescription}
        />
      </div>
    </>
  );
}
export default Projects;
