import img from '../../assets/images/image3.png'
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer_menu}>
                <div className={styles.right}>
                    <p>آماده پاسخگویی 24 ساعته به شما</p>
                    <img className={styles.footer_img_responsive} src={img} alt="" />
                    <ul>
                        <img src={img} alt="" />
                        <li style={{ color: "purple" }}>لینک های کاربردی</li>
                        <li>صفحه اصلی</li>
                        <li>طرح ها</li>
                        <li>درباره ما</li>
                    </ul>
                </div>

                <div className={styles.left}>
                    <p>ارتباط با ما</p>
                    <p>تماس : +98915123456</p>
                    <p>ایمیل : armitafz03@gmail.com</p>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                ©2024 all rights reserved.by viovpn
            </div>
        </footer>
    )
}
