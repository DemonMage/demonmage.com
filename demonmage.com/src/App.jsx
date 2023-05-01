//import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  const HOME_LINK = "/";
  const PROJECT_LINK = "/projects";
  const ABOUT_LINK = "/about";
  let component;

  switch (window.location.pathname) {
    case HOME_LINK:
      component = <Home />;
      break;
    case PROJECT_LINK:
      component = <Projects />;
      break;
    case ABOUT_LINK:
      component = <About />;
      break;
  }

  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;
