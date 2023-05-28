import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";

import section1 from "../../image/section1.svg";
import section2 from "../../image/section2.svg";
import section3 from "../../image/section3.svg";
import section4 from "../../image/section4.svg";
import "../../pages/Home/style.css";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="home_container">
        <img className="home_img" src={section1} alt="costs" />
      </section>
      <section>
        <img className="home_img" src={section2} alt="costs" />
      </section>
      <section>
        <img className="home_img" src={section3} alt="costs" />
      </section>
      <section>
        <img className="home_img" src={section4} alt="costs" />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
