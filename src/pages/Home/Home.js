import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from "./Home.module.css"

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.landing}>
                <div className={styles.landing_bg}>
                    <div className={`${styles.box} ${styles.bent_box2}`}></div>
                    <div className={`${styles.box} ${styles.bent_box3}`}></div>

                    <div className={styles.text}>
                        <span>اتصال هوشمند،</span>
                        <br />
                        <span>امن و سریع با</span>
                        <br />
                        <span>vio vpn</span>
                    </div>

                    <div className={styles.responsive_text}>
                        <p>اتصال هوشمند، امن و سریع با vio vpn</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
