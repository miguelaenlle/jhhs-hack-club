import * as React from "react";
import WorkshopsHeader from "../../workshops/WorkshopsHeader";
import BackButton from "../../shared/BackButton";

const Leaderboard: React.FC<{}> = (props) => {
  return (
    <div
      className={
        "bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen font-Poppins"
      }
    >
      <BackButton link={"/"} />
      <div className={"max-w-5xl mx-auto my-5 mt-10 px-0 md:px-10"}>
        <h3
          className={
            "flex gap-1 items-center text-2xl text-orange-500 font-bold font-Poppins"
          }
        >
          Code Challenge Leaderboard{" "}
          <div
            title="The Hack Club Code Challenge is a challenge that gives Hack Club
          members an opportunity to compete in a friendly challenge every 2-4
          weeks. Every time there is a new challenge, you are given a prompt and
          you can build a project based off of it. Any skill level can compete
          and winners are decided every month. Prizes may include merch and
          swag."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
        </h3>
        <br></br>
        <div className="text-white text-l">
          <h2>
            <span className="font-bold">Current Prompt:</span> Build a website
            or project to help students learn more effectively
          </h2>
          <h2>
            <span className="font-bold">Examples:</span> To-Do List, Homework
            Helper, Schedule Planner
          </h2>
        </div>
        <br></br>
        <div
          className="flex flex-col gap-5 p-5"
          style={{ backgroundColor: "white", borderRadius: "5px" }}
        >
          <div className="text-bold text-xl">
            <span
              style={{ color: "orange", fontWeight: "bold" }}
              className="text-lg"
            >
              //{" "}
            </span>
            Leaderboard Coming Next Meetup!
          </div>

          {/* <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <div>
                <h2 className="text-bold text-2xl">1</h2>
                <br></br>
                <h2 className="text-xl">Project Name</h2>
              </div>
              <h2 className="text-xl">Lorem Ipsum - 5000</h2>
            </span>
            <div className="flex gap-2 overflow-auto">
              <img
                src="https://images.freeimages.com/image/previews/083/globemapworld-5690037.jpg"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
              <img
                src="https://images.freeimages.com/image/previews/083/globemapworld-5690037.jpg"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
              <img
                src="https://images.freeimages.com/image/previews/083/globemapworld-5690037.jpg"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
              <img
                src="https://images.freeimages.com/image/previews/083/globemapworld-5690037.jpg"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
            </div>
          </div> */}
        </div>
        <br></br>
        <div className="text-white font-bold flex flex-col gap-3">
          <h2 className="text-xl">Coding Resources</h2>

          <span>
            <div className="flex gap-2">
              Learn HTML/CSS:{" "}
              <div
                title="HTML: HQ of the website. It gives you the structure. All the
              files should like to the HTML file."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
            </div>
            <a
              style={{ color: "orange" }}
              href="https://www.codecademy.com/catalog/language/html-css"
            >
              Click Here
            </a>
          </span>
          <span>
            <div className="flex gap-2">
              Learn JavaScript:{" "}
              <div title="JavaScript: Think of this as the functionality of a website. For example, you code the button in HTML and tell the button what to do in JavaScript.">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
            </div>
            <a
              style={{ color: "orange" }}
              href="https://www.codecademy.com/learn/introduction-to-javascript"
            >
              Click Here
            </a>
          </span>
          <span>
            <div className="flex gap-2">
              Learn PHP:{" "}
              <div title="PHP: Think of this as the functionality of a website. For example, you code the button in HTML and tell the button what to do in PHP. Like JavaScript but a different language.">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
            </div>
            <a
              style={{ color: "orange" }}
              href="https://www.codecademy.com/learn/paths/php-skill"
            >
              Click Here
            </a>
          </span>
          <br></br>
        </div>{" "}
      </div>
    </div>
  );
};
export default Leaderboard;
