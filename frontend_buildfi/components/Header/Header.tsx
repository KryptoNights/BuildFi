import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer1}>
            <h1 className={styles.txt1}>BuildFI</h1>
            <div>Components</div>
            <div>Looking for Funding? </div>

        </div>
        <div className={styles.subContainer1}>
          Connect Wallet
        </div>
    </div>
  )
}

export default Header