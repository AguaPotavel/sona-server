import React from "react";

export default function SonaInfo() {
  return (
    <section className="min-svh h-fit w-full flex flew-col items-center justify-center flex-wrap py-10 px-14 xl:px-24 gap-4">
      <h1 className="font-bold text-6xl">
        Oque é Sona<strong className="text-indigo-600">?</strong>
      </h1>

      <div className="w-full sm:w-5/6 p-4 text-sm sm:text-xl flex flex-col gap-2">
        <span>
          <span className="text-indigo-500 font-bold">SONA</span> é
          maneira mais simples de unir jogadores de League of Legends em salas
          de áudio no Discord. criando salas dinâmicas
          automaticamente, conectando jogadores com base na partida em curso.
        </span>

        <span>
          Desfrute de uma comunicação eficaz, mesmo sem conhecer seus
          companheiros de equipe. Diga adeus às partidas silenciosas e
          experimente agora a{" "}
          <span className="text-indigo-500 font-bold">SONA</span>, para uma
          experiência de jogo colaborativa e empolgante como nunca antes!
        </span>
      </div>
    </section>
  );
}
