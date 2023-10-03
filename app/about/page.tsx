import styles from './page.module.css'
import Title from './components/title'
import Asset from './components/asset'
import db from '../db/data.json'
import Link from 'next/link';

export default function About() {
  const data = db.symbol;
  return (
    <main className={styles.root}>
      <div className={styles.header}>
        <div className={styles.contents}>
          <h1>WE ARE<br /><span>HWARANG ARMORY.</span></h1>
          <p>‘Peace through strength’<br />Warriors who protect national security and contribute to world peace constantly strive to create a safer country and a safer world by maximizing their capabilities and protecting them from threats.</p>
        </div>
      </div>
      <div className={styles.article}>
        <Title text='SYMBOL' color='var(--red)' />
        <div className={styles.symbolwrap}>
          <img className={styles.symbol1} src='/symbol.svg' alt='symbol' />
          <div className={styles.symboldivider} />
          <div className={styles.symbol2}>
            <img src='/symbol_.svg' alt='symbol_' />
          </div>
        </div>
        <div className={styles.assetwrap}>
          {data.map((item, index) => <Asset imgUrl={item.imgUrl} des={item.des} name={item.name} />)}
        </div>
      </div>
      <div className={styles.article}>
        <Title text='LOGO' color='var(--red)' />
        <img className={styles.logo} src="/logo.svg" />
        <div className={styles.logodes}>
          <div>
            <h3>Meaning</h3>
            <p className={styles.des}>The logo was created by creating a font that means that it will never collapse under the theme of the castle wall, which was the best defense tool in the past.</p>
          </div>
          <div>
            <h3>System</h3>
            <img src='/about/system.svg'/>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <Title text='PATTERN' color='var(--red)' />
        <div className={styles.patternwrap}>
          <div className={styles.pattern}>
            <img src='/pattern/desert.jpg' alt='desert' />
            <h3>Desert</h3>
          </div>
          <div className={styles.pattern}>
            <img src='/pattern/tropical.jpg' alt='tropical' />
            <h3>Tropical</h3>
          </div>
          <div className={styles.pattern}>
            <img src='/pattern/snowy.jpg' alt='snowy' />
            <h3>Snowy</h3>
          </div>
          <div className={styles.pattern}>
            <img src='/pattern/brand.jpg' alt='brand' />
            <h3>Brand</h3>
          </div>
          <div className={styles.patterngen}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w_XCrnl1zBA?si=_j1nRbO5IyQivZDg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <Link href='https://hwarang-pattern-generator.vercel.app/'>MAKE PATTERN</Link>
          </div>
        </div>
      </div>
    </main>
  )
}