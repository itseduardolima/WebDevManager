import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import no_projects from "../../image/no_projects.svg";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import Message from "../../layout/Message";
import LinkButton from "../../layout/LinkButton";
import ProjectCard from "../../project/ProjectCard";
import Loading from "../../layout/Loading";

import "../../layout/Message/Message.module.css";
import "./style.css";



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
      1000
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
          <h1>
            Meus Projetos
          </h1>
          <LinkButton to="/newproject" text="Criar projeto" />
        </div>
        {message && <Message type="success" msg={message} />}
        {projectMessage && <Message type="success" msg={projectMessage} />}

        <div className="dashboard">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
        </div>

        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <div className="no_projects">
            <h1>Não há projetos cadastrados!</h1>
            <img className="img" src={no_projects} alt="projects" />
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;
