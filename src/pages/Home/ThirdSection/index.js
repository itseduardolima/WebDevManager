import thirdSection from "../../../image/thirdSection.svg";
import "./style.css";

function ThirdSection() {
  return (
    <section className="third_section">
      <div className="third_container">
        <div className="third_img">
          <img src={thirdSection} alt="home" />
        </div>
        <div className="container_contend">
          <div className="third_contend">
            <h1>Gerencie seus projetos</h1>
            <p>
              Gerencie seus projetos de desenvolvimento web de forma eficiente
              com o WebDevManager! Nossa plataforma centralizada oferece um
              conjunto abrangente de recursos para ajudá-lo a organizar,
              acompanhar e concluir seus projetos com facilidade. Desde a gestão
              da infraestrutura e desenvolvimento até o design e planejamento, o
              WebDevManager fornece todas as ferramentas necessárias para levar
              seus projetos ao sucesso.
            </p>
          </div>
          <div className="third_contend">
            <h1>Adeus ao caos no gerenciamento de projetos</h1>
            <p>
              O WebDevManager é a solução que você precisa para simplificar suas
              tarefas diárias. Com recursos intuitivos e colaborativos, você
              pode coordenar equipes, controlar prazos, acompanhar o progresso e
              garantir a entrega de projetos de alta qualidade. Experimente o
              WebDevManager e experimente uma nova forma de gerenciar projetos
              de desenvolvimento web de maneira eficiente.
            </p>
          </div>
          <div className="third_contend">
            <h1>Lugar para centralizar todas as etapas do seu projeto</h1>
            <p>
              Com a opção de infraestrutura, você pode controlar seus servidores
              e recursos técnicos em um só lugar. No desenvolvimento, acompanhe
              as tarefas, controle versões e garanta um fluxo de trabalho suave.
              No design, gerencie elementos visuais, crie protótipos e promova
              uma experiência de usuário incrível. E, por fim, com a seção de
              planejamento, defina metas, acompanhe prazos e aloque recursos.
              Com o WebDevManager, você terá tudo o que precisa para impulsionar
              seus projetos de desenvolvimento web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
