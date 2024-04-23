import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";

import { FaMicrophone } from "react-icons/fa6";
import { SiLeagueoflegends, SiDiscord, SiProbot } from "react-icons/si";

export default function HomeAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        setShow(true);
      }, 1000);
    }, 25000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full flex flex-1 justify-center flex-col gap-4 p-2"
          >
            <Action
              text="Partida iniciada"
              Icon={SiLeagueoflegends}
              delay={0}
            />
            <Action text="Bot cria salas dos times" Icon={SiProbot} delay={5} />
            <Action text="Entre no discord!" Icon={SiDiscord} delay={11} />
            <Action text="Aproveite a comunicação!" Icon={FaMicrophone} delay={17} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Action({
  text,
  Icon,
  delay,
}: {
  text: string;
  Icon: IconType;
  delay: number;
}) {
  const variantsMain = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };

  const variantsSub = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        delay: delay + 1,
        duration: 4,
      },
    },
    exit: {},
  };

  return (
    <motion.div
      variants={variantsMain}
      initial={variantsMain.initial}
      animate={variantsMain.animate}
      exit={"exit"}
      className="flex w-full h-24 justify-start items-center rounded-md bg-slate-800 px-8 relative overflow-hidden"
    >
      <Icon className="z-30 mr-1" />
      <span className="flex flex-1 justify-center text-3xl z-30 font-bold text-center m-w-[100px]">{text}</span>
      <motion.div
        variants={variantsSub}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        className="bg-red w-full bg-indigo-500 absolute h-full left-0 h-30 z-10 origin-bottom-left"
      ></motion.div>
    </motion.div>
  );
}
