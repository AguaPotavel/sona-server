"use client";

import { Button } from "@/app/_shared/components/ui/button";
import { Input } from "@/app/_shared/components/ui/input";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { getAccountInfo } from "@/app/_shared/services/discord";
import { api } from "@/../convex/_generated/api";
import { useMutation, useAction } from "convex/react";
import { useLayoutEffect, useState, useRef } from "react";
import CryptoJs from "crypto-js";

function tokenParam() {
  try {
    const url = window.location.href.replace("#", "?");
    const params = new URLSearchParams(url);
    const token = params.get("access_token");
    return token;
  } catch (e) {
    return null;
  }
}

type Data = {
  discordId: string;
  discordName: string;
  summonerId: number | null;
};

type PageState = "validating" | "creating" | "updating" | "error" | "success";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null);
  const [state, setState] = useState<PageState>("validating");
  const refInput = useRef<HTMLInputElement>(null);

  // @ts-ignore
  const getUser = useAction(api.actions.getUserByDiscordAction);
  const saveDiscord = useMutation(api.users.updateDiscordUser);
  const token = tokenParam();

  async function createUserWithDiscord() {
    const data = await getAccountInfo(token as string);
    setData({
      discordId: data.id,
      discordName: data.username,
      summonerId: null,
    });
    setState("creating");
  }

  async function updateUserWithDiscord() {
    if (refInput.current === null || data === null) return;

    const encrypted = await CryptoJs.AES.decrypt(refInput.current.value, "sona-secret-key")

    if(encrypted === null || encrypted === undefined) {
      setState("error");
      return;
    }

    const summonerId = encrypted.toString(CryptoJs.enc.Utf8);

    setState("updating");

    await saveDiscord({
      summonerId: parseFloat(summonerId),
      discordId: data.discordId,
      discordName: data.discordName,
    });

    const user = await getUser({ discordId: data.discordId });

    if (user === null) {
      setState("error");
    } else {
      setState("success");
    }
  }

  useLayoutEffect(() => {
    if (token) {
      createUserWithDiscord();
    } else {
      setState("error");
    }

    return () => {};
  }, []);

  const handleUpdate = () => {
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-custom-gray-900">
      {state === "validating" && (
        <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
          <h1
            className="my-4 max-w-[500px]"
            title="Welcome to your new project!"
          >
            Conectando com discord...
          </h1>
        </section>
      )}

      {state === "creating" && (
        <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
          <div className="flex flex-col w-full my-4 max-w-[500px] gap-2 mb-4">
            <h1 className="text-2xl md:text-4xl">
              Conectado com sucesso! Agora informe o token.
            </h1>
            <p className="text-muted-foreground text-sm ">
              O token pode ser encontrado na tela do app.
            </p>
          </div>
          <div className="flex py-2 w-full max-w-[500px] flex-row gap-2">
            <Input ref={refInput} type="password" placeholder="informe o token" />
            <Button onClick={updateUserWithDiscord} className="w-24 h-10">
              Salvar
            </Button>
          </div>
        </section>
      )}

      {state === "updating" && (
        <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
          <h1
            className="my-4 max-w-[500px]"
          >
            Atualizando...
          </h1>
        </section>
      )}

      {state === "error" && (
        <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
          <div className="flex flex-col justify-center w-full my-4 max-w-[500px] gap-2 mb-4">
            <h1
              className="text-2xl md:text-4xl"
            >
              Ocorreu um erro ao conectar com discord.
            </h1>
          </div>
          <div className="flex py-2 w-full justify-center max-w-[500px] flex-row gap-2">
            <Button onClick={handleUpdate} className="h-10">
              Tentar novamente
            </Button>
          </div>
        </section>
      )}

      {state === "success" && (
        <section className="flex flex-col flex-1 w-full justify-center items-center max-w-[800px]">
          <h1
            className="my-4 max-w-[500px]"
            title="Welcome to your new project!"
          >
            Conectado com sucesso! pode fechar esta tela!
          </h1>
        </section>
      )}
    </main>
  );
}
