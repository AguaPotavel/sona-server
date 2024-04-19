"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "../components/ui/button";

import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();

  const handleNavigate = (route: string, external: boolean = false) => {
    if(external) return window.open(route)

    router.push(route);
  };

  return (
    <div className="flex flex-col w-full min-h-[200px] p-14 xl:px-24 bg-gradient-to-b from-slate-950 to-[#000] gap-4">
      <div className="w-full flex flex-wrap justify-between items-center h-fit p-4 rounded-xl gap-2">
        <div>
          <span className="text-sm font-bold lg:text-2xl">SONA</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span>Quer contribuir?</span>
          <Button>Fale conosco</Button>
        </div>
      </div>

      <div className="w-full flex flex-wrap  justify-between items-center h-fit p-4 sm:flex-nowrap">
        <div className="w-full flex flex-1 justify-start items-center h-fit rounded-xl gap-2">
          <Button className="rounded-full h-12 w-12" variant={"outline"}>
            <FaTwitter />
          </Button>

          <Button
            className="rounded-full h-12 w-12"
            variant={"outline"}
            onClick={() => handleNavigate("https://discord.gg/TUMcxmVT3V", true)}
          >
            <FaDiscord />
          </Button>

          <Button
            className="rounded-full h-12 w-12"
            variant={"outline"}
            onClick={() => handleNavigate("https://github.com/AguaPotavel/sona-voice-app", true)}
          >
            <FaGithub />
          </Button>
        </div>

        <div className="w-full flex justify-end items-center h-fit rounded-xl gap-2">
          <Button
            variant={"link"}
            onClick={() => handleNavigate("/get-started")}
          >
            Como usar?
          </Button>
          <Button variant={"link"} onClick={() => handleNavigate("/about")}>
            Sobre
          </Button>
          <Button variant={"link"} onClick={() => handleNavigate("/ask")}>
            Perguntas frequentes
          </Button>
        </div>
      </div>
    </div>
  );
}
