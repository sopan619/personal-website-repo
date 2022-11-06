import React, { useState } from "react";
import About from "./About";
import Content from "./Content";
import Home from "./Home";
import dp from "../images/dp.jpg";
import Blog from "./Blog";

export default function Navbar() {
  const [showPro, setShowPro] = useState(false);
  const showHide = () => {
    if (showPro === false) {
      setShowPro(true);
      setHome(false);
      setAbout(false);
      setBlog(false);
      document.title = "SR | All Projects Page";
    } else {
    }
  };
  const [home, setHome] = useState(true);
  const showHome = () => {
    if (home === false) {
      setHome(true);
      setShowPro(false);
      setAbout(false);
      setBlog(false);
      document.title = "SR | Home Page";
    } else {
    }
  };
  const [about, setAbout] = useState(false);
  const showAbout = () => {
    if (about === false) {
      setAbout(true);
      setShowPro(false);
      setHome(false);
      setBlog(false);
      document.title = "SR | About Page";
    } else {
    }
  };
  const [blog, setBlog] = useState(false);
  const showBlog = () => {
    if (blog === false) {
      setBlog(true);
      setShowPro(false);
      setAbout(false);
      setHome(false);
      document.title = "SR | Personal Blog";
    } else {
    }
  };

  return (
    <div>
      <div className="relative z-20 flex h-screen w-full overflow-hidden bg-white">
        <aside className="relative flex h-full w-16 flex-col items-center justify-center space-y-10 bg-gray-800 text-white">
          <div className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white">
            <button onClick={showHome}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute inset-0 top-14 z-50 flex items-center  justify-center text-xs font-semibold text-white opacity-0 duration-200 group-hover:opacity-90">
                Home
              </div>
            </button>
          </div>

          <div className="group relative flex h-10 w-10  cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white">
            <button onClick={showBlog}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <div className="absolute inset-0 top-14 z-50 flex items-center  justify-center text-xs font-semibold text-white opacity-0 duration-200 group-hover:opacity-90">
                Blog
              </div>
            </button>
          </div>

          <div className="group relative flex h-10 w-10  cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white">
            <button onClick={showAbout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <div className="absolute inset-0 top-14 z-50 flex items-center  justify-center text-xs font-semibold text-white opacity-0 duration-200 group-hover:opacity-90">
                About
              </div>
            </button>
          </div>

          <div className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white">
            <button onClick={showHide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="absolute inset-0 top-14 z-50 flex items-center  justify-center text-xs font-semibold text-white opacity-0 duration-200 group-hover:opacity-90">
                Projects
              </div>
            </button>
          </div>
        </aside>

        <div className="flex h-full w-full flex-col justify-between">
          {/* Actual Header Part */}
          <header className="relative flex h-16 w-full items-center justify-end space-x-10 bg-gray-800 px-5">
            <div className="mr-6 flex flex-shrink-0 items-center space-x-4 text-white">
              <div className="flex flex-col items-end pb-1 ">
                <div className="text-md font-medium ">Sopan Roy</div>
                <div className="font-regular text-xs">Web Developer</div>
              </div>

              <div className="h-10 w-10 cursor-pointer  rounded-full border-2 border-blue-400 bg-gray-200">
                <img className="rounded-full" src={dp} alt="" />
              </div>
            </div>
          </header>
          {/* Using the Content Component here to keep things clean and sort of organized */}
          {showPro && <Content />}
          {home && <Home />}
          {about && <About />}
          {blog && <Blog />}
        </div>
      </div>
    </div>
  );
}
