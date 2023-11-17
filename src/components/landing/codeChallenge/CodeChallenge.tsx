import { motion } from "framer-motion";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const CodeChallenge: React.FC<{}> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={"relative bg-slate-100 overflow-hidden font-Poppins"}
    >
      <div
        className={
          "flex flex-col py-16 md:py-32 items-center justify-center h-full w-full "
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className={"flex flex-col w-6/12 gap-16"}
        >
          <span className="flex justify-between text-black font-bold text-4xl">
            Code Challenge
            <span style={{ color: "orange", fontWeight: "bold" }}>
              {"</>"}
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-bold text-l">
              Prompt: Build a website or project to help students learn more
              effectively
              </span>
              {/* <span className="text-bold text-sm">
                Examples: To-Do List, Homework Helper, Schedule Planner
              </span> */}
              <div
                className="w-full"
                style={{ border: "1px solid black" }}
              ></div>
            </div>
            <div className="flex flex-col text-black gap-12">
              <div className="flex gap-5 text-xl width-full justify-between">
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    color: "black",
                  }}
                  className="flex items-center justify-center font-bold"
                >
                  1
                </div>
                <div>Angel Bitsov</div>
              </div>

              <div
                className="flex gap-5 text-xl width-full justify-between"
                style={{ opacity: "60%" }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    color: "black",
                  }}
                  className="flex items-center justify-center font-bold"
                >
                  2
                </div>
                <div>Keenan OH</div>
              </div>

              <div
                className="flex gap-5 text-xl width-full justify-between"
                style={{
                  opacity: "50%",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    color: "black",
                  }}
                  className="flex items-center justify-center font-bold"
                >
                  3
                </div>
                <div>Eric Wetzel</div>
              </div>
            </div>
          </div>
          <a
            className="flex gap-2 text-black cursor-pointer"
            href={"/leaderboard"}
          >
            View Full Leaderboard and Information{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default CodeChallenge;
