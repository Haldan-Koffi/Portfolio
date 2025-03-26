// import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <div className="p-5 md:px-[15%]">
        <Projects />
        <Experiences />
      </div>
      {/* <About /> */}
      <div className="flex justify-center p-5 mt-30">
        <Footer />
      </div>
    </div>
  );
}
