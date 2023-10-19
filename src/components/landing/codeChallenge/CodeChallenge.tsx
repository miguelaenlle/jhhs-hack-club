import { motion } from "framer-motion";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const CodeChallenge: React.FC<{}> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={"relative bg-slate-100 h-screen overflow-hidden font-Poppins"}
    >
      <div className={"absolute z-10 w-full pb-20"}>
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
                <div>Lorem Ipsum - 5000</div>
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
                <div>Lorem Ipsum - 4500</div>
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
                <div>Lorem Ipsum - 3000</div>
              </div>
              <div
                className="flex gap-5 text-xl width-full justify-between"
                style={{
                  opacity: "40%",
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
                  4
                </div>
                <div>Lorem Ipsum - 1005</div>
              </div>
              <div
                className="flex gap-5 text-xl width-full justify-between"
                style={{
                  opacity: "30%",
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
                  5
                </div>
                <div>Lorem Ipsum - 1002</div>
              </div>
            </div>
            <a
              className="flex gap-2 text-black cursor-pointer"
              href={"/leaderboard"}
            >
              View Full Leaderboard{" "}
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
