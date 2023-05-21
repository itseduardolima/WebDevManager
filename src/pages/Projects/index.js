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
          }),
      100
    );
  }, []);

  return (
    <div>
      <Navbar />
      <div className="project_container">
        <div className="title_container">
          <h1>Meus Projetos</h1>
          <LinkButton to="/newproject" text="Criar projeto" />
        </div>
        {message && <Message type="success" msg={message} />}
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <div>
                <ProjectCard
              
                  name={project.name}
                  
                
                  
                />
              </div>
            ))}
        </Container>
      </div>
    </div>
  );
}

export default Projects;
