import styles from './VioBox.module.css'
import img1 from '../../assets/images/image5.png'

export default function VioBox() {
    return (
        <div className={styles.vio_box}>
            <div className={styles.about_vio_body}>
                <img src={img1} />
            </div>
            <div className={styles.about_vio_footer}>
                <h4>انتخاب بهترین سرورها</h4>
                <p>
                    تلاش ما بر این است که بهترین سرور ها را از میان هزاران سرور موجود برای شما انتخاب کنیم.
                </p>
            </div>
        </div>
    )
}
