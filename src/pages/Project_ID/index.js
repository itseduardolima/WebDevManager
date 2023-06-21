import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Btn,
  Container,
  Details,
  DetailsContainer,
  Form,
  P,
  ProjectDetails,
  Services,
  Span,
  Subtitle,
  Title,
} from "./style";

import Navbar from "../../layout/Navbar";
import Loading from "../../layout/Loading";
import ProjectForm from "../../project/ProjectForm";
import Message from "../../layout/Message";
import ServiceForm from "../../service/ServiceForm";
import ServiceCard from "../../service/ServiceCard";
import Footer from "../../layout/Footer";

function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch(`http://localhost:5000/projects/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data);
            setServices(data.services);
          }),
      1000
    );
  }, [id]);

  function editPost(project) {
    setMessage("");
    // budget validation

    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);
        setMessage("Projeto atualizado!");
        setType("success");
      });
  }

  function createService(project) {
    setMessage("");
    // last service
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço!");
      setType("error");
      project.services.pop();
      return false;
    }

    // add service cost to project cost total
    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services);
        setShowServiceForm(!showServiceForm);
        setMessage("Serviço adicionado!");
        setType("success");
      });
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso!");
      });
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <div>
      <Navbar />
      <Container>
        {project.name ? (
          <ProjectDetails>
            <Details>
              {message && <Message type={type} msg={message} />}
              <DetailsContainer>
                <Title>{project.name} </Title>
                <Btn onClick={toggleProjectForm}>
                  {!showProjectForm ? "Editar projeto" : "Fechar"}
                </Btn>
                {!showProjectForm ? (
                  <Form>
                    <P>
                      <Span>Categoria:</Span> {project.category.name}
                    </P>
                    <P>
                      <Span>Total do orçamento:</Span> R${project.budget}
                    </P>
                    <P>
                      <Span>Total utilizado:</Span> R${project.cost}
                    </P>
                  </Form>
                ) : (
                  <Form>
                    <ProjectForm
                      handleSubmit={editPost}
                      btnText="Concluir Edição"
                      projectData={project}
                    />
                  </Form>
                )}
              </DetailsContainer>
              <DetailsContainer>
                <Subtitle>Adicione um serviço:</Subtitle>
                <Btn onClick={toggleServiceForm}>
                  {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
                </Btn>
                <Form>
                  {showServiceForm && (
                    <ServiceForm
                      handleSubmit={createService}
                      btnText="Adicionar Serviço"
                      projectData={project}
                    />
                  )}
                </Form>
              </DetailsContainer>
              <Subtitle>Serviços:</Subtitle>
            </Details>
            <Services>
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </Services>
          </ProjectDetails>
        ) : (
          <Loading />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Project;
