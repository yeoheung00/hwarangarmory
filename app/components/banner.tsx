'use client'

import React, { useRef, useEffect, useState, createElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./banner.module.css";

export default function Sample() {
  const [load, setLoad] = useState(false);
  let type = 0;
  const [datas, setDatas] = useState([
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
    }
  ]); 
  
  const handleClickNext = () => {
    type = 0;
    setLoad((current)=>!current);
    console.log("next", datas);
  };

  const handleClickPrev = () => {
    type = 1;
    setLoad((current)=>!current);
    console.log("prev", datas);
  };

  useEffect(()=>{
    if(type == 0) setDatas((data)=>{
      let dat = data;
      dat.push(dat[0]);
      dat.shift();
      return dat
    });
    else setDatas((data)=>{
      let dat = data;
      dat.unshift(dat[dat.length-1]);
      dat.pop();
      return dat;
    });
  }, [load])

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        {datas.map((item) => {return(
          <div
            key={item.id}
            className={styles.item}
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className={styles.content}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.des}>{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        )})}
      </div>
      <div className={styles.buttons}>
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}