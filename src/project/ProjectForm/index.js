import SubmitButton from "../../form/SubmitButton";
import Input from "../../form/Input";
import Select from "../../form/select";
import { useEffect, useState } from "react";
import { Form } from "./style.js";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <Form onSubmit={submit}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o Nome do Projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />

      <Input
        type="number"
        text="orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </Form>
  );
}

export default ProjectForm;
