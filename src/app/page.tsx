"use client";

import { SonaLogo } from "./_shared/components/ui/sona-logo";
import { Button } from "./_shared/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LazyYoutube } from "@/app/_shared/components/lazyYoutube";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  const handleDownloadLastVersion = () => {
    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
  };

  const handleConnectDiscord = () => {
    window.open("https://discord.gg/TUMcxmVT3V");
  };

  const handleOpenGithub = () => {
    window.open("https://github.com/AguaPotavel/sona-voice-app");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8">
      <div className="flex w-full justify-between items-center p-8">
        <div>
          <span className="text-4xl font-bold">SONA</span>
        </div>

        <div className="flex flex-row gap-2">
          <Button className="mt-4" onClick={handleDownloadLastVersion}>
            Baixar última versão
          </Button>
          <Button
            className="mt-4"
            variant={"link"}
            onClick={handleConnectDiscord}
          >
            Discord
          </Button>
        </div>
      </div>

      <section className="flex flex-row flex-1 w-full gap-4 items-center justify-center">
        <section className="max-w-[900px] flex w-9/12 flex-1 justify-center items-center">
          <LazyYoutube videoId="F6JpOxfMgvs?si=q7HmUiFRIrGRjKyE" />
        </section>
      </section>

      <section className="flex flex-col flex-1 w-full min-h-screen gap-4 items-center justify-center bg-slate-900">
        <section className="flex flex-col justify-center items-start p-24">
          <div className="flex justify-center items-center p-4 w-full">
            <SonaLogo />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1.2,
              y: 0,
              transition: { duration: 1, type: "spring" },
            }}
            className="text-3xl "
            title="Sona description"
          >
            Conheça a <span className="text-indigo-500 font-bold">SONA</span>, a
            maneira mais simples de unir jogadores de League of Legends em salas
            de áudio no Discord. <br />
            <br /> Nosso aplicativo open source cria salas dinâmicas
            automaticamente, conectando jogadores com base na partida em curso.{" "}
            <br />
            <br />
            Desfrute de uma comunicação eficaz, mesmo sem conhecer seus
            companheiros de equipe. Diga adeus às partidas silenciosas e
            experimente agora a{" "}
            <span className="text-indigo-500 font-bold">SONA</span>, para uma
            experiência de jogo colaborativa e empolgante como nunca antes!
          </motion.h1>
        </section>

        <div className="flex flex-row gap-2">
          <Button className="mt-4" onClick={handleDownloadLastVersion}>
            Experimente Grátis
          </Button>
          <Button className="mt-4" variant={"link"} onClick={handleOpenGithub}>
            github
          </Button>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          className="flex flex-col w-full justify-center items-center max-w-[800px] mt-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, type: "spring" },
            }}
            className="text-2xl font-bold"
          >
            Como funciona?
          </motion.h2>

          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[600px] md:flex-row">
            <Button
              className="mt-4 flex-1"
              variant={"link"}
              onClick={() => handleNavigate("/get-started")}
            >
              Como usar?
            </Button>
            <Button
              className="mt-4 flex-1"
              variant={"link"}
              onClick={() => handleNavigate("/about")}
            >
              Sobre
            </Button>
            <Button
              className="mt-4 flex-1"
              variant={"link"}
              onClick={() => handleNavigate("/ask")}
            >
              Perguntas frequentes
            </Button>
          </div>
        </motion.section>
      </section>
    </main>
  );
}
