import home1 from "../../../image/home1.svg";
import LinkButton from "../../../layout/LinkButton";
import { Content, ContentContainer, HomeImg, Image, P, Title, Welcome } from "./style.js";

function FirstSection() {
  return (
    <Welcome>
      <ContentContainer>
        <Content>
          <Title>Bem vindo ao WebDevManager</Title>
          <P>
            O WebDevManager é uma plataforma online projetada para auxiliar
            equipes e profissionais a gerenciar eficientemente projetos
            relacionados ao desenvolvimento de sites e aplicativos web. Com
            recursos abrangentes para infraestrutura, desenvolvimento, design e
            planejamento, o WebDevManager oferece um ambiente colaborativo para
            garantir o sucesso de seus projetos.
          </P>
          <LinkButton to="/newproject" text="Criar projeto" />
        </Content>
      </ContentContainer>
      <HomeImg>
        <Image src={home1} alt="home"></Image>
      </HomeImg>
    </Welcome>
  );
}

export default FirstSection;
