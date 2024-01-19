import { Link } from 'react-router-dom'
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
                        <li>
                            <Link to="/">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link to="/shop">طرح ها</Link>
                        </li>
                        <li>
                            <Link to="/about-us">درباره ما</Link>
                        </li>
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
