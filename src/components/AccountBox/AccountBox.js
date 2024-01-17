import styles from './AccountBox.module.css'

export default function AccountBox() {
    return (
        <div className={styles.account_box}>
            <div className={styles.account_box_body}>
                <div className={styles.header}>
                    <h5>اکانت 6 ماهه</h5>
                </div>
                <span>200 هزار تومان</span>
                <ul>
                    <li>اتصال دو کاربر</li>
                    <li>پرداخت آنلاین</li>
                    <li>تحویل آنی</li>
                    <li>سرعت نامحدود</li>
                    <li>قابل استفاده در ویندوز آیفون اندروید و مک</li>
                </ul>
            </div>
            <div className={styles.account_box_footer}>
                <button>خرید اکانت</button>
            </div>
        </div>
    )
}
