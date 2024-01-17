import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './AdminPanel1.module.css'
import AdminDashboardBox from '../../components/AdminDashboardBox/AdminDashboardBox'

export default function AdminPanel1() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <h1>پیشخوان</h1>
                <div className={styles.admin_panel}>
                    <AdminDashboardBox />
                    <AdminDashboardBox />
                    <AdminDashboardBox />
                </div>
            </div>
            <Footer />
        </>
    )
}
