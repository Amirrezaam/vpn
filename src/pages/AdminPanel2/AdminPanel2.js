import styles from './AdminPanel2.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function AdminPanel2() {
    return (
        <>
            <Header />
            <div class={styles.content}>
                <h1>دسته بندی vpn ها</h1>

                <div class={styles.vpn_categories}>
                    <div class={`${styles.box} ${styles.right}`}>
                        <div class={styles.box_body}>
                            <h3>اضافه کردن محصول جدید / ویرایش آن</h3>
                            <form action="">
                                <div class={styles.input_box}>
                                    <label for="account_name">نام اکانت:</label>
                                    <input type="text" name="" id="account_name" />
                                </div>
                                <div class={styles.input_box}>
                                    <label for="account_name">قیمت آن:</label>
                                    <input type="text" name="" id="account_name" />
                                </div>
                            </form>
                        </div>
                        <div class={styles.box_footer}>
                            <button>مشاهده</button>
                        </div>
                    </div>
                    <div class={`${styles.box} ${styles.left}`}>
                        <div class={`${styles.box_body} ${styles.border_left}`}>
                            <h3>اکانت ها</h3>
                            <ul>
                                <li>اکانت 1 ماهه</li>
                                <li>اکانت 3 ماهه</li>
                                <li>اکانت 6 ماهه</li>
                            </ul>
                        </div>

                        <div class={styles.box_body}>
                            <h3>قیمت آن ها</h3>
                            <ul>
                                <li>120000</li>
                                <li>350000</li>
                                <li>700000</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
