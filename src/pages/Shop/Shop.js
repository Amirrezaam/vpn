import AccountBox from '../../components/AccountBox/AccountBox'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Shop.module.css'

export default function Shop() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <h1>خرید اکانت فیت نت</h1>
                <h4>قابل استفاده در ویندوز، اندروید، آیفون، مک، لینوکس با قابلیت دسترسی به چندین سرویس پرسرعت</h4>

                <div className={styles.account_shop}>

                    <AccountBox
                        name="اکانت 6 ماهه"
                        price="600 هزار تومان"
                        attributes={["اتصال دو کاربر", "پرداخت آنلاین", "تحویل آنی", "سرعت نامحدود", "قابل استفاده در ویندوز آیفون اندروید و مک"]}
                    />
                    <AccountBox
                        name="اکانت 3 ماهه"
                        price="300 هزار تومان"
                        attributes={["اتصال دو کاربر", "پرداخت آنلاین", "تحویل آنی", "سرعت نامحدود", "قابل استفاده در ویندوز آیفون اندروید و مک"]}
                    />
                    <AccountBox
                        name="اکانت 1 ماهه"
                        price="100 هزار تومان"
                        attributes={["اتصال دو کاربر", "پرداخت آنلاین", "تحویل آنی", "سرعت نامحدود", "قابل استفاده در ویندوز آیفون اندروید و مک"]}
                    />

                </div>
            </div>
            <Footer />
        </>
    )
}
