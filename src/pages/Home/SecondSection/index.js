import { ContendCard, ContendTitle, Grid, HomeCard, MainFeatures, P, Subtitle, Title } from "./style";


function SecontSection() {
  return (
    <MainFeatures>
      <ContendTitle>
        <Title>Recursos Principais</Title>
      </ContendTitle>
      <Grid>
        <HomeCard>
          <ContendCard>
            <Subtitle>Infraestrutura</Subtitle>
            <P>
              A opção de infraestrutura no WebDevManager permite que você
              gerencie todos os aspectos técnicos relacionados ao
              desenvolvimento web. Você pode controlar seus servidores,
              configurar ambientes de desenvolvimento, monitorar recursos e
              gerenciar bancos de dados de forma eficiente. Com ferramentas
              poderosas, você pode garantir que sua infraestrutura esteja
              configurada adequadamente para oferecer desempenho e segurança
              ideais para seus projetos.
            </P>
          </ContendCard>
        </HomeCard>
        <HomeCard>
          <ContendCard>
            <Subtitle>Desenvolvimento</Subtitle>
            <P>
              A seção de desenvolvimento no WebDevManager é projetada para
              ajudar a organizar e rastrear o progresso das tarefas relacionadas
              à codificação, programação e implementação de projetos web. Você
              pode gerenciar suas tarefas de desenvolvimento de forma eficiente,
              realizar controle de versão, automatizar integração contínua e
              utilizar ferramentas de depuração para agilizar o processo de
              desenvolvimento. Com recursos colaborativos, você pode trabalhar
              em equipe de forma eficaz e garantir a entrega de projetos de alta
              qualidade dentro dos prazos estabelecidos.
            </P>
          </ContendCard>
        </HomeCard>
        <HomeCard>
          <ContendCard>
            <Subtitle>Design</Subtitle>
            <P>
              A opção de design no WebDevManager oferece suporte para a gestão
              dos aspectos visuais e de usabilidade de seus projetos web. Você
              pode gerenciar elementos de design, criar protótipos interativos,
              compartilhar feedback e realizar iterações para aprimorar a
              experiência do usuário e a aparência visual do produto final. Com
              ferramentas intuitivas e recursos de colaboração, você pode
              colaborar com sua equipe e criar designs atraentes e eficazes para
              seus projetos.
            </P>
          </ContendCard>
        </HomeCard>
        <HomeCard>
          <ContendCard>
            <Subtitle>Planejamento</Subtitle>
            <P>
              A seção de planejamento no WebDevManager permite que você defina
              metas, prazos e recursos necessários para seus projetos de
              desenvolvimento web. Com recursos de criação de cronogramas,
              atribuição de tarefas e acompanhamento de progresso, você pode
              planejar de forma eficiente as etapas de seu projeto e garantir
              que ele esteja no caminho certo. Além disso, você pode gerenciar
              os recursos disponíveis, realizar ajustes conforme necessário e
              manter todos os membros da equipe informados sobre o andamento do
              projeto.
            </P>
          </ContendCard>
        </HomeCard>
      </Grid>
    </MainFeatures>
  );
}

export default SecontSection;
