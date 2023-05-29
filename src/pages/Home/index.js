import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import FirstSection from "./FirstSection";
import SecontSection from "./SecondSection";

function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection/>
      <SecontSection/>
      <Footer />
    </div>
  );
}

export default Home;
