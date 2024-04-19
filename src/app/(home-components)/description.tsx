import React from 'react'

import { Button } from '../_shared/components/ui/button'

export default function HomeDescription() {
  return (
    <section className='h-svh w-full items-center flex flew-row px-14 xl:px-24 gap-10'>
        <div className='text-2xl flex flex-1 flex-col px-4 lg:mt-36 lg:text-6xl'>
            <span>
                <strong className='text-indigo-500'>SONA</strong>, 
            dando voz
            </span>
            <span>as suas <strong className='text-primary-500'>Rankeadas</strong>!</span>
            <span className='text-sm lg:text-3xl'>Deixe os pings pra tras!</span>

            <Button className='w-40 mt-4' variant={'secondary'}>Download Grátis</Button>
        </div>

        <div className='hidden text-6xl flex-1 flex flex-col px-4 lg:mt-36 lg:flex'>
            
        </div>
    </section>
  )
}
