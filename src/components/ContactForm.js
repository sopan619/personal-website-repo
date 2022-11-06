import React from "react";
import "../contact/cForm.css";
import "../contact/cForm.js";

export default function ContactForm() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-[#041d4bc7] pb-20 md:flex-row md:justify-between md:px-20 md:py-20">
          <div className="text-center md:w-[40%]">
            <h1 className=" py-7 text-lg text-gray-300 md:text-2xl md:font-semibold">
              You can contact me by filling the form.
            </h1>
            <p className="hidden text-gray-400 md:block  ">
              Here are some random stuffs that I will show on larger screens
              only. Cat gets stuck in tree firefighters try to get cat down
              firefighters get stuck in tree cat eats firefighters' slippers
              kitty power ignore the squirrels, you'll never catch them anyway
              for what a cat-ass-trophy! or purr as loud as possible, be the
              most annoying cat that you can, and, knock everything off the
              table. Pretend you want to go out but then don't bite off human's
              toes, yet disappear for four days and return home with an
              expensive injury; bite the vet so catch eat throw up catch eat
              throw up bad birds.
            </p>
            <div className="hidden md:block">
              <div className="address">
                <div className="flex justify-center pt-10 text-xl text-gray-200">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.42,21.815C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.185C12.884,21.598,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.996C3.971,16.44,11.116,21.598,11.42,21.815z M12,4c3.309,0,6,2.691,6,6.004 c0.021,4.438-4.388,8.423-6,9.731C10.389,18.427,5.979,14.442,6,10C6,6.691,8.691,4,12,4z"></path>
                      <path d="M11 14L13 14 13 11 16 11 16 9 13 9 13 6 11 6 11 9 8 9 8 11 11 11z"></path>
                    </svg>
                  </span>
                  <span className="px-2 text-sm">Address</span>
                </div>
                <p className="text-xs text-gray-200">
                  4321 California St, San Francisco, CA 12345
                </p>
              </div>
              <div className="mail">
                <div className="flex justify-center pt-5 text-xl text-gray-200">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                    </svg>
                  </span>
                  <span className="px-2 text-sm">Email</span>
                </div>
                <p className="text-sm text-gray-200">
                  somefancymail@privacy.com
                </p>
              </div>
              <div className="phone">
                <div className="flex justify-center pt-5 text-xl text-gray-200">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594 s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005 c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0 c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005 c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293 C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"></path>
                    </svg>
                  </span>
                  <span className="px-2 text-sm">Phone</span>
                </div>
                <p className="text-xs text-gray-200">+1 123 456 1234</p>
              </div>
            </div>
          </div>
          {/* The form */}
          <form
            className="w-[325px] md:w-[600px]"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbx-KFkQrL9YbuMIoToZuItAPtvhz02QtPhb_Lhwep7Me90CH_lymVqZMQ1hE6lI7e_N/exec"
            id="my-form"
          >
            <h3>GET IN TOUCH</h3>
            <input
              name="Name"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
            <input
              name="Email"
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <input
              name="Phone"
              type="text"
              id="phone"
              placeholder="Your Phone"
              required
            />
            <textarea
              name="Issue"
              type="textarea"
              id="message"
              rows="4"
              placeholder="What is it thats bugging you?"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {/* This is only for phones, the footer */}
          <div className="block md:hidden">
            <div className="address">
              <div className="justify-left flex pb-1 pt-10 text-xl text-gray-200">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.42,21.815C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.185C12.884,21.598,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.996C3.971,16.44,11.116,21.598,11.42,21.815z M12,4c3.309,0,6,2.691,6,6.004 c0.021,4.438-4.388,8.423-6,9.731C10.389,18.427,5.979,14.442,6,10C6,6.691,8.691,4,12,4z"></path>
                    <path d="M11 14L13 14 13 11 16 11 16 9 13 9 13 6 11 6 11 9 8 9 8 11 11 11z"></path>
                  </svg>
                </span>
                <span className="px-2 text-sm">Address</span>
              </div>
              <p className="text-xs text-gray-200">
                4321 California St, San Francisco, CA 12345
              </p>
            </div>
            <div className="mail">
              <div className="justify-left flex pb-1 pt-5 text-xl text-gray-200">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>
                </span>
                <span className="px-2 text-sm">Email</span>
              </div>
              <p className="text-sm text-gray-200">somefancymail@privacy.com</p>
            </div>
            <div className="phone">
              <div className="justify-left flex pb-1 pt-5 text-xl text-gray-200">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594 s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005 c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0 c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005 c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293 C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"></path>
                  </svg>
                </span>
                <span className="px-2 text-sm">Phone</span>
              </div>
              <p className="text-xs text-gray-200">+1 123 456 1234</p>
            </div>
          </div>
        </div>
        <div className="footer bg-[#041d4bc7] pb-2 text-center text-sm font-extralight text-slate-300 ">
          <hr />
          <p className="pt-2">
            {" "}
            © 2022 Sopan Roy | React Wesbite | Element credits to
            Tailwind-Elements | Made and Desgined by ❤ Sopan Roy ❤
          </p>
        </div>
      </div>
    </>
  );
}
