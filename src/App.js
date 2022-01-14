import "./App.css";
import Banner from "./components/Banner";
import DeveloperOnDemond from "./components/DeveloperOnDemond";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Subhead from "./components/Subhead";
import Swipe from "./components/Swipe";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Banner />
      <Swipe />
      <Services />
      <div className="text-center ">
        <h4>Portfolio</h4>
      </div>
      <Portfolio />
      <div className="text-center ">
        <h4>Developers on Demond</h4>
      </div>
      <DeveloperOnDemond />
      <Subhead />
      <Footer />
    </div>
  );
}

export default App;
