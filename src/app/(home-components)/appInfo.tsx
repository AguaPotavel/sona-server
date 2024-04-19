import React, { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { DollarSign, GitFork, Network, DownloadCloud } from "lucide-react";

import { Button } from "../_shared/components/ui/button";

export default function AppInfo() {
  return (
    <section className="min-svh h-fit w-full flex flew-row items-center justify-between flex-wrap py-10 px-14 xl:px-24 gap-4">
      <CardInfo name={"Gratis"} Icon={DollarSign} description={"Aplicativo é grátis e sempre permanecerá!"} />
      <CardInfo name={"OpenSource"} Icon={GitFork} description={"Completamente open-source, este projeto concede total liberdade para análise e modificação no repositório. Sinta-se à vontade para contribuir."} />
      <CardInfo name={"Facil"} Icon={DownloadCloud} description={"Instalação simplificada e guiada, com atualizações automáticas, para uma experiência sem complicações."} />
      <CardInfo name={"Comunicacao"} Icon={Network} description={"Comunica-se diretamente com o cliente do League of Legends, sem necessidade de configurações complicadas. Basta iniciar e aproveitar, sem preocupações."} />
    </section>
  );
}

function CardInfo({
  name,
  Icon,
  description,
}: {
  name: string;
  Icon: LucideIcon;
  description: string;
}): ReactNode {
  return (
    <div className="aspect-square border-2 border-slate-800/40 rounded-xl flex flex-1 flex-col min-w-[200px] max-w-[320px] sm:min-w-[300px] items-center p-4">
      <div className="rounded-full bg-slate-800 flex w-20 h-20 items-center justify-center">
        <Icon />
      </div>

      <div className="flex flex-1 flex-col p-4 w-full justify-center items-center gap-4">
        <div className="text-center">{description}</div>
      </div>
    </div>
  );
}
