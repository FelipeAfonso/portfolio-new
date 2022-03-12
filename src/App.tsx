import { Route, Routes } from "react-router-dom";
import { Contact } from "./sections/Contact";
import { Header } from "./sections/Header";
import { ProjectPage } from "./components/ProjectPage";
import { Projects } from "./sections/Projects";

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
