import React from "react";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} className="card            w-80 min-h-96 bg-white/80 rounded-[2.8rem] overflow-hidden text-2xl flex justify-between flex-col items-center">
      <div className="header        w-full p-4  flex flex-col justify-start gap-2 items-center">
        <h1 className="fileIcon    w-full p-2  text-4xl capitalize font-semibold border-b-2 border-gray-500/10">
          file
        </h1>
        <p className="details    w-full p-2 text-justify ">
          {data.desc}
        </p>
      </div>
      <div className="footer     w-full  bg-sky-400flex items-center flex-col gap-2 text-[1.2rem] font-bold justify-center">
        <div className="footer1 w-full flex justify-center items-center">ICON</div>
        <div className={`footer2 w-full flex justify-center ${data.tag.isOpen ? "bg-green-500" : "bg-blue-500"} items-center p-2  uppercase`}>{data.tag.tagTitle}</div>
        </div>
    </motion.div>
  );
}

export default Card;
