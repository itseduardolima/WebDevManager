import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import "../../layout/Base/style.css";

function Base() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Base</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Base;
