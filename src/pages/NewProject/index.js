import {useNavigate} from 'react-router-dom'

import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import "./style.css";
import ProjectForm from "../../project/ProjectForm";

function NewProject() {

  const navigate = useNavigate()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        navigate("/projects", { state: { message: "Projeto criado com sucesso!" }});
      });
  }
  return (
    <div>
      <Navbar />
      <div className="newproject_container">
        <h1 className=" font-bold  text-gray-900 sm:text-3xl">
          Criar Projeto
        </h1>
        <p>Crie seu projeto para depois adicionar seus serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      </div>
      <Footer />
    </div>
  );
}

export default NewProject;
