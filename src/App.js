import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
