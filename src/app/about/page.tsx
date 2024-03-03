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
          <span className="text-2xl font-bold">Sobre</span>
        </h1>

        <Accordion type="single" collapsible className="min-w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              O App é pago, ou algum dia será?
            </AccordionTrigger>
            <AccordionContent>
              O uso do mesmo é gratis e sempre será.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Algum dado meu é salvo?
            </AccordionTrigger>
            <AccordionContent>
              Somente o necessário, registramos o seu ID do discord e seu ID do
              league of legends somente para ter controle de qual player vai
              estar em qual time, para direcionar o usuário do discord para sala
              correta.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Vocês são uma empresa?
            </AccordionTrigger>
            <AccordionContent>
              Na verdade somos apenas 3 amigos, fizemos o app como meio de estudos e solucionar um problema que a Riot aparentemente não se importa, que é a coordenação nas partidas.
            </AccordionContent>
          </AccordionItem>

          {/* <AccordionItem value="item-4">
            <AccordionTrigger>
              ?
            </AccordionTrigger>
            <AccordionContent>
              Após a partida acabar o bot ja irá saber que a partida acabou, nos
              próximos 5 minutos ele irá mover todos os players para a sala de
              espera.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </section>
    </main>
  );
}
