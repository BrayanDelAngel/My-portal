"use client";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

export const IconsPerfil = () => {
  const sendEmail = () => {
    window.location.href = "mailto:brayanefra0@gmail.com";
  };
  const sendGitHub = () => {
    window.location.href = "https://github.com/BrayanDelAngel";
  };
  return (
    <div>
      <div className="flex items-center justify-center content-center mt-2 space-x-6 md:space-x-4">
        <button
          className="hover:bg-gray-300 rounded-full p-2"
          onClick={sendGitHub}
        >
          <FaGithub size={50} />
        </button>
        <button
          className="hover:bg-red-100 rounded-full p-2"
          onClick={sendEmail}
        >
          <BiLogoGmail className="text-red-500" size={50} />
        </button>
      </div>
    </div>
  );
};
