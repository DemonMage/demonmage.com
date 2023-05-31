import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  const HOME_LINK = "/";
  const PROJECT_LINK = "/projects";

  return (
    <>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route path={HOME_LINK} element={<Home />} />
          <Route path={PROJECT_LINK} element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
