'use client'

import { useEffect, useState } from 'react'
import styles from './discountTimer.module.css'

export default function DiscountTimer() {
  const [now, setNow] = useState({ day: 0, hour: 0, minute: 0, second: 0});

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const day = date.getDay();
      setNow({ day: day==0?6:day-1, hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() });
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.root}>
      <img src='./icons/Clock.svg' alt='Timer' />
      <h2>{`${(now.day != 6) ? 6-now.day + '일' : ''} ${String(23 - now.hour).padStart(2, "0")}:${String(59 - now.minute).padStart(2, "0")}:${String(59 - now.second).padStart(2, "0")}`}</h2>
    </div>
  )
}