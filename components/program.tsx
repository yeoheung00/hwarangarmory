'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function () {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    setHeight(document.documentElement.scrollHeight);
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <div className="border-y-4 border-[--red] w-full h-[400px] mt-32 overflow-hidden relative bg-[--red]">
      <img className=" w-full h-full object-cover opacity-80" src="/program.jpg" alt='program' style={{
        objectPosition: `50% ${100 - (scrollPosition / height * 100)}%`
      }} />
      <div className="translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute flex flex-col justify-center items-center gap-8">
        <div className="text-center text-4xl leading-normal" style={{ textShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>We are providing Effective Programs<br />for Civilians & Warriors</div>
        <Link href='/programs' className="px-4 py-2 border-[1px] border-white hover:bg-white hover:text-black transition-[all] bg-[#00000044] text-lg ">Try Our Programs</Link>
      </div>
    </div>
  )
}