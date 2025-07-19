import Hero from "../components/main/Hero";
import Skills from "../components/main/Skills";
import StarsCanvas from "../components/main/StarCanvas";
import "./App.css";
import "@fontsource/inter";

function App() {
  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-[#030014] -z-20" />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <StarsCanvas />
      </div>
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;
