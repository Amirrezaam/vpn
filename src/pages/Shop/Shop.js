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

                    <AccountBox />
                    <AccountBox />
                    <AccountBox />

                </div>
            </div>
            <Footer />
        </>
    )
}
