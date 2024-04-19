import React from 'react'

import { LazyYoutube } from "@/app/_shared/components/lazyYoutube";

export default function Video() {
  return (
    <section className='h-svh w-full flex flew-row items-center justify-center px-14 xl:px-24 gap-10'>
        <section className="max-w-[900px] flex w-9/12 flex-1 justify-center items-center z-30">
          <LazyYoutube videoId="F6JpOxfMgvs?si=q7HmUiFRIrGRjKyE" />
        </section>

        <div className='absolute ascpect-square w-2/3 h-2/3 bg-indigo-600/30 blur-2xl'></div>
    </section>
  )
}
