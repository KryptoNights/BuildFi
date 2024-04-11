import React from 'react'
import styles from './cards.module.css'
import data from '../../constant/constant'
import Card from './Card'
const WrapperCards = () => {
  return (
    <div className={styles.container}>
    {data.map((item :any, index:number) => (
        <Card item={item} key={index}/>
      ))}

    </div>

  )
}

export default WrapperCards