"use client";

import { Button } from "../_shared/components/ui/button";
import { useRouter } from "next/navigation";
import { LazyYoutube } from "@/app/_shared/components/lazyYoutube";

export default function Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 items-center justify-between p-24">
      <section className="flex flex-row w-full justify-start items-center max-w-[800px]">
        <Button className="mt-4" variant={"secondary"} onClick={handleGoBack}>
          Voltar para home
        </Button>
      </section>

      <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
        <h1 className="my-4">
          <span className="text-2xl font-bold">Veja esse video demo:</span>
        </h1>

        <div className="w-full h-full flex-1 flex justify-center items-center">
            <LazyYoutube videoId="F6JpOxfMgvs?si=q7HmUiFRIrGRjKyE"/>
        </div>
      </section>
    </main>
  );
}
