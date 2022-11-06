import React from "react";
import darkMode from "../images/darkmode.gif";

export default function Blog() {
  return (
    <>
      <div className="absolute top-0 left-0 z-50 h-screen w-screen overflow-scroll">
        <div className=" bg-gray-100 font-sans leading-normal tracking-normal">
          {/* BLOG's OWN NAVBAR */}
          <nav id="header" className="fixed  w-full bg-slate-100  shadow-xl">
            <div className="mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-3 md:max-w-4xl">
              <div className="pl-4">
                <a
                  className="text-xl font-extrabold text-gray-900 no-underline hover:no-underline"
                  href="/"
                >
                  Personal Blog
                </a>
              </div>

              <div className="block pr-8 lg:hidden">
                <button
                  id="nav-toggle"
                  className="flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-green-500 hover:text-gray-900 focus:outline-none"
                >
                  <svg
                    className="h-3 w-3 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>

              <div
                className="z-20 mt-2 hidden w-full flex-grow bg-gray-100  md:bg-transparent lg:mt-0 lg:flex lg:w-auto lg:items-center"
                id="nav-content"
              >
                <ul className="list-reset flex-1 items-center justify-end lg:flex">
                  <li className="mr-3">
                    <a
                      className="inline-block py-2 px-4 font-bold text-gray-900 no-underline"
                      href="/"
                    >
                      Random
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="hover:text-underline inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-900"
                      href="/"
                    >
                      stuff
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="hover:text-underline inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-900"
                      href="/"
                    >
                      here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* THE BODY */}
          <div className="container mx-auto w-auto pt-20 md:max-w-3xl">
            <div
              className="w-full px-4 text-xl leading-normal text-gray-800 md:px-6"
              style={{ fontFamily: "Georgia,serif" }}
            >
              <div className="font-sans">
                <p className="text-base font-bold text-green-500 md:text-sm">
                  &lt;{" "}
                  <a
                    href="/"
                    className="text-base font-bold text-green-500 no-underline hover:underline md:text-sm"
                  >
                    BACK TO HOME
                  </a>
                </p>
                {/* BLOG HEADING */}
                <h1 className="break-normal pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 md:text-4xl">
                  How To Add Dark Mode & A Responsive Navbar Using{" "}
                  <span className="text-green-600">React Js</span> &{" "}
                  <span className="text-green-600">Tailwind CSS?</span>
                </h1>
                {/* BLOG DATE */}
                <p className="text-sm font-normal text-gray-600 md:text-base">
                  Published 19 October 2022
                </p>
              </div>
              {/* BLOG CONTENT HERE */}

              {/* The Intro */}
              <p className="py-6">
                👋 Welcome to my first-ever blog post. The funny part is that I
                am writing this blog in the code editor directly, and adding it
                to my personal website's blog section. This is obviously a
                learning exercise and this is not how you actually post blogs
                anywhere. But hey, everything has a start right, so with a lot
                of excitement, I am here to make a guide for myself, which might
                end up helping someone in the future too. <br /> <br />I am
                making a lot of website designs lately, mainly the front-end
                part of it (done some back-end stuff too). A couple of things
                that consistently caused me some pain in the area where the sun
                doesn't shine, are the Navigation bars of a website and
                implementing dark modes. Might not be the case for everyone, but
                for me personally, it was a bit of a struggle. <br />
                <br /> I think now I have got a pretty effortless solution to
                this, and I am going to share it here in the form of a guide,
                which will be a reference for me too for the future. Let me make
                something clear before we get to the good stuff, there might be
                other ways to do this with even more ease, but this is what I
                have done myself, and as a beginner, it kind of feels like a big
                deal to me :) hence we are here in the blog.
                <br />
                <br /> Great! With all that boring intro stuff out of the way,
                let’s get to the meat. It's no surprise that I love{" "}
                <span className="text-green-500">Tailwind CSS</span> and{" "}
                <span className="text-green-500">React</span>, so naturally this
                guide will focus on these two frameworks/libraries mainly. In
                case it is not clear enough, this very website was built from
                scratch using Tailwind and React only, and in the projects
                section also, many of them were made with these two
                technologies. So let’s begin and see what’s so great about them
                and make some Navbars!
              </p>

              {/* What is Tailwind */}
              <p className="py-6">
                <h1 className="text-2xl font-bold underline underline-offset-2">
                  {" "}
                  What is Tailwind CSS?
                </h1>
                <br />
                So, for a brief introduction, Tailwind is a utility-first CSS
                framework packed with classes like flex, pt-4, text-center, and
                rotate-90 that can be composed to build any design, directly in
                your markup. <br /> <br /> Once you try Tailwind, you can simply
                never go back to regular vanilla CSS. It saves a lot of time,
                and I mean a lot! Tailwind is also easier to debug and maintain
                over time. In short, whatever you can imagine doing with vanilla
                CSS, you can do it with Tailwind, but in a faster, easier &
                arguably cooler way. Instead of me fanboying over Tailwind here,
                it's better if you read their incredible documentation and see
                for yourself what an absolute lifesaver it actually is. <br />
                <a
                  className="text-green-500 hover:underline"
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Tailwind Official Documentation here.
                </a>
              </p>

              {/* What is React */}
              <p className="py-6">
                <h1 className="text-2xl font-bold underline underline-offset-2">
                  What is React JS?
                </h1>
                <br />
                React is a JavaScript library for building user interfaces.
                React has been designed from the start for gradual adoption, and
                you can use as little or as much React as you need. Whether you
                want to get a taste of React, add some interactivity to a simple
                HTML page, or start a complex React-powered app, the links in
                this section will help you get started. Fun fact, you know
                Facebook right? Good, it was made with React, and React is
                maintained by Facebook also. Again, instead of me drooling over
                React’s goodness, you can learn a lot more by{" "}
                <a
                  className=" text-green-500 hover:underline"
                  href="https://reactjs.org/tutorial/tutorial.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reading the official documentation here.
                </a>
                <br />
                <br />
                For any new language or framework or library, along with guides
                and stuff if the actual documentation is good, it gets a lot
                easier to get into the said language, framework, or library.
              </p>

              {/* Pre Requisits */}
              <p className="py-6">
                <h1 className="font-sans text-2xl font-bold">
                  🎉 Let’s begin! Finally! 🎉
                </h1>{" "}
                <br />
                Firstly this guide assumes that the reader has prior knowledge
                of HTML, CSS, JavaScript, and a bit of React and Tailwind, also
                you have Node.js installed on your machine along with any code
                editor setup ready, I use VS Code. In case you don’t have Node
                installed, you can follow the links below and come back when
                done.
                <ul className="mt-4">
                  <li>
                    <a
                      className=" text-green-500 hover:underline"
                      href="https://nodejs.org/en/download"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Install Node package manager
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-green-500 hover:underline"
                      href="https://code.visualstudio.com/download"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Install VS Code editor
                    </a>
                  </li>
                </ul>
              </p>

              {/* Starting the build process */}
              <p className="py-6">
                Now that all of the preliminary setups are taken care of, let's
                make a new folder where our project will be stored. This can be
                anywhere where you can find it later. Make sure to name it in
                lowercase and no spaces are allowed, also try not to name it{" "}
                <strong>noobmaster69</strong>, make it relevant, it’s good
                practice.
                <br />
                <br />
                Now, let’s press shift and while holding down on it, right-click
                in the empty folder, an option of opening a PowerShell window
                here should appear, click on it. In the terminal, type the below
                line,
                {/* Create react app snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      npx create-react-app .
                    </code>
                  </pre>
                </div>
                Don’t miss the dot at the end, it will make it so that the files
                are created inside the folder, else it will ask for a folder
                name and then the React app will be made inside the new folder.
                Cool, our app is created, now let’s install Tailwind. Write the
                following commands one by one,
                {/* Tailwind setup snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      npm install -D tailwindcss postcss autoprefixer <br />
                      npx tailwindcss init -p
                    </code>
                  </pre>
                </div>
                Great, now let’s open this folder with all our files on it
                inside VS Code, you can simply right-click and select the Open
                with code option, or it can be done from within VS Code itself,
                your choice.
                <br />
                <br />
                Let’s open the{" "}
                <i>
                  <u>tailwind.config.js</u>
                </i>{" "}
                file and replace the <i>content: [ ]</i> line with the
                following,
                {/* Tailwind config snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`content:[
    "./src/**/*.{js,jsx,ts,tsx}",
    ],`}
                    </code>
                  </pre>
                </div>
                Next, let’s go to the{" "}
                <i>
                  <u>index.css</u>
                </i>{" "}
                file, clear everything you see, and replace it with the
                following,
                {/* Index.css snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`@tailwind base;
