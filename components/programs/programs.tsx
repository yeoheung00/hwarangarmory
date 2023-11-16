'use client'

import programsdb from 'db/programs.json'
import { useState } from "react";

const ProgramItem = ({ current, id, program }: { current: number, id: number, program: typeof programsdb[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full grow basis-[500px] border-[1px] border-white p-5 flex flex-col gap-5 items-start bg-[#00000077]'>
      <h2 className='text-2xl grow'>{program.title}</h2>
      <div className='flex gap-5'>
        <div className='grow text-[#bbbbbb]'>{program.des}</div>
        <div className='flex flex-col gap-2'>
          <button className='h-10 w-28 bg-white text-black hover:bg-[#dfdfdf] cursor-select'>Register</button>
          <button className='h-10 w-28 bg-transparent border-[1px] border-white text-white hover:bg-[#ffffff44] cursor-select'>Add to cart</button>
        </div>
      </div>
      <button className=' text-[#7777ff]' onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Hide time table" : "View time table"}</button>
      <div className='w-full h-64 gap-5' style={{ display: isOpen ? "flex" : "none" }}>
        <div className='grow flex flex-col gap-2'>
          <h3 className='text-xl'>AM</h3>
          <div className='flex flex-col grow'>
            <div className='border-2s basis-[0px] grow-[1] border-t-2 border-[--yellow] text-lg p-1'>09:00 Intro</div>
            <div className='border-2s basis-[0px] grow-[3] border-t-2 border-[--yellow] text-lg p-1'>10:00 Training 1</div>
            <div className='border-2s basis-[0px] grow-[1] border-t-2 border-[--yellow] text-lg p-1'>13:00 AM END</div>
          </div>
        </div>
        <div className='grow flex flex-col gap-2'>
          <h3 className='text-xl'>PM</h3>
          <div className='flex flex-col grow'>
            <div className='border-2s basis-[0px] grow-[2] border-t-2 border-[--blue] text-lg p-1'>14:00 Training 2</div>
            <div className='border-2s basis-[0px] grow-[2] border-t-2 border-[--blue] text-lg p-1'>16:00 Review</div>
            <div className='border-2s basis-[0px] grow-[1] border-t-2 border-[--blue] text-lg p-1'>18:00 PM END</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Programs() {
  const dec = ["S", "M", "T", "W", "T", "F", "S", 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0, 0, 0]
  const [current, setCurrent] = useState(-1);
  return (
    <div className="w-full h-full flex gap-5 p-5 max-w-[1800px] mx-auto">
      <div className='basis-[400px] grow overflow-y-scroll scrollbar-hide'>
        <div className='w-full flex flex-wrap gap-5 items-start'>
          {
            programsdb.map((item, idx) => (
              <ProgramItem current={current} id={idx} program={item} />
            ))
          }
        </div>
      </div>

      <div className="basis-[400px] flex flex-col gap-5">
        <div className='pt-5 border-[1px] border-white bg-[#00000077]'>
          <h2 className='text-2xl text-center mb-5'>DEC</h2>
          <div className='flex flex-wrap gap-1'>
            {
              dec.map((item, idx) => (
                <div className='basis-[50px] grow h-12 flex items-center justify-center' style={{ backgroundColor: idx == 8 + 11 || idx == 15 + 11 ? "var(--red)" : "transparent" }}>{item === 0 ? "" : item}</div>
              ))
            }
          </div>
        </div>
        <div className='p-5 border-[1px] border-white flex flex-col gap-5 grow bg-[#00000077]'>
          <h2 className='text-2xl'>DEC-Schedule</h2>
          <div className='flex border-[1px] border-white gap-5 items-center'>
            <h3 className='bg-[--red] w-12 h-12 text-xl leading-[3rem] text-center'>8</h3>
            <h3 className='text-xl'>Traning 01</h3>
          </div>
          <div className='flex border-[1px] border-white gap-5 items-center'>
            <h3 className='bg-[--red] w-12 h-12 text-xl leading-[3rem] text-center'>15</h3>
            <h3 className='text-xl'>Traning 01</h3>
          </div>
        </div>
      </div>
    </div>
  )
}