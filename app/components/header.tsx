'use client'

import Link from 'next/link'
import styles from './header.module.css'

export default function Header(){
  return(
    <main className={styles.root}>
      <div className={styles.logowrap}>
        <img src='./logo.svg' alt='logo' className={styles.logo}/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/store">Store</Link></li>
        </ul>
      </nav>
      <menu className={styles.menu}>
        <img src='./account.svg' alt='account'/>
        <img src='./cart.svg' alt='cart'/>
      </menu>
    </main>
  )
}