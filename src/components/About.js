import React from "react";
import img1 from "../images/about-landing.jpg";
import me from "../images/me1.jpg";
import me1 from "../images/me2.JPG";
import ContactForm from "./ContactForm";

export default function About() {
  return (
    <>
      <main className="h-full max-w-full overflow-x-hidden bg-stone-300">
        <div
          className="bg-image h-[90vh] w-full"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0,0,0,.3)",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="pt-56 text-center text-5xl font-semibold uppercase text-gray-300 md:text-9xl">
            Sopan Roy
          </p>
          <p className="mx-auto w-[50%] pt-8 text-center text-xs font-semibold text-gray-100  md:pt-16 md:text-xl">
            Frontend Web Development, Salesforce CRM, APEX Development,
            Lightning Web Component Development, Mechanical Engineer, CAD
            Drawings
          </p>
          <button className="mt-10 ml-[35%] rounded-xl bg-[#041d4bc7] py-3 px-3 text-white shadow-md hover:bg-teal-600 hover:text-black md:ml-[46%] md:scale-125 ">
            Read More
          </button>
        </div>
        <div className="middle-part">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="left-card mt-12 ml-14 w-[250px] md:ml-28 md:w-auto md:pb-20">
              <div className="flex justify-center">
                <div className="max-w-sm rounded-lg bg-stone-100 shadow-lg">
                  <img
                    className="cursor-pointer rounded-t-lg"
                    src={me}
                    alt=""
                  />
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">
                      Loves Computers
                    </h5>
                    <p className="mb-4 text-base text-gray-700">
                      I like to eat, sleep, tech, repeat. Anything related to
                      tech, excites me to the core, hope to stay this way till
                      the end.
                    </p>
                    <button
                      type="button"
                      className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    >
                      Don't Click
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-card mt-12 ml-14 w-[250px] pb-10 md:ml-0 md:mr-28 md:w-auto md:pb-20">
              <div className="flex justify-center">
                <div className="max-w-sm rounded-lg bg-stone-100 shadow-lg">
                  <img
                    className="cursor-pointer rounded-t-lg"
                    src={me1}
                    alt=""
                  />

                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">
                      Trekking is Freedom
                    </h5>
                    <p className="mb-4 text-base text-gray-700">
                      Got this photo, and since it looks kinda cool, put it here
                      for show. I don't look like this now lol!
                    </p>
                    <button
                      type="button"
                      className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    >
                      Will add later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-part">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
