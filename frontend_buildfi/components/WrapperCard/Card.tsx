import React from 'react'
import styles from './cards.module.css'
const Card = ({item}:{item:any}) => {
  return (
    <div className={styles.wrapperCard}>
          <div className={styles.card}>
         {item.name}
          </div>
          <div className={styles.txt1}>
          {item.name}
          </div>
          <div className={styles.txt2}>
          {item.description}
          </div>
    
    </div>
  )
}

export default Card