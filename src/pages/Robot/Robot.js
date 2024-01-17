import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from "./Robot.module.css"

export default function Robot() {
    return (
        <>
            <Header />
            <div className={styles.landing}>
                <div className={styles.landing_bg}>
                    <div className={styles.text_box}>
                        <a className={styles.link} href="#">لینک ربات به تلگرام</a>
                        <div>
                            <p>
                                کل مطالب سایت را توسط ربات به تلگرام لینک میکنیم. آدرس به دست آمده را روی هر لینک یا تصویری که قرار بدهیم به راحتی با کلیک روی آن، کاربر میتواند مطلب را با ذکر آدرس در تلگرام خود منتشر کند.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.text_box_responsive}>
                    <a className={styles.link} href="#">لینک ربات به تلگرام</a>
                    <div>
                        <p>
                            کل مطالب سایت را توسط ربات به تلگرام لینک میکنیم. آدرس به دست آمده را روی هر لینک یا تصویری که قرار بدهیم به راحتی با کلیک روی آن، کاربر میتواند مطلب را با ذکر آدرس در تلگرام خود منتشر کند.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
