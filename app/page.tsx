import Banner from './components/banner'
import styles from './page.module.css'

export default function Home(){
  return(
    <main className={styles.root}>
      <Banner/>
    </main>
  )
}