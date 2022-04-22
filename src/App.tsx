import { Route, Routes } from "react-router-dom";
import AnimatedPage from "./components/AnimatedPage";

import Home from "./pages";
import Project from "./pages/project";
import Blog from "./pages/blog";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AnimatedPage direction="left">
            <Home />
          </AnimatedPage>
        }
      />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/project/:key"
        element={
          <AnimatedPage direction="right">
            <Project />
          </AnimatedPage>
        }
      />
    </Routes>
  );
}

export default App;
