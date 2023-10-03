import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.logowrap}>
          <img src='/symbol.svg' />
          <img src='/logo.svg' />
        </div>
      </div>
      <div className={styles.support}>
        <h2>Support</h2>
        <p>Contact</p>
        <p>warranties</p>
        <p>FAQs</p>
        <p>Refunds</p>
      </div>
      <div className={styles.follow}>
        <h2>Follow</h2>
        <div className={styles.sns}>
          <img src='/icons/Instagram.svg' />
          <img src='/icons/X.svg' />
        </div>
        <div className={styles.news}>
          <input type='text' placeholder='example@hwarang.com' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}