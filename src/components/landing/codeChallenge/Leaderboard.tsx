import * as React from "react";
import WorkshopsHeader from "../../workshops/WorkshopsHeader";
import BackButton from "../../shared/BackButton";

const Leaderboard: React.FC<{}> = (props) => {
  return (
    <div
      className={
        "bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen"
      }
    >
      <BackButton link={"/"} />
      <div className={"max-w-5xl mx-auto my-5 mt-10 px-0 md:px-10"}>
        <h3 className={"text-xl text-orange-500 font-bold font-Poppins"}>
          Code Challenge Leaderboard
        </h3>
        <br></br>
        <p className="text-white text-sm">
          The Hack Club Code Challenge is a challenge that gives Hack Club
          members an opportunity to compete in a friendly challenge every 2-4
          weeks. Every time there is a new challenge, you are given a prompt and
          you can build a project based off of it. Any skill level can compete
          and winners are decided every month. Prizes may include merch and
          swag.
        </p>
        <br></br>
        <div className="text-white font-bold text-2xl">
          <h2>Current Prompt: Lorem Ipsum</h2>
          <h2>Due date: The Date</h2>
        </div>
        <br></br>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <h2 className="text-bold text-xl">1</h2>
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
          </div>
          <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <h2 className="text-bold text-xl">1</h2>
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
          </div>
          <div className="flex flex-col width-full text-black bg-white justify-evenly p-5 gap-5">
            <span className="flex justify-between">
              <h2 className="text-bold text-xl">1</h2>
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
          </div>
        </div>
        <br></br>
        <div className="text-white font-bold flex flex-col gap-3">
          <h2 className="text-xl">Resources</h2>
          <span>
            Learn HTML/CSS:{" "}
            <a
              style={{ color: "orange" }}
              href="https://www.codecademy.com/catalog/language/html-css"
            >
              Click Here
            </a>
          </span>
          <span>
            Learn JavaScript:{" "}
            <a
              style={{ color: "orange" }}
              href="https://www.codecademy.com/learn/introduction-to-javascript"
            >
              Click Here
            </a>
          </span>
          <span>
            Learn Python:{" "}
            <a
              style={{ color: "orange" }}
              href="https://www.w3schools.com/python/"
            >
              Click Here
            </a>
          </span>
          <span>
            Learn PHP:{" "}
            <a
              style={{ color: "orange" }}
              href="https://www.codecademy.com/learn/paths/php-skill"
            >
              Click Here
            </a>
          </span>
        </div>{" "}
      </div>
    </div>
  );
};
export default Leaderboard;
