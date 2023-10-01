import Banner from './components/banner'
import DiscountTimer from './components/discountTimer'
import styles from './page.module.css'

export default function Home() {
  const discount = [
    {
      id: 0,
      name: 'item1',
      img: './products/item1',
      price: 45,
      discount: 20,
      summary: 'this is item1. very good! go to try try!'
    },
    {
      id: 1,
      name: 'item2',
      img: './products/item2',
      price: 89,
      discount: 25,
      summary: 'this is item2. very good! go to try try!'
    },
    {
      id: 2,
      name: 'item3',
      img: './products/item3',
      price: 240,
      discount: 35,
      summary: 'this is item3. very good! go to try try!'
    },
    {
      id: 3,
      name: 'item4',
      img: './products/item4',
      price: 174,
      discount: 40,
      summary: 'this is item4. very good! go to try try!'
    },
    {
      id: 4,
      name: 'item5',
      img: './products/item5',
      price: 304,
      discount: 40,
      summary: 'this is item5. very good! go to try try!'
    }
  ]
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