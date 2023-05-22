import Project from "../components/Project";
//import "./Projects.CSS";

function Projects() {
  const mySiteName = "DemonMage.com";
  const mySiteProjectURL = "https://github.com/DemonMage/demonmage.com";
  const mySiteDescription =
    "A simple about me and portfolio website. Created in JS with React.";

  return (
    <div>
      <section className="project-section-title">React Projects</section>
      <div className="projects">
        <Project
          name={mySiteName}
          url={mySiteProjectURL}
          description={mySiteDescription}
        />
      </div>
    </div>
  );
}
export default Projects;
