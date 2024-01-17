import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import VioBox from '../../components/VioBox/VioBox'
import styles from './AboutVio.module.css'

export default function AboutVio() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <div className={styles.vio_shop}>
                    <VioBox />
                    <VioBox />
                    <VioBox />
                    <VioBox />
                </div>
            </div>
            <Footer />
        </>
    )
}
