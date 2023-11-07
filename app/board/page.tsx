'use client'
import Title from "@/components/title";
import { useMemo, useState } from "react";
import db from 'db/board.json'

const Item = ({ idx, title, author, date }: { idx: number, title: string, author: string, date: string }) => {
  return (
    <div className="flex text-white h-16 items-center border-b-[1px] border-white">
      <div className="w-16 text-center">{idx}</div>
      <div className="pl-4 flex-1">{title}</div>
      <div className="w-32 text-center">{author}</div>
      <div className="w-32 text-center">{date}</div>
    </div>
  )
}

export default function Page() {
  const [category, setCategory] = useState<keyof typeof db>("Notice");
  const handlerClick = (cat: keyof typeof db) => {
    setCategory(cat);
  }
  const list = useMemo(() => {
    type type = keyof typeof db;
    return db[category] || [];
  }, [category])
  return (
    <main className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto mt-[160px] p-5">
        <div>
          <Title text={category} color="var(--red)" />
        </div>
        <div className="flex gap-5 py-8">
          <button className="px-4 py-2 bg-transparent border-[1px] text-white border-white" style={{ color: category === "Notice" ? "black" : "white", backgroundColor: category === "Notice" ? "white" : "transparent" }} onClick={(e) => { handlerClick("Notice") }}>Notice</button>
          <button className="px-4 py-2 bg-transparent border-[1px] text-white border-white" style={{ color: category === "Review" ? "black" : "white", backgroundColor: category === "Review" ? "white" : "transparent" }} onClick={(e) => { handlerClick("Review") }}>Review</button>
          <button className="px-4 py-2 bg-transparent border-[1px] text-white border-white" style={{ color: category === "Inquiry" ? "black" : "white", backgroundColor: category === "Inquiry" ? "white" : "transparent" }} onClick={(e) => { handlerClick("Inquiry") }}>Inquiry</button>
          <button className="px-4 py-2 bg-transparent border-[1px] text-white border-white" style={{ color: category === "Request" ? "black" : "white", backgroundColor: category === "Request" ? "white" : "transparent" }} onClick={(e) => { handlerClick("Request") }}>Request</button>
        </div>
        <div className="h-[1px] w-full mb-8 bg-white opacity-40" />
        <div className="w-full">

          <div className="flex text-white h-16 items-center border-b-[1px] border-white">
            <div className="w-16 text-center">Num</div>
            <div className="pl-4 flex-1">Title</div>
            <div className="w-32 text-center">Author</div>
            <div className="w-32 text-center">Date</div>
          </div>
          {
            list.map((item, idx) => (
              <Item key={idx} idx={idx + 1} title={item.title} author={item.author} date={item.date} />
            ))
          }
        </div>
      </div>
    </main>
  )
}