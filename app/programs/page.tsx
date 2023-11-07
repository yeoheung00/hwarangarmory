'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import db from 'db/programs.json'

const Subject = ({ title, cover }: { title: string, cover: string }) => {
  return (
    <div className='w-[calc((100%_-_40px)_/_3)] mb-16'>
      <img className='w-full h-auto' src={cover} alt={title}></img>
      <p className='w-full text-center text-white p-4 text-lg'>{title}</p>
    </div>
  )
}

export default function Page() {
  const [type, setType] = useState(50);
  const handlerClickWarrior = () => {
    setType(100);
  }
  const handlerClickCivilian = () => {
    setType(0);
  }
  const handlerClickBack = () => {
    setType(50);
  }
  useEffect(() => {
    console.log(type);
  }, [type])
  return (
    <main className="w-screen h-screen bg-black">
      <div className='w-full h-[160px] bg-black' />

      <div className='w-full h-[calc(100%_-_160px)] relative overflow-hidden'>

        <div className='w-full h-full flex relative'>
          <img className='w-full h-full object-cover object-left absolute top-0 left-0 index-[-111]' src='programs/civilian.webp' alt='civilian' style={{ opacity: type === 50 ? '100%' : '40%' }} />
          <div className=' flex-1 relative'>
            <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]  '>
              <div className='relative' onClick={handlerClickCivilian}>
                <div className='w-96 h-0 pb-[calc(24rem_/_17_*_8)] opacity-70' style={{
                  maskImage: 'url("/char/c.svg")',
                  WebkitMaskImage: 'url("/char/c.svg")',
                  backgroundColor: 'var(--blue)'
                }} />
                <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl text-white whitespace-nowrap'>For Civilian</div>
              </div>
              <div className='flex justify-center overflow-hidden transition-[height] index-100' style={{ height: type !== 0 ? '0px' : '80px' }}>
                <button className='mt-8 px-8 h-12 leading-[3rem] text-xl text-white border-[1px] border-white hover:bg-white hover:text-black transition-[all] cursor-pointer' onClick={handlerClickBack}>Back</button>
              </div>
            </div>
          </div>
          <div className='flex-1 relative flex flex-col justify-center'>
            <div className='w-full px-12 flex flex-wrap gap-5 relative'>
              {
                db.civilian.map((program, idx) => (
                  <Subject key={idx} title={program.title} cover={`/programs/civilian/${program.cover}`} />
                ))
              }

            </div>
            <div className='w-full index-10 flex justify-center'>
              <div className='bg-[--blue] w-8 h-8 leading-8 text-white text-center'>1</div>
            </div>
          </div>
        </div>

        <div className='absolute top-0 right-0 h-full bg-black transition-[width] overflow-hidden' style={{
          width: type + "%"
        }}>
          <div className='w-screen h-full absolute right-0 flex'>
            <img className='absolute top-0 right-0 w-full h-full object-cover object-right' src='programs/warrior.webp' alt='expert' style={{ opacity: type === 50 ? '100%' : '40%' }} />

            <div className='flex-1 relative flex flex-col justify-center'>
              <div className='w-full px-12 flex flex-wrap gap-5 relative'>
                {
                  db.civilian.map((program, idx) => (
                    <Subject key={idx} title={program.title} cover={`/programs/civilian/${program.cover}`} />
                  ))
                }

              </div>
              <div className='w-full index-10 flex justify-center'>
                <div className='bg-[--red] w-8 h-8 leading-8 text-white text-center'>1</div>
              </div>
            </div>
            <div className=' flex-1 relative'>
              <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <div className='relative' onClick={handlerClickWarrior}>
                  <div className='w-96 h-0 pb-[calc(24rem_/_17_*_8)] opacity-70 bg-[--red]' style={{
                    maskImage: 'url("/char/c.svg")',
                    WebkitMaskImage: 'url("/char/w.svg")'
                  }} />
                  <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl text-white whitespace-nowrap'>For Warrior</div>
                </div>
                <div className='flex justify-center overflow-hidden transition-[height] index-100' style={{ height: type !== 100 ? '0px' : '80px' }}>
                  <button className='mt-8 px-8 h-12 leading-[3rem] text-xl text-white border-[1px] border-white hover:bg-white hover:text-black transition-[all] cursor-pointer' onClick={handlerClickBack}>Back</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}