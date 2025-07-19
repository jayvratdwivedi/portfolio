import Hero from "../components/main/Hero";
import "./App.css";
import "@fontsource/inter";

function App() {
  return (
    <div className=" text-white font-sans overflow-x-hidden overflow-y-scroll min-h-screen">
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
        </div>
      </main>
    </div>
  );
}

export default App;
