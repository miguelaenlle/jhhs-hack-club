import { motion } from "framer-motion";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const CodeChallenge: React.FC<{}> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={"relative bg-slate-100 overflow-hidden font-Poppins"}
    >
      <div className={"w-full pb-20"}>
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
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-bold text-sm">
                Here are the completionists of the First Hack Club Code Challenge!
              </span>
              <div
                className="w-full"
                style={{ border: "1px solid black" }}
              ></div>
            </div>
            <div className="flex flex-col text-black gap-5">
              <div className="flex gap-5 text-xl width-full justify-start">
                <div>Angel Bitsov</div>
              </div>

              <div
                className="flex gap-5 text-xl width-full justify-start"
                style={{ opacity: "60%" }}
              >
                <div>Keenan Nguyen</div>
              </div>

              <div
                className="flex gap-5 text-xl width-full justify-start"
                style={{
                  opacity: "50%",
                }}
              >
                <div>Eric Wetzel</div>
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
    </div>
  );
};
export default CodeChallenge;