import "./Project.css";

function Project({ name, url, description, ...props }) {
  return (
    <div className="project-outline">
      <section className="project-container">
        <section className="project-name">{name}</section>
        <section className="project-description">{description}</section>
        <section className="project-link">
          <a href={url} target="_blank">
            GitHub
          </a>
        </section>
      </section>
    </div>
  );
}
export default Project;
