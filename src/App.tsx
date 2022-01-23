import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { ProjectPage } from "./components/ProjectPage";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Projects />
            <Contact />
          </>
        }
      />
      <Route path="/project/:key" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
