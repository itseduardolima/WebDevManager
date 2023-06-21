import {useNavigate} from 'react-router-dom'
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import ProjectForm from "../../project/ProjectForm";
import { Container, P, Title } from './style';

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
      <Container>
        <Title>
          Criar Projeto
        </Title>
        <P>Crie seu projeto para depois adicionar seus serviços</P>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      </Container>
      <Footer />
    </div>
  );
}

export default NewProject;
