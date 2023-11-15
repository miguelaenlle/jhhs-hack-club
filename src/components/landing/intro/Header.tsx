import React from "react"
import { motion } from "framer-motion"

const Header: React.FC<{}> = (props) => {
    return (
        <div>

            <motion.h3
                initial={{ opacity: 0, y: -20, scale: 1.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={"text-5xl md:text-8xl font-bold text-orange-600 font-Poppins text-center mb-1 sm:mb-3"}>
                Welcome to
            </motion.h3>
            <motion.h1
                initial={{ opacity: 0, y: -20, scale: 1.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={
                    "text-5xl md:text-8xl font-bold text-white font-Poppins text-center"
                }
            >
                JHHS Hack Club
                <a className={"text-orange-600"}>.</a>
            </motion.h1>
        </div>
    );
}
export default Header