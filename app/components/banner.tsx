'use client'

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import db from '../db/data.json'
import styles from './banner.module.css'

export default function Banner() {
  const list = db.banner;
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
  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        count--;
      }
      else {
        goNext();
        count = 7;
        //console.log("timeout");
      }
      //console.log("count", count);
    }, delay);
    return () => clearInterval(timer);
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
                <div className={styles.capital} style={{maskImage: `url("/char/${item.name[0].toLowerCase()}.svg")`, WebkitMaskImage: `url("/char/${item.name[0].toLowerCase()}.svg")`, maskSize: "170px"}}/>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.des}>{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          )
        })}
      </div>
      <img className={styles.prevbutton} src='./icons/Right.svg' alt='Prev' onClick={handleClickPrev}/>
      <img className={styles.nextbutton} src='./icons/Left.svg' alt='Next' onClick={handleClickNext}/>
      <div className={styles.scroll}>
        <div className={styles.scrollline}/>
        <div className={styles.scroller}>
          <p>View more!</p></div>
      </div>
    </main>
  )
}