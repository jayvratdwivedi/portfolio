import Encryption from "../components/main/Encryption";
import Hero from "../components/main/Hero";
import Navbar from "../components/main/Navbar";
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
          <Skills />
          <Encryption />
        </div>
      </main>
    </div>
  );
}

export default App;
