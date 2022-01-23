import { Route } from "wouter";
import { Header } from "./components/Header";
import { ProjectPage } from "./components/ProjectPage";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Route path="/">
        <Header />
        <Projects />
      </Route>
      <Route path="/project/:key">
        <ProjectPage />
      </Route>
    </div>
  );
}

export default App;
