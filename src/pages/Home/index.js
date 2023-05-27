import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import home from "../../image/home.svg";
import section1 from "../../image/section1.svg";
import section2 from "../../image/section2.svg";
import section3 from "../../image/section3.svg";
import section4 from "../../image/section4.svg";
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
        <img src={home} alt="costs" />
      </section>
      <section>
        <img className="teste" src={section1} alt="costs" />
      </section>
      <section>
        <img className="teste" src={section2} alt="costs" />
      </section>
      <section>
        <img className="teste" src={section3} alt="costs" />
      </section>
      <section>
        <img className="teste" src={section4} alt="costs" />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
