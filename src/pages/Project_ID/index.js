import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


import Navbar from "../../layout/Navbar";
import Loading from "../../layout/Loading";
import "./style.css";
import ProjectForm from "../../project/ProjectForm";
import Message from "../../layout/Message";
import ServiceForm from "../../service/ServiceForm";
import ServiceCard from "../../service/ServiceCard";

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
      <div className="container">
        {project.name ? (
          <div className="project_details">
            <div className="container_details">
              {message && <Message type={type} msg={message} />}
              <div className="details_container">
                <h1 className=" font-bold  text-gray-900 sm:text-3xl">
                  {project.name}{" "}
                </h1>
                <button className="btn" onClick={toggleProjectForm}>
                  {!showProjectForm ? "Editar projeto" : "Fechar"}
                </button>
                {!showProjectForm ? (
                  <div className="form">
                    <p>
                      <span>Categoria:</span> {project.category.name}
                    </p>
                    <p>
                      <span>Total do orçamento:</span> R${project.budget}
                    </p>
                    <p>
                      <span>Total utilizado:</span> R${project.cost}
                    </p>
                  </div>
                ) : (
                  <div className="form">
                    <ProjectForm
                      handleSubmit={editPost}
                      btnText="Concluir Edição"
                      projectData={project}
                    />
                  </div>
                )}
              </div>
              <div className="service_form_container">
                <h2 className=" font-bold  text-gray-900 sm:text-3x1">
                  Adicione um serviço:
                </h2>
                <button className="btn" onClick={toggleServiceForm}>
                  {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
                </button>
                <div className="form">
                  {showServiceForm && (
                    <ServiceForm
                      handleSubmit={createService}
                      btnText="Adicionar Serviço"
                      projectData={project}
                    />
                  )}
                </div>
              </div>
              <h2 className=" font-bold  text-gray-900 sm:text-3x1">
                Serviços:
              </h2>
            </div>
            <div className="services">
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
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Project;
