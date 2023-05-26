import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import savings from "../../image/savings.svg";
import "../../pages/Home/style.css";
import LinkButton from "../../layout/LinkButton";


function Home() {
  return (
    <div>
      <Navbar />
      <section className="home_container">
        <h1>
          Bem Vindo ao <span>Costs</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo</p>
        <LinkButton to="newproject" text="Criar Projeto" />
        <img src={savings} alt="costs" />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
