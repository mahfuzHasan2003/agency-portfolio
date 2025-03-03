import "./App.css";
import NavBar from "@/components/custom-components/nav-bar";
import Home from "@/pages/home";

function App() {
  return (
    <div className="min-h-svh">
      <NavBar />
      <div className="pt-20 w-11/12 max-w-7xl mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
