import { Route, Routes } from "react-router-dom";
import { Contact } from "./sections/Contact";
import { Header } from "./sections/Header";
import { ProjectPage } from "./components/ProjectPage";
import { Projects } from "./sections/Projects";
import AnimatedPage from "./components/AnimatedPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AnimatedPage direction="left">
            <Header />
            <Projects />
            <Contact />
          </AnimatedPage>
        }
      />
      <Route
        path="/project/:key"
        element={
          <AnimatedPage direction="right">
            <ProjectPage />
          </AnimatedPage>
        }
      />
    </Routes>
  );
}

export default App;
