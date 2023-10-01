'use client'

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from './banner.module.css'

export default function Banner() {
  const list = [
    {
      id: 0,
      imgUrl: "/banner01.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 1,
      imgUrl: "/banner02.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl: "/banner03.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl: "/banner04.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 4,
      imgUrl: "/banner05.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: "/banner06.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];
  const displayRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<any>([]);

  let current = 0;

  const handleClickPrev = () => {
    count = 10;
    goPrev();
  }

  const handleClickNext = () => {
    count = 10;
    goNext();
  }

  const select = (direction: number) => {
    let count = direction - current;
    console.log(direction, current, count);
    if (count < 0) count = list.length - 1;
    for (let i = 0; i < count; i++) goNext();
  }

  const goPrev = () => {
    let index = current - 1;
    if (index < 0) index = itemRef.current.length - 1;
    if (displayRef.current) displayRef.current.prepend(itemRef.current[index]);
    if (current > 0) current--;
    else current = itemRef.current.length - 1;

  }

  const goNext = () => {
    if (displayRef.current) displayRef.current.appendChild(itemRef.current[current]);
    if (current < itemRef.current.length - 1) current++;
    else current = 0;
  }

  let delay = 1000;
  let count = 7;
  useEffect(()=>{
    const timer = setInterval(()=>{
      if(count>0){
        count--;
      }
      else {
        goNext();
        count = 7;
        //console.log("timeout");
      }
      //console.log("count", count);
    }, delay);
    return()=>clearInterval(timer);
  })
  

  return (
    <main className={styles.root}>
      <div className={styles.display} ref={displayRef}>
        {list.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.item}
              ref={el => itemRef.current[item.id] = el}
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className={styles.content}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.des}>{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.buttons}>
        <button className={styles.goto} onClick={handleClickPrev}>
          <div className={styles.shadow} />
          <img src='./icons/Left.svg' />
        </button>
        <button className={styles.goto} onClick={handleClickNext}>
          <div className={styles.shadow} />
          <img src='./icons/Right.svg' />
        </button>
      </div>
      <div className={styles.scroll}>
        <div className={styles.scrollline}></div>
        <div className={styles.scroller}>
        <p>View more!</p></div>
      </div>
    </main>
  )
}