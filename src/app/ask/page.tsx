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
          <span className="text-2xl font-bold">Perguntas Frequentes</span>
        </h1>

        <Accordion type="single" collapsible className="min-w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Como o App funciona?</AccordionTrigger>
            <AccordionContent>
              O app funciona como um mecanismo para você poder se comunicar com
              os players do seu time por voz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Como posso utilizar o app?</AccordionTrigger>
            <AccordionContent>
              Você irá baixar a versão mais recente e instalar, ao iniciar
              quando seu client do league of legends estiver aberto, o app irá
              detectar e você poderá vincular sua conta do discord a ele.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Como eu entro na sala correta da partida?
            </AccordionTrigger>
            <AccordionContent>
              Você só precisará entrar na sala do discord [Em Partida] e o bot
              do discord irá de mover para a respectiva sala do seu time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Oque acontece quando a partida acaba?
            </AccordionTrigger>
            <AccordionContent>
              Após a partida acabar o bot ja irá saber que a partida acabou, nos
              próximos 5 minutos ele irá deletar os canais da partida.
            </AccordionContent>
          </AccordionItem>

          {/* <AccordionItem value="item-5">
            <AccordionTrigger>
              Tive um player tóxico no meu time, oque posso fazer?
            </AccordionTrigger>
            <AccordionContent>
              Após acabar a partida você pode reportar o player tóxico, e o bot
              irá registrar o report e se o player for recorrente iremos avaliar
              e se necessário banir o mesmo, como utilizamos o ID do usuário no lol ele não poderá mais se cadastrar com a mesma conta.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </section>
    </main>
  );
}
