'use client'

import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });
  return (
    <main className={`${styles.root} ${scrollPosition>100?styles.offtop:styles.ontop}`}>
      <div className={styles.toolbar}>
        <p className={styles.alert}>Welcome to HWARANG ARMORY!</p>
        <div className={styles.lang}>
          <img className={styles.icon} src='./icons/Language.svg' alt='Language'/>
          <p className={styles.currentLang}>English</p>
          <img className={styles.drop} src='./icons/Down.svg' alt='Dropdown'/>
        </div>
        <div className={styles.divider}/>
        <div className={styles.currency}>
          <img className={styles.icon} src='./icons/Dollar.svg' alt='Dollar'/>
          <p className={styles.currentCurrency}>USD</p>
          <img className={styles.drop} src='./icons/Down.svg' alt='Dropdown'/>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logowrap}>
          <img src='./logo.svg' alt='logo' className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/contact">Board</Link></li>
            <li><Link href="/store">Store</Link></li>
          </ul>
        </nav>
        <menu className={styles.menu}>
          <img src='./icons/User.svg' alt='User' />
          <img src='./icons/Cart.svg' alt='Cart' />
        </menu>
      </div>
    </main>
  )
}