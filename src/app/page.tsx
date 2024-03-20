"use client";

import Image from "next/image";
import { SonaLogo } from "./_shared/components/ui/sona-logo";
import { Button } from "./_shared/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LazyYoutube } from "@/app/get-started/page";

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
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <section className="flex flex-row flex-1 w-full gap-4">
        <section className="flex flex-col flex-1 justify-center items-center ">
          <SonaLogo />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1.2,
              y: 0,
              transition: { duration: 1, type: "spring" },
            }}
            className="my-4 max-w-[500px]"
            title="Welcome to your new project!"
          >
            Jogue partidas de maneira mais coordenada!
          </motion.h1>

          <div className="flex flex-row gap-2">
            <Button className="mt-4" onClick={handleDownloadLastVersion}>
              Baixar última versão
            </Button>

            <Button className="mt-4" variant={"link"} onClick={handleConnectDiscord}>
              Discord
            </Button>
          </div>
        </section>

        <section className="hidden xl:flex xl:w-full flex-1 xl:justify-center xl:items-center">
          <LazyYoutube videoId="F6JpOxfMgvs?si=q7HmUiFRIrGRjKyE" />
        </section>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, type: "spring" },
        }}
        className="flex flex-col w-full justify-center items-center max-w-[800px]"
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
    </main>
  );
}
