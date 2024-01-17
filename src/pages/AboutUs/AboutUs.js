import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className={styles.landing}>
                <div className={styles.landing_bg}>
                    <div className={styles.text_box}>
                        <a className={styles.link} href="#">ما تیم vio هستیم</a>
                        <div>
                            <p>
                                سالهاست که توانسته ایم با به کارگیری متخصصین مجرب و متعهد، خدمات با کیفیت و پایدار ارائه دهیم و
                                اکنون با افتخار یکی از پرآوازه ترین برندهای ارائه خدمات در حوزه تخصصی خود هستیم. شما در این
                                وبسایت میتوانید به سادگی سرویس مورد نظر خود را انتخاب و خریداری نمایید.
                                <br />
                                پشتیبانی آنلاین vio حتی
                                در ایام تعطیل در خدمت شماست تا در سریع ترین زمان ممکن مشکلات شما را برطرف کند.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.text_box_responsive}>
                    <a className={styles.link} href="#">ما تیم vio هستیم</a>
                    <div>
                        <p>
                            سالهاست که توانسته ایم با به کارگیری متخصصین مجرب و متعهد، خدمات با کیفیت و پایدار ارائه دهیم و
                            اکنون با افتخار یکی از پرآوازه ترین برندهای ارائه خدمات در حوزه تخصصی خود هستیم. شما در این
                            وبسایت میتوانید به سادگی سرویس مورد نظر خود را انتخاب و خریداری نمایید.
                            <br />
                            پشتیبانی آنلاین vio حتی
                            در ایام تعطیل در خدمت شماست تا در سریع ترین زمان ممکن مشکلات شما را برطرف کند.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
