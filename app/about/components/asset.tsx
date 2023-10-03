import styles from './asset.module.css'

type props = {
  imgUrl: string,
  des: string,
  name: string
}

export default function Asset(data: props){
  const {imgUrl, des, name} = data;
  return(
    <div className={styles.root}>
      <img src={imgUrl}/>
      <h3>{name}</h3>
      <p>{des}</p>
    </div>
  )
}