import { Route } from "wouter";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Route path="/">
        <Header />
        <Projects />
      </Route>
      <Route path="/project/:key"></Route>
    </div>
  );
}

export default App;
