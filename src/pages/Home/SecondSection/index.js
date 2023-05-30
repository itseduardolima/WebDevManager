import "./style.css";

function SecontSection() {
  return (
    <section className="second_section">
      <div className="second_content">
        <h1>Recursos Principais</h1>
      </div>
      <div className="grid">
        <div className="home_card">
          <div className="contend_card">
            <p>
              Gestão de infraestrutura para controle de servidores, ambientes de
              desenvolvimento e bancos de dados.
            </p>
          </div>
        </div>
        <div className="home_card">
          <div className="contend_card">
            <p>
              Gerenciamento de design com criação de protótipos,
              compartilhamento de feedback e iterações
            </p>
          </div>
        </div>
        <div className="home_card">
          <div className="contend_card">
            <p>
              Rastreamento e organização das tarefas de desenvolvimento,
              incluindo controle de versão e integração contínua.
            </p>
          </div>
        </div>
        <div className="home_card">
          <div className="contend_card">
            <p>
              Planejamento de projetos com definição de metas, prazos e alocação
              de recursos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecontSection;
