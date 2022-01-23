import { Route } from "wouter";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { ProjectPage } from "./components/ProjectPage";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Route path="/">
        <Header />
        <Projects />
        <Contact />
      </Route>
      <Route path="/project/:key">
        <ProjectPage />
      </Route>
    </div>
  );
}

export default App;
