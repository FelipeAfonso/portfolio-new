import { Route, Routes } from "react-router-dom";
import AnimatedPage from "./components/AnimatedPage";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./pages";
import Project from "./pages/project";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/post";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path="/blog/post/:id" element={<BlogPost />} />
        <Route
          path="/project/:key"
          element={
            <AnimatedPage direction="right">
              <Project />
            </AnimatedPage>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