@tailwind components;
@tailwind utilities;
`}
                    </code>
                  </pre>
                </div>
                While you are here, delete the following lines of code also,
                {/* Index.css snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`import reportWebVitals from './reportWebVitals';
reportWebVitals();
`}
                    </code>
                  </pre>
                </div>
                Point to note here is that the lines which start with ' // ' are
                comments and gets ignored while compilation, so you can keep it
                or get rid of them, either way, it won’t make any difference.
                {/* Deletig extras */}
                <br />
                <br />
                We are pretty much done with setting up Tailwind with React
                application, but let’s do a little more optimization by removing
                unwanted files first. Delete the following files,
                {/* File list */}
                <blockquote className="my-8 border-l-4 border-green-500 pl-8 italic md:pl-12">
                  <ul>
                    <li>App.test</li>
                    <li>App.css</li>
                    <li>reportWebVitals</li>
                    <li>logo</li>
                    <li>setupTests</li>
                  </ul>
                </blockquote>
                Awesome, now let’s go to the Public folder, open{" "}
                <i>
                  <u>index.html</u>
                </i>{" "}
                and delete the comments (or keep it if you prefer) and then
                delete the following line,
                {/* Index.css snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
`}
                    </code>
                  </pre>
                </div>
                Next, get rid of the <i>logo192</i> , and <i>logo 512</i> files,
                then open the{" "}
                <i>
                  <u>manifest.json</u>
                </i>{" "}
                file, and remove the following objects from the Icons array,
                {/* Delete manifest */}
                {/* Manifest snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }

`}
                    </code>
                  </pre>
                </div>
              </p>

              {/* Start dev server localhost */}
              <p className="py-6">
                Now that our React application is lightweight, clean and only
                has the files we want. Now come to{" "}
                <i>
                  <u>App.js</u>
                </i>{" "}
                file, replace everything with the following,
                {/* App.js snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`export default function App() {
  return (
    <h1 className="text-5xl font-bold text-green-500">
      Hello world!
    </h1>
  )
}
`}
                    </code>
                  </pre>
                </div>
                Great, now we are all done with the setups, now let’s serve our
                app in the <i>localhost:3000</i> server, Open the terminal
                inside VS Code by pressing <strong>Ctrl + ~ </strong> key and
                run the following command,
                {/* npm start command snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      npm run start
                    </code>
                  </pre>
                </div>
                In the browser, a new tab will open with{" "}
                <i>http://localhost:3000/</i> in the url bar and there you
                should see a big <br />
                <span className="text-5xl font-bold text-green-500">
                  “Hello World”
                </span>{" "}
                <br /> written in green color.✨ Give yourself a pat on the
                back, because you have ✨ successfully created a React
                application and set up Tailwind CSS with it ✨, now we can
                finally start building our Navbar and add Dark Mode to our
                website.
              </p>

              {/* Starting Navbar build process */}
              <p className="py-6">
                Now we can start building our website. I will not go into much
                details about coding the body part of the website but rather I
                will focus on the Navbar part. So, first, we will make a Navbar
                component inside a new folder called ‘Components’. Simply create
                a new file inside the folder named{" "}
                <i>
                  <u>Navbar.jsx</u>
                </i>{" "}
                , we will build our Navbar here, and later we will implement
                Dark Mode.
                <br />
                <br />
                In the Navbar component let’s write the following code to make
                our Navbar,
                {/* GIANT NAVBAR COMPONENT CODE */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`import React, { useState, useRef } from "react";
import GearIcon from "./Icons/GearIcon";

const Navbar = (props) => {
  const [mode, setMode] = useState(false);
  const navBar = useRef();
  const menu = () => {
    navBar.current.classList.toggle("translate-y-48");
  };
  return (
    <>
      {/* Basically the Navbar is here */}
      <header className="bg-yellow-500 dark:bg-lime-600 fixed top-0 z-20 w-screen h-16 flex justify-between items-center pl-3 pr-5 shadow-xl border-b-4 border-red-500 dark:border-green-300">
        {/* The Logo */}
        <h1 className="text-5xl text-black dark:text-gray-300 font-bold cursor-pointer">
          LOGO.
        </h1>
        {/* List of pages */}
        <nav className="text-black dark:text-gray-200 hidden md:flex">
          <a
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            href="/"
          >
            Home
          </a>
          <a
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            href="/"
          >
            Projects
          </a>
          <a
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            href="/"
          >
            About
          </a>
          <a
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            href="/"
          >
            Contact
          </a>
        </nav>
        {/* Mobile menu button is here */}
        <button
          className="block md:hidden text-gray-800 dark:text-gray-200 scale-125"
          onClick={menu}
        >
          <GearIcon />
        </button>
        {/* Theme changer is here */}
        <div className="tick-box hidden md:flex space-x-2 items-center justify-center dark:text-gray-200 border-b-4 dark:border-green-400 border-yellow-200">
          <span>Dark Mode {mode ? "On" : "Off"}</span>
          <input
            type="checkbox"
            className="w-5 cursor-pointer"
            onClick={() => {
              props.onChange();
              setMode(!mode);
            }}
          />
        </div>
      </header>
      {/* This is the mobile menu, which is shown only on smaller screens */}
      <div
        className="phone-menu bg-yellow-400 dark:bg-lime-500 -top-32 z-8 fixed w-screen h-[20vh] shadow-xl border-b-2 border-gray-700 dark:border-gray-200 transition duration-500 ease-in-out transform"
        ref={navBar}
      >
        <div className="container ">
          <div className="tick-box ml-auto mr-3 mt-1 space-x-2 items-center justify-center dark:text-gray-700 border-b-4 w-fit dark:border-red-400 border-sky-400">
            <span>Dark Mode {mode ? "On" : "Off"}</span>
            <input
              type="checkbox"
              className="w-5 cursor-pointer"
              onClick={() => {
                props.onChange();
                setMode(!mode);
              }}
            />
          </div>
          <nav className="text-black dark:text-gray-600 flex flex-col text-center ">
            <a
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              href="/"
            >
              Home
            </a>
            <a
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              href="/"
            >
              Projects
            </a>
            <a
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              href="/"
            >
              About
            </a>
            <a
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              href="/"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
`}
                    </code>
                  </pre>
                </div>
              </p>

              {/* Explaining the Navbar */}
              <p className="py-6">
                Okay, that is a lot of lines of complicated and scary looking
                stuff 😲! Right? Well, not really, it’s really simple when you
                know what to look for in these code blocks. I will briefly
                explain them now, and afterward, we will make a{" "}
                <strong>Card component</strong> also, so our page has some
                content in it, and then we will import everything into our{" "}
                <i>
                  <u>App.js</u>
                </i>{" "}
                main component. Please note that right now I will explain the
                React part, and later we will come to the Tailwind classes we
                have written.
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 Importing React and Hooks 🟢
                </h1>
                <br />
                Let’s begin with the first line, here we are simply importing
                React and a couple of{" "}
                <a
                  className="text-green-500 hover:text-red-600 hover:underline hover:underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://reactjs.org/docs/hooks-intro.html"
                >
                  React Hooks
                </a>{" "}
                into our Component for later use, then I have made a separate
                JSX file with a Gear Icon SVG (Scalable Vector Graphics) file,
                in order to use it as our Menu toggle button in smaller screen
                devices, you can simply use an SVG or PNG file directly inside
                the Navbar component (it can make the code messy, hence I prefer
                this method of making a separate JSX file). Note, that the icon
                I used here is taken from{" "}
                <a
                  className="text-green-500 hover:text-red-600 hover:underline hover:underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-icons.github.io/react-icons/"
                >
                  React Icons.
                </a>
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 Props and Hooks Setup 🟢
                </h1>
                <br />
                Now, if you notice, I am using props in the Component, the
                reason for which is to simply control a function over in the
                main App.js file, directly from this Navbar component, which
                will become clear later. Then we are using a useState hook to
                change the text content for our Dark Mode label, you can even
                skip it if you want. Finally, we are using{" "}
                <a
                  className="text-green-500 hover:text-red-600 hover:underline hover:underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/react/react_useref.asp"
                >
                  useRef Hook
                </a>{" "}
                to toggle a class in one of our sections, we’ll get to it later.
              </p>

              {/* Navbar Structure and more */}
              <p className="py-6">
                <h1 className="text-xl font-bold text-green-500">
                  🟢 Navbar structure 🟢
                </h1>
                <br />
                Now we are building the Navbar from here onward. It is a pretty
                basic Navbar, with not much fancy going on here, I have created
                a{" "}
                <strong>
                  <i>Header tag</i>
                </strong>{" "}
                , and inside I have added an{" "}
                <strong>
                  <i>h1 tag</i>
                </strong>
                , which holds the Logo, you can obviously use an image here.
                Then we have a list of links inside a{" "}
                <strong>
                  <i>Nav tag</i>
                </strong>
                , here you will configure Routes, if you go with a single page
                application, or simply use anchor tags and hrefs to link to
                other related pages as suited for your specific website.
                <br />
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 Menu Button & Mode Changer 🟢
                </h1>
                <br />
                Then I made a button, inside which I used the{" "}
                <strong>
                  <i>GearIcon Component</i>
                </strong>{" "}
                which we imported at the start, you can use any SVG or PNG image
                from the web here. Note, that this button is calling a function
                on click, this is the function we defined earlier, which is
                essentially toggling a class in one of our Divs. This is the
                beauty of useRef hooks since it does not re-renders a component
                when changed. Next, we got a Theme changer tickbox, you can
                easily locate these parts by looking for the Commented Heading I
                have left in the code for easier code readability. This checkbox
                will be used to invoke a callback function and change the theme
                of our Website.
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 Input Tag onClick setting 🟢
                </h1>
                <br />
                Now, in the{" "}
                <strong>
                  <i>input tag</i>
                </strong>{" "}
                , you will notice that we are calling the{" "}
                <strong>
                  <i> props.onChange() function</i>
                </strong>{" "}
                , every time the checkbox is clicked, and it is performing some
                task, also we are setting the state of the mode, opposite of the
                current value. If you check, we passed the default state as
                ‘false’, hence it will be changed to ‘true’, and then ‘false’
                and then ‘true’, and so on. What this is accomplishing is
                simple, it will show whether Dark mode is On or Off.
                {/* input tag onClick snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`<input
   type="checkbox"
   className="w-5 cursor-pointer"
   onClick={() => {
     props.onChange();
     setMode(!mode);
   }}
  />
`}
                    </code>
                  </pre>
                </div>
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 The Mobile Menu 🟢
                </h1>
                <br />
                Now we are designing the menu which will appear on smaller
                screens only. In this part, we have added a ref attribute and
                defined it with our useRef hook we created earlier. This will
                allow the hook to toggle a class in the existing classLlist.
                Note that the theme changer button is also present since you
                don’t want that to disappear on small screens, right? Then we
                got the same links we created for our Navbar above, just the
                flex-direction is changed to a column this time to have the
                links appear vertically. Lastly, we are simply exporting this
                Navabr Component in order to be able to import it elsewhere.
                {/* final navbar export snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`ref={navBar}
      &
export default Navbar;`}
                    </code>
                  </pre>
                </div>
              </p>

              {/* Dummy Card Content explaination Here */}
              <p className="py-6">
                So if things go right then we should have a Navbar, now let’s
                quickly make a card as part of your body. Let’s make a new file
                in the Components folder named Card.jsx and write the following
                code inside,
                {/* Card.jsx snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`export const Card = () => {
  return (
    <>
      <div className="container shadow-lg border-l-4 border-red-500 dark:border-yellow-400 bg-stone-200 dark:text-slate-100 dark:bg-slate-600 w-[80vw] md:w-[50vw] mx-auto  p-5 rounded-lg ">
        <h1 className="font-bold text-xl text-center">
          Hello this is a Heading.
        </h1>
        <p className=" font-semibold text-lg text-red-400 dark:text-yellow-300  text-center">
          This is Dark Mode
        </p>
        <p className="text-left mx-auto w-[75%] pt-5 pb-3 text-gray-700 dark:text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores molestiae, aperiam minima rem impedit earum Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores molestiae, aperiam minima rem impedit earum.
        </p>
      </div>
    </>
  );
};

`}
                    </code>
                  </pre>
                </div>
                Great, this is a basic card, with a Title and some random body
                text, you are free to style it however you like. Without wasting
                any time let’s focus on the App.js file now. Open the file and
                write the following code inside,
                {/* App.js snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      {`import { Card } from "./components/Card";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
      <div className={darkmode && "dark"}>
        <div className="components bg-slate-100 dark:bg-slate-800 h-full w-full py-32 ">
          <Navbar onChange={() => setDarkmode(!darkmode)} />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;


`}
                    </code>
                  </pre>
                </div>
              </p>
              {/* Finishing Part */}
              <p className="py-6">
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 Dark Classes & App Component Setup 🟢
                </h1>
                <br />
                Now, here in the <i>App.js</i> file, we are using the useState
                hook to pass a value of either <b> ’true’</b> or <b> ‘false’</b>{" "}
                , and based on the value we are adding a class called{" "}
                <b>‘dark’</b> on the parent element. This is crucial because by
                checking this dark class in the parent element, Tailwind will
                decide whether to apply the Dark mode classes or not, hence our
                website will switch between themes effortlessly. Now if you go
                back and check, everywhere, in the <b>Navbar</b> component or in
                the <b>Card</b> component, we have added some Tailwind classes
                with
                <b>
                  <i> dark: </i>
                </b>
                as a prefix to them. This is how Tailwind will apply those
                classes when Dark mode will be active, or in other words, a dark
                class will be present on our parent element. This will become
                much clearer a little while later when we set this in the config
                file.
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 App.js Structure 🟢
                </h1>
                <br />
                Here, we have simply put every component inside a parent
                element, which has the dark class setup going for it. Hence,
                whenever Dark Mode is toggled from the Navbar Component, via
                Props, the onChange function will be invoked. Note that we are
                passing that as a value on the Navbar Component. If it’s a bit
                confusing, refer to{" "}
                <a
                  className="text-green-500 hover:text-red-600 hover:underline hover:underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://reactjs.org/docs/components-and-props.html
                  "
                >
                  this documentation here
                </a>{" "}
                for a clearer picture. When the checkbox is clicked, the
                darkmode state is changed to either <b> ’true’</b> or{" "}
                <b> ‘false’</b> and that is then adding or removing the{" "}
                <b>‘dark’</b> class on the parent element.
                <br />
                <br /> Since every component is wrapped inside the Parent
                element, the <b>dark class</b> is controlling every component's
                dark utility classes which we added while building the
                respective components earlier. You have full control over this,
                and add as many components as you want, given that you set up
                the dark classes properly.
                <h1 className="text-xl font-bold text-green-500">
                  <br />
                  🟢 Tailwind Dark Mode Setup 🟢
                </h1>
                <br />
                Okay, so far so good, we are basically finished with all the
                setup, now all that remains is to set up Dark Mode in Tailwind
                config. Without this, the theme won’t change, as this is what
                lets Tailwind know that we wish to change to dark classes when
                the mode is changed. In order to set this up, simply head over
                to{" "}
                <i>
                  <b>tailwind.config.js</b>
                </i>{" "}
                & right below the content line add this line,
                {/* Card.jsx snippet */}
                <div className="snippet py-4">
                  <pre className="rounded bg-gray-900 p-2 font-mono text-base text-white md:p-4">
                    <code className="whitespace-pre-wrap break-words">
                      darkMode: "class",
                    </code>
                  </pre>
                </div>
                That’s it, we are done building an awesome Navbar and
                implemented Dark mode in our website pretty easily. While
                changing the Tailwind config, remember that if we put{" "}
                <b>‘media’</b> in place of <b>‘class’</b>, the website theme
                will change based on the user operating system theme, and our
                button won’t work. If you wish to change to a dark theme based
                on the user’s system theme, then you can use the <b>‘media’</b>{" "}
                option, else simply use the <b>‘class’</b>
                option and everything will work out fine. You can read all about
                this in the official documentation, simply{" "}
                <a
                  className="text-green-500 hover:text-red-600 hover:underline hover:underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://tailwindcss.com/docs/dark-mode
                  "
                >
                  go to this link
                </a>{" "}
                and learn more about the incredible Dark Mode features.
              </p>

              {/* BLOCK QUOTE HERE */}
              <blockquote className="my-8 border-l-4 border-green-500 pl-8 italic md:pl-12">
                This is a basic very basic version, but even for more complex
                stuff the idea and methods stay the same. Experiment on your
                own, refer to the documentation if you are stuck, take help from
                Google, and you can build some amazing-looking websites using
                React and Tailwind CSS. The only way to learn <b>Coding</b> , is
                by writing a lots of Code.🍀 Best of luck! 🍀
              </blockquote>

              {/* Demo gif here */}
              <p className="py-6">
                <h1 className="text-center text-2xl font-semibold text-green-500 md:text-3xl">
                  🎊🎊Congratulations🎊🎊
                  <br />
                </h1>
                <br />
                Well, there you have it, our very own Navbar, and our website
                now has a beautifully optimized Dark Mode option. You can play
                around with the buttons and do more creative animations, this
                guide was intended for beginners, in order to make it easier to
                implement such functionality. Just look below, isn’t looking
                sleek? Shower some love towards this project, and start building
                more websites. Good luck :)
              </p>
              <div className="nav-video">
                <img
                  className="mx-auto"
                  src={darkMode}
                  alt="Dark Mode Demo Video"
                />
              </div>
            </div>

            {/* The Tags in the end is here */}
            <div className="px-4 py-6 text-base text-gray-500 md:text-sm">
              Tags:{" "}
              <a
                href="/"
                className="text-base text-green-500 no-underline hover:underline md:text-sm"
              >
                Tailwind CSS
              </a>{" "}
              .{" "}
              <a
                href="/"
                className="text-base text-green-500 no-underline hover:underline md:text-sm"
              >
                React JS
              </a>
              .{" "}
              <a
                href="/"
                className="text-base text-green-500 no-underline hover:underline md:text-sm"
              >
                Dark Mode
              </a>
              .{" "}
              <a
                href="/"
                className="text-base text-green-500 no-underline hover:underline md:text-sm"
              >
                Responsive Navbar
              </a>
            </div>
            {/* Back to home link */}
            <div className="ml-[60vw] pb-3 md:ml-[40vw]">
              <p className="text-base font-bold text-green-500 md:text-sm">
                &lt;{" "}
                <a
                  href="/"
                  className="text-base font-bold text-green-500 no-underline hover:underline md:text-sm"
                >
                  BACK TO HOME
                </a>
              </p>
            </div>

            {/* WRITER CREDIT HERE */}
            <hr className="mx-4 mb-8 border-b-2 border-gray-400" />

            <div className="flex w-full items-center px-4 py-10 font-sans">
              <img
                className="mr-4 h-10 w-10 rounded-full object-cover"
                src="https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_960_720.jpg"
                alt="Avatar of Author"
              />
              <div className="flex-1 px-2">
                <p className="mb-2 text-base font-bold leading-none md:text-xl">
                  Sopan Roy
                </p>
                <p className="text-xs text-gray-700 md:text-base">
                  How to Make a Responsive Navbar in React with Tailwind. <br />
                  <a
                    className="text-green-500 no-underline hover:underline"
                    href="https://www.tailwindtoolbox.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TailwindToolbox.com
                  </a>{" "}
                  <br />
                  <p className=" text-gray-500">
                    This blog template is avaialble over there. Go check it out!
                  </p>
                </p>
              </div>
              <div className="justify-end">
                <button className="rounded-full border border-gray-500 bg-transparent py-2 px-4 text-xs font-bold text-gray-500 hover:border-green-500 hover:text-green-500">
                  <a
                    href="https://tilda-chat-app.web.app/register"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My Chat App
                  </a>
                </button>
              </div>
            </div>

            <hr className="mx-4 mb-8 border-b-2 border-gray-400" />
          </div>
          {/* FOOTER / ABOUT HERE */}
          <footer className="border-t border-gray-400 bg-white shadow">
            <div className="container mx-auto flex max-w-4xl py-8">
              <div className="mx-auto flex w-full flex-wrap">
                <div className="flex w-full md:w-1/2 ">
                  <div className="px-8">
                    <h3 className="font-bold text-gray-900">About</h3>
                    <p className="py-4 text-sm text-gray-600">
                      I am a simple boy with passion for anything related to
                      Computers, I am new into Coding, and loving every bit of
                      it. Right now, focused on Front-end development, check out
                      my other Projects by going over to the Projects section.
                    </p>
                  </div>
                </div>

                <div className="flex w-full md:w-1/2">
                  <div className="px-8">
                    <h3 className="font-bold text-gray-900">Social</h3>
                    <ul className="list-reset items-center pt-3 text-sm">
                      <li>
                        <a
                          className="hover:text-underline inline-block py-1 text-gray-600 no-underline hover:text-gray-900"
                          href="https://github.com/sopan619"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-underline inline-block py-1 text-gray-600 no-underline hover:text-pink-500"
                          href="https://www.instagram.com/sopanroy/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-underline inline-block py-1 text-gray-600 no-underline hover:text-orange-500"
                          href="https://www.reddit.com/user/Kakarot4life"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Reddit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
