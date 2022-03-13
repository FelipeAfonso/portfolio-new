import { MdCopyAll, MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPdfFill, BsLinkedin } from "react-icons/bs";
import Tippy from "@tippyjs/react";
//import "tippy.js/dist/tippy.css";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen min-w-full flex flex-col p-4 items-center gap-4"
      style={{ background: "linear-gradient(180deg, #025159, #012E40)" }}
    >
      <a
        href="/resume.pdf"
        className="self-end justify-self-start cursor-pointer text-gray-50 flex flex-row items-center gap-2"
        download
      >
        <BsFileEarmarkPdfFill size={24} />
        <h2 className="text-xl underline">Download my .PDF Resume</h2>
      </a>
      <div className="flex flex-col items-center justify-center flex-1 gap-3">
        <h1 className="text-5xl text-gray-50">Contact me!</h1>
        <form
          className="flex flex-row gap-2 items-center"
          action="mailto:fmunhozafonso@gmail.com"
          method="POST"
        >
          <button
            className="flex flex-row items-center gap-2 text-gray-50"
            type="submit"
          >
            <MdMail size={36} />
            <h3 className="text-xl underline decoration-orange-400">
              fmunhozafonso@gmail.com
            </h3>
          </button>
          <Tippy
            content={
              <text className="text-gray-50 text-base">Copy to clipboard</text>
            }
          >
            <div>
              <MdCopyAll
                size={24}
                className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse"
                onClick={() =>
                  navigator.clipboard.writeText("fmunhozafonso@gmail.com")
                }
              />
            </div>
          </Tippy>
        </form>

        <a
          href="https://github.com/FelipeAfonso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 text-gray-50"
        >
          <FaGithub size={36} />
          <h3 className="text-xl underline decoration-orange-400">
            @FelipeAfonso
          </h3>
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-afonso/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 text-gray-50"
        >
          <BsLinkedin size={36} />
          <h3 className="text-xl underline decoration-orange-400">LinkedIn</h3>
        </a>
      </div>
    </div>
  );
};
