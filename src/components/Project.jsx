function Project({ name, url, description, ...props }) {
  return (
    <section className="project-container">
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
      <div className="project-link">
        <a href={url} target="_blank">
          GitHub
        </a>
      </div>
    </section>
  );
}
export default Project;
