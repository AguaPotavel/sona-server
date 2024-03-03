"use client";

import { Button } from "../_shared/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_shared/components/ui/accordion";

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

        <div className="w-full h-full flex justify-center items-center">
            Em Breve
        </div>
      </section>
    </main>
  );
}
