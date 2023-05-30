import home1 from "../../../image/home1.svg";

import "./style.css";

function FirstSection() {
  return (
    <section className="first_section">
      <div className="content_container">
        <div className="content">
          <h1>Bem vindo ao WebDevManager</h1>
          <p>
            O WebDevManager é uma plataforma online projetada para auxiliar
            equipes e profissionais a gerenciar eficientemente projetos
            relacionados ao desenvolvimento de sites e aplicativos web. Com
            recursos abrangentes para infraestrutura, desenvolvimento, design e
            planejamento, o WebDevManager oferece um ambiente colaborativo para
            garantir o sucesso de seus projetos.
          </p>
        </div>
      </div>
      <div className="home_img">
        <img className="image" src={home1} alt="home"></img>
      </div>
    </section>
  );
}

export default FirstSection;
