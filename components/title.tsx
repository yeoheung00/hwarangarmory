import styles from './title.module.css'

type props = {
  text: string
  color: string
}

export default function Title(data: props){
  const {text, color} = data;
  const scale = 3;
  return(
    <div className={styles.root}>
      <div className={styles.back}>
        {text.toLowerCase().split('').map((item, index)=>
        <div key={index} className={styles.item} style={{height: `${16*scale}px`, WebkitMaskImage: `url('/char/${item}.svg')`, maskImage: `url('/char/${item}.svg')`, backgroundColor: color, margin: `${scale}px`}}>
          <img src={`/char/${item}.svg`} style={{height: `${16*scale}px`, opacity: "0"}}/>
        </div>
        )}
      </div>
      <h1 className={styles.title}>{text}</h1>
    </div>
  )
}