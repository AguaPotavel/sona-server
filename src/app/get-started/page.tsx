"use client";

import { Button } from "../_shared/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

export const LazyYoutube = ({ videoId }: { videoId: string}) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref} className="w-full h-full flex justify-center items-center">
      {show && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/F6JpOxfMgvs?si=q7HmUiFRIrGRjKyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

export default function Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-row w-full justify-start items-center max-w-[800px]">
        <Button className="mt-4" variant={"secondary"} onClick={handleGoBack}>
          Voltar para home
        </Button>
      </section>

      <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
        <h1 className="my-4">
          <span className="text-2xl font-bold">Como utilizar</span>
        </h1>

        <div className="w-full h-full flex-1 flex justify-center items-center">
            <LazyYoutube videoId="F6JpOxfMgvs?si=q7HmUiFRIrGRjKyE"/>
        </div>
      </section>
    </main>
  );
}
