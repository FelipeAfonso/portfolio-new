import { NextPage } from "next";
import { Contact } from "components/sections/Contact";
import { Header } from "components/sections/Header";
import { Projects } from "components/sections/Projects";

const Home: NextPage = () => (
  <>
    <Header />
    <Projects />
    <Contact />
  </>
);

export default Home;
