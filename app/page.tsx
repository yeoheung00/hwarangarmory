import Banner from './components/banner'
import DiscountTimer from './components/discountTimer'
import styles from './page.module.css'
import db from './db/data.json'

export default function Home() {
  const discount = db.discount;
  return (
    <main className={styles.root}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.discount}>
        <div className={styles.title}>
          <h2>Discount of the Week</h2>
          <DiscountTimer />
        </div>
        <div className={styles.titledivider} />
        <div className={styles.discountitems}>
          {discount.map(item => {
            return (
              <div className={styles.item} key={item.id}>
                <div className={styles.itemimg}>
                  <img src={item.img} alt={item.name} />
                  <h2>-{item.discount}%</h2>
                </div>
                <h3>{item.name}</h3>
                <p><span className={styles.origin}>${item.price.toFixed(2)}</span> <span className={styles.discounted}>${((100 - item.discount) / 100 * item.price).toFixed(2)}</span></p>
                <p className={styles.summary}>{item.summary}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}