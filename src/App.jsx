import Encryption from "../components/main/Encryption";
import Footer from "../components/main/Footer";
import Hero from "../components/main/Hero";
import HireMe from "../components/main/HireMe";
import Navbar from "../components/main/Navbar";
import Projects from "../components/main/Projects";
import Skills from "../components/main/Skills";
import StarsCanvas from "../components/main/StarCanvas";
import "./App.css";
import "@fontsource/inter";

function App() {
  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-x-hidden overflow-y-hidden">
      <div className="fixed inset-0 bg-[#030014] -z-20" />
      <div className="fixed inset-0 -z-10">
        <StarsCanvas />
      </div>
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <div className="w-full flex justify-center">
            <HireMe />
          </div>
          <Skills />
          <Encryption />
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
