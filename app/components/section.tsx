import Title from '../about/components/title'
import styles from './section.module.css'

export default function Section(){
  return(
    <div className={styles.root}>
      <div className={styles.title}>
      <Title text='SHOP BY CATEGORY' color='var(--red)'/>
      </div>
      <div className={styles.bricks}>
        <div className={styles.category}>
          <img src='/banner01.jpg' />
          <div>
            <h2>Optic</h2>
            <button> Go to buy</button>
          </div>
        </div>
        <div className={styles.category}>
          <img src='/banner02.jpg' />
          <div>
            <h2>Helmet</h2>
            <button> Go to buy</button>
          </div>
        </div>
        <div className={styles.category}>
          <img src='/banner03.jpg' />
          <div>
            <h2>Gloves</h2>
            <button> Go to buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}