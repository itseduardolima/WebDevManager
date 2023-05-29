import home1 from "../../../image/home1.svg";

import "./style.css";

function FirstSection() {
  return (
    <section className="first_section">
      <div className="content">
        <h1>Bem vindo ao WebSolutions</h1>
        <p>
          O seu destino confiável para serviços de desenvolvimento web
          excepcionais, comece a gerenciar os seus projetos agora mesmo.
        </p>
      </div>
      <div className="home_img">
        <img className="image" src={home1} alt="home"></img>
      </div>
    </section>
  );
}

export default FirstSection;
