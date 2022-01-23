import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPdfFill, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen min-w-full bg-violet-900 flex flex-col p-4 items-center gap-4 "
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
        <div className="flex flex-row items-center gap-2 text-gray-50">
          <MdMail size={36} />
          <h3 className="text-3xl underline">fmunhozafonso@gmail.com</h3>
        </div>
        <a
          href="https://github.com/FelipeAfonso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 text-gray-50"
        >
          <FaGithub size={36} />
          <h3 className="text-3xl underline">@FelipeAfonso</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-afonso/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 text-gray-50"
        >
          <BsLinkedin size={36} />
          <h3 className="text-3xl underline">LinkedIn</h3>
        </a>
      </div>
    </div>
  );
};
