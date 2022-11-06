import React, { useEffect, useState } from "react";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Dictionary = () => {
  // states are here
  const [search, setSearch] = useState("");
  const [speech, setSpeech] = useState("");
  const [def, setDef] = useState("");
  const [def2, setDef2] = useState("");
  const [example, setExample] = useState("");

  //   the boss function is here
  const findWord = async (word) => {
    const res = await fetch(`${API_URL}${word}`);
    const data = await res.json();

    console.log(data[0].meanings[0].definitions[0].definition);

    setSearch(data[0]);
    setSpeech(data[0].meanings[0].partOfSpeech);
    setDef(data[0].meanings[0].definitions[0].definition);
    setDef2(data[0].meanings[0].definitions[1].definition);
    setExample(data[0].meanings[0].definitions[0].example);
  };
  // effect is here
  useEffect(() => {
    findWord("hello");
  }, []);

  return (
    <>
      <div className="containter mx-auto mt-10 flex h-min w-[85vw] flex-col items-center rounded-md bg-[#8f50892c] py-5">
        {/* The Dictionary Title is here */}
        <div className="dictionary mb-3 text-center font-josefin text-2xl font-bold text-purple-200 md:text-4xl">
          The Dictionary (sort of!)
        </div>
        {/* A little clarification is here */}
        <div className="div mb-10">
          <p className=" mx-auto  w-[80%] font-josefin text-sm text-gray-100 md:text-base">
            This is a super basic Dictionary wanna be. It can sometimes give
            pretty accurate results but sometimes it gives bizarre results which
            may or may not be related to the Search Term itself, at any rate, it
            is not what you would expect to hear back when searching for
            anything in a regular Dictionary. So, my point is, this is a project
            I made with the intention of learning Fetch APIs and strengthening
            my JavaScript and React JS knowledge, hence this free API which is
            generously provided by{" "}
            <span className=" text-yellow-400 hover:text-pink-400 hover:underline md:text-base">
              <a
                href="https://dictionaryapi.dev/"
                target="_blank"
                rel="noreferrer"
                className="font-josefin text-lg md:text-xl"
              >
                dictionaryapi.dev
              </a>
            </span>{" "}
            is more than good enough for my purposes but might not be suitable
            for actually relying on it for critical or even trivial information.
            Thank you for checking it out though, means a lot.
          </p>
        </div>
        {/* input is here */}
        <div className="search flex items-center md:scale-125">
          <input
            className="rounded-md border-b-2 border-gray-400 bg-slate-400 bg-opacity-10 px-3 py-1 font-josefin font-semibold text-gray-100 outline-none"
            placeholder="Search for word"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="ml-2 scale-150 cursor-pointer rounded-md px-1 py-1 text-white hover:bg-slate-300 hover:bg-opacity-20 hover:text-blue-300"
            onClick={() => findWord(search)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </button>
        </div>
        <div className="word mt-5 ml-auto px-5 font-fuzzy text-6xl text-white md:ml-[30rem] md:text-7xl">
          {search.word}
        </div>
        <div className="pspeech ml-auto px-10 font-josefin text-2xl font-semibold text-gray-200 md:ml-[27rem]">
          {speech}
        </div>
        <div className="definition mt-3 w-[80%] font-josefin text-sm text-gray-300 md:text-base md:text-gray-100">
          {" "}
          {def !== "" ? "Definition:-     " + def : def} <br />
          {def2 !== "" ? "Definition:-   " + def2 : def2}
        </div>
        <div className="example mt-4 w-[75%] text-center font-josefin text-sm text-gray-300 md:text-base md:text-gray-100">
          {example !== undefined ? example : "definition not found."}
        </div>
      </div>
    </>
  );
};

export default Dictionary;
