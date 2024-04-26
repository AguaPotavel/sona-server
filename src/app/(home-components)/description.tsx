import React from "react";

import { Button } from "../_shared/components/ui/button";
import HomeAnimation from "./homeAnimation";
import useMeasure from "react-use-measure";

import { motion } from "framer-motion"

export default function HomeDescription() {
  const [ref, { width, height }] = useMeasure();

  const handleDownloadLastVersion = () => {
    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
  };

  return (
    <section className="h-svh w-full justify-center items-center flex flew-row px-14 lg: xl:px-24 gap-10 font-body">
      <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0, transition: { delay: 0, duration: .3}}} className="text-5xl justify-center flex flex-1 flex-col px-4 lg:text-6xl">
        <span className="text-slate-50">
          <strong className="text-indigo-500 font-display bg-slate-50 px-2 mr-2 lg:text-8xl">Sona</strong>, dando voz as suas
        </span>
        <span className="text-slate-100 text-5xl lg:text-6xl bg-indigo-500 w-fit px-2 mr-2 font-bold">
          Rankeadas!
        </span>
        <span className="text-xl lg:text-3xl text-indigo-500 mb-10 lg:mb-4">Deixe os pings pra tras!</span>

        <Button className="lg:w-40 " variant={"default"} onClick={handleDownloadLastVersion}>
          Download Grátis
        </Button>
      </motion.div>

      <div
        ref={ref}
        className="hidden text-6xl min-h-[600px] max-w-[800px] flex-1 flex flex-col items-center justify-center px-4 lg:flex"
      >
        <HomeAnimation />
      </div>
    </section>
  );
}
