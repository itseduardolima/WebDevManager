import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar";
import "../../layout/Message/Message.module.css";
import "./style.css";
import Message from "../../layout/Message";
import LinkButton from "../../layout/LinkButton";
import ProjectCard from "../../project/ProjectCard";
import Container from "../../layout/Container";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch("http://localhost:5000/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data);
            setRemoveLoading(true);
          }),
      2000
    );
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
       setProjectMessage("Projeto removido com sucesso!");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="project_container">
        <div className="title_container">
          <h1 className=" font-bold  text-gray-900 sm:text-3xl">
            Meus Projetos
          </h1>
          <LinkButton to="/newproject" text="Criar projeto" />
        </div>
        {message && <Message type="success" msg={message} />}
        {projectMessage && <Message type="success" msg={projectMessage} />}
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <div>
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  budget={project.budget}
                  category={project.category.name}
                  key={project.id}
                  handleRemove={removeProject}
                />
              </div>
            ))}
          {!removeLoading && (
            <div className="loader_container">
              <span className="loader"></span>
            </div>
          )}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Projects;
