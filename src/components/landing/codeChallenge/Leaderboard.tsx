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
        <div className="text-white text-l space-y-3">
          <h2>
            <span className="font-bold">Current Prompt:</span> Coming Soon
          </h2>
            Helper, Schedule Planner, Website Teaching a Topic, etc.
          </h2>
          <h2>
            <span className="font-bold">Project Due Date:</span> 11/17/2023
          </h2>
        </div>
        <br></br>
        <div
          className="flex flex-col gap-5 p-5"
          style={{ backgroundColor: "white", borderRadius: "5px" }}
        >
          <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <div>
                <h2 className="text-bold text-2xl">1</h2>
                <br></br>
                <h2 className="text-xl">TODO List</h2>
              </div>
              <h2 className="text-xl">Angel Bitsov</h2>
            </span>
            <div className="flex gap-2 overflow-auto">
              <img
                src="https://media.discordapp.net/attachments/1063658922478682163/1172002769410994197/image4.png?ex=6567f622&is=65558122&hm=900393961444977212d25abd7bea8ed4913d98faa65715672b167afbc7e88b77&=&width=1444&height=1004"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
              <img
                src="https://media.discordapp.net/attachments/1063658922478682163/1172002769708785765/image0.png?ex=6567f623&is=65558123&hm=33eb3c25d9942743a457c7e39b1ce7c9955b90a188e7770dec7bbfacf3bf9cf4&=&width=1444&height=1004"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <div>
                <h2 className="text-bold text-2xl">2</h2>
                <br></br>
                <h2 className="text-xl">1000 Questions</h2>
              </div>
              <h2 className="text-xl">Keenan OH</h2>
            </span>
            <div className="flex gap-2 overflow-auto">
              <img
                src="https://user-images.githubusercontent.com/86394469/277190304-2824087c-9ca3-4e09-b848-165c70988dcb.png"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <div>
                <h2 className="text-bold text-2xl">3</h2>
                <br></br>
                <h2 className="text-xl">Make Your Own Flashcards</h2>
              </div>
              <h2 className="text-xl">Eric Wetzel</h2>
            </span>
            <div className="flex gap-2 overflow-auto">
              <img
                src="https://media.discordapp.net/attachments/1063658922478682163/1174464609088974888/image.png?ex=6567b067&is=65553b67&hm=86c6baae711ff243b5a65ec9eb2b66548b07106487740af97f2b5c65e4e96cf9&=&width=1954&height=1004"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
              <img
                src="https://media.discordapp.net/attachments/1063658922478682163/1174464609340625097/image.png?ex=6567b067&is=65553b67&hm=96d6ccac7c523fc7f087211eea434f1dccb4d8b763183ba932fb0b94c334de26&=&width=1232&height=1004"
                alt="image"
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className="text-white flex flex-col gap-3">
          <h2 className="text-xl font-bold border-b-2 pb-2 border-zinc-600 mb-2">Project Inspiration</h2>
          <p className="text-l">To-Do List</p>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--CL1BDARo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/o96lsrld21tk232kidu4.png" className={"max-w-2xl w-full"} />
          <br />
          <p className="text-l">Website teaching a topic (HTML Tags)</p>
          <img src="https://i.ibb.co/8r6kGvd/Untitled-3.png" className={"max-w-2xl w-full"} />
          <a href="https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-html/a/quick-tip-html-tags" target="_blank" className="text-blue-500">Quick tip: HTML Tags (Khan Academy)</a>
          <br />
          <p className="text-l">Schedule Planner</p>
          <img src="https://neatandtidydesign.com/wp-content/uploads/2021/01/Daily-Planner_Sunday__Letter1.jpg" className={"max-w-2xl w-full"}/>
          <br />
          <br></br>
        </div>

        <div className="text-white flex flex-col gap-3">
          <h2 className="text-xl font-bold w-full border-b-2 pb-2 border-zinc-600 mb-2">How to complete the Code Challenge:</h2>
          <p className="text-l">Ensure your project meets the following requirements:</p>
          <ul className="space-y-3 mt-5">
            <li>• 🔨 Functions well enough that the site works for a demo <i className={"text-gray-400"}>(Generally works; some bugs are OK)</i></li>
            <li>• 🎨 Shows creativity through a theme <i className={"text-gray-400"}>(Has some colors; not just default HTML)</i></li>
            <li>• 🎯 Has a target audience <i className={"text-gray-400"}>(1st graders, freshmen, seniors, JHHS students, etc.)</i></li>
            <li className={"pb-1"}>• 📈 Has a clear goal that helps the target audience <i className={"text-gray-400"}>(to help track homework, to teach math, etc.)</i></li>
          </ul>
          <br></br>
        </div>        
        <div className="text-white flex flex-col gap-3">
          <h2 className="text-xl font-bold border-b-2 pb-2 border-zinc-600 mb-2">Completion Prizes</h2>
          <p className="text-l">All members who complete the Code Challenge will receive:</p>
          <ul className="space-y-3 mt-5">
            <li>• 👕 The Hack Club T-Shirt</li>
            <li>• 💯 Exclusive Hack Club Stickers</li>
            <li>• 💬 The Code Challenge Completionist Discord Role</li>
            <li>• 🌐 Featured spot on the Hack Club website!</li>
          </ul>

          <br></br>
        </div>
        <div className="text-white flex flex-col gap-3">
          <h2 className="text-xl border-b-2 pb-2 border-zinc-600 mb-2 font-bold">How to get started</h2>
          <p className="text-l">• To get started, we recommend first sketching out your project idea on Notability or paper.</p>
          <p className="text-l">• Afterward, we recommend using <a href="https://replit.com" className={"text-blue-500"} target="_blank">replit.com</a> to build your website.</p>
          <p className="text-l text-zinc-300 ml-2">You may also use tools outside of Replit (e.x. Xcode, VSCode) and other frameworks/languages (Swift, React, etc).</p>
          <p className="text-l">• While coding, if you're wondering how to build something, Google it or call a workshops volunteer over!</p>
          <p className="text-l">• Also, check out our resources below for additional support.</p>
          <br/>

          
          <h2 className="text-xl border-b-2 pb-2 border-zinc-600 mb-2 font-bold">Great resources</h2>
          <p className="text-l">• MDN's Getting Started with the Web Tutorial is a great refresher on HTML and CSS</p>
          <p className="text-l ml-5">• Note: We recommend using Replit's <a href="https://repl.it/languages/html" className={"text-blue-500"} target="_blank">HTML/CSS/JS starter project</a> while following this multi-part tutorial.</p>
          <p className="text-l ml-5">• Part 1 (start here): <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" className={"text-blue-500"} target="_blank">HTML Basics</a></p>
          <p className="text-l ml-5">• Part 2: <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" className={"text-blue-500"} target="_blank">CSS Basics</a></p>
          <p className="text-l ml-5">• Part 3: <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" className={"text-blue-500"} target="_blank">JavaScript Basics</a></p>
          <p className="text-l">• HTML Tag Cheat Sheet: <a href="https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet" className={"text-blue-500"} target="_blank">Link</a></p>
          <p className="text-l">• Here are common CSS style properties: <a href="http://web.simmons.edu/~grabiner/comm244/weekthree/css-basic-properties.html" className={"text-blue-500"} target="_blank">Link</a></p>
          <p className="text-l">• Common CSS font list: <a href="https://www.w3.org/Style/Examples/007/fonts.en.html" className={"text-blue-500"} target="_blank">Link</a></p>
          
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
