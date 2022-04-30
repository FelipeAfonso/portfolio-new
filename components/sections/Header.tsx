import { useEffect, useMemo, useState } from "react";
import Typewriter from "typewriter-effect";

const highlights = [
  "an essentialist",
  "an UX design enthusiast",
  "a map weirdo",
  "a tabletop RPG Dungeon Master",
  "an eternal student",
];

export const Header = () => {
  const [highlightedTextIndex, setHighlightedTextIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHighlightedTextIndex((i) => (i >= highlights.length - 1 ? 0 : i + 1));
    }, 3000);
  }, []);

  const selectedHighlight = useMemo(
    () => highlights[highlightedTextIndex],
    [highlightedTextIndex]
  );

  return (
    <section
      title="header"
      className="flex flex-col items-center justify-center p-4 h-screen"
      style={{ background: "linear-gradient(180deg, #03A696, #038C8C)" }}
    >
      <h1 className="text-6xl text-center text-gray-50">
        {`Hi! I'm Felipe Afonso, `}
        <br />
        <b>
          <u className="decoration-orange-400">Front End Developer.</u>
        </b>
      </h1>
      <h2 className="text-3xl text-center text-gray-50 m-2">
        <span>{"And also "}</span>
        <Typewriter
          options={{
            strings: highlights,
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </section>
  );
};
