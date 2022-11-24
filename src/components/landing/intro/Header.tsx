import React from "react"
import { motion } from "framer-motion"

const Header: React.FC<{}> = (props) => {
    return (
        <div>

            <motion.h3
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={"text-5xl font-bold text-white font-Poppins text-center mb-3"}>
                Welcome to
            </motion.h3>
            <motion.h1
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={
                    "text-6xl font-bold text-orange-500 font-Poppins text-center"
                }
            >
                JHHS Hack Club
                <a className={"text-white"}>.</a>
            </motion.h1>
        </div>
    );
}
export default Header