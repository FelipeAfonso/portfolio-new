import { Redirect, useRoute } from "wouter";
import { projects } from "../content/projects";

export const ProjectPage = () => {
  const [match, params] = useRoute("/project/:key");
  const selectedProject = params && projects[params.key];
  return match && selectedProject ? (
    <div>{JSON.stringify(selectedProject)}</div>
  ) : (
    <Redirect to="/" />
  );
};
