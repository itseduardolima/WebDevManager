import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Container from "../../layout/Container";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import "./style.css";

function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);

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
           // setServices(data.services);
          }),
      0
    );
  }, [id]);

  return (
    <div>
      <Navbar />
      <Container customClass="min-height">
        <h1>{project.name}</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default Project;
