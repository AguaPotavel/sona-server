import React, { Suspense, useEffect } from "react";

import { Button } from "../_shared/components/ui/button";
import CanvasComponent from "./canvas/canvasComponent";
import useMeasure from "react-use-measure";

export default function HomeDescription() {
  const [ref, { width, height }] = useMeasure();

  const handleDownloadLastVersion = () => {
    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
  };

  return (
    <section className="h-svh w-full justify-center items-center flex flew-row px-14 xl:px-24 gap-10">
      <div className="text-4xl flex flex-1 flex-col px-4 lg:mt-36 lg:text-6xl">
        <span className="text-slate-300">
          <strong className="text-indigo-500">SONA</strong>, dando voz
        </span>
        <span className="text-slate-300">
          as suas <strong className="text-slate-100">Rankeadas</strong>!
        </span>
        <span className="text-xl lg:text-3xl text-slate-500">Deixe os pings pra tras!</span>

        <Button className="w-40 mt-4" variant={"secondary"} onClick={handleDownloadLastVersion}>
          Download Grátis
        </Button>
      </div>

      <div
        ref={ref}
        className="hidden text-6xl min-h-[600px] max-w-[800px] flex-1 flex flex-col items-center justify-center px-4 lg:mt-36 lg:flex"
      >
        <Suspense fallback={<div className="text-indigo-500">carregando...</div>}>
          <CanvasComponent sizes={{ width: width, height: height }} />
        </Suspense>
      </div>
    </section>
  );
}
