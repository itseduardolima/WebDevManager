import home1 from "../../../image/home1.svg";
import LinkButton from "../../../layout/LinkButton";
import { Content, ContentContainer, HomeImg, Welcome } from "./style.js";

function FirstSection() {
  return (
    <Welcome>
      <ContentContainer>
        <Content>
          <h1>Bem vindo ao WebDevManager</h1>
          <p>
            O WebDevManager é uma plataforma online projetada para auxiliar
            equipes e profissionais a gerenciar eficientemente projetos
            relacionados ao desenvolvimento de sites e aplicativos web. Com
            recursos abrangentes para infraestrutura, desenvolvimento, design e
            planejamento, o WebDevManager oferece um ambiente colaborativo para
            garantir o sucesso de seus projetos.
          </p>
          <LinkButton to="/newproject" text="Criar projeto" />
        </Content>
      </ContentContainer>
      <HomeImg>
        <img className="image" src={home1} alt="home"></img>
      </HomeImg>
    </Welcome>
  );
}

export default FirstSection;
