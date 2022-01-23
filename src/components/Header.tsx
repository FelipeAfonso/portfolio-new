import { useEffect, useMemo, useState } from "react";

const vowels = ["a", "e", "i", "o", "u"];

const highlights = [
  "essentialist",
  "UX design enthusiast",
  "map weirdo",
  "tabletop RPG Dungeon Master",
  "eternal student",
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
    <div className="flex flex-col items-center justify-center  bg-gray-900 p-4 h-screen">
      <h1 className="text-6xl text-center text-gray-50">
        Hi! I'm Felipe Afonso, <br />a <b>Front End Developer.</b>
      </h1>
      <h2 className="text-3xl text-center text-gray-50">
        {`And also ${
          vowels.includes(selectedHighlight[0].toLowerCase()) ? "an" : "a"
        }  ${selectedHighlight}`}
      </h2>
    </div>
  );
};
