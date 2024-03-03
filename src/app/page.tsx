"use client"

import Image from "next/image";
import { Button } from "./_shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  }

  const handleDownloadLastVersion = () => {
    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
  }

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
      <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={350}
          height={150}
          loading={"lazy"}
        />
        <h1 className="my-4 max-w-[500px]" title="Welcome to your new project!">
          Jogue partidas de maneira mais coordenada!
        </h1>

        <Button className="mt-4" onClick={handleDownloadLastVersion}>Baixar última versão</Button>
      </section>

      <section className="flex flex-col w-full justify-center items-center max-w-[800px]">
        <h2 className="text-2xl font-bold">Como funciona?</h2>

        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[600px] md:flex-row">
          <Button className="mt-4 flex-1" variant={"link"} onClick={() => handleNavigate("/get-started")}>Como usar?</Button>
          <Button className="mt-4 flex-1" variant={"link"} onClick={() => handleNavigate("/about")}>Sobre</Button>
          <Button className="mt-4 flex-1" variant={"link"} onClick={() => handleNavigate("/ask")}>Perguntas frequentes</Button>
        </div>
      </section>
    </main>
  );
}
