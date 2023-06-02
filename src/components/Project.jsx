import "./Project.css";

function Project({ name, links, description, ...props }) {
  return (
    <div className="project-outline">
      <section className="project-name">{name}</section>
      <section className="project-description">{description}</section>
      {links.map((link) => (
        <section className="project-link" key={crypto.randomUUID()}>
          <a href={link.url} target="_blank">
            {link.name}
          </a>
        </section>
      ))}
    </div>
  );
}
export default Project;
