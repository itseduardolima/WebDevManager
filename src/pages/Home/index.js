import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import FirstSection from "./FirstSection";
import SecontSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function Home() {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <SecontSection/>
      <ThirdSection/>
      <Footer />
    </div>
  );
}

export default Home;
