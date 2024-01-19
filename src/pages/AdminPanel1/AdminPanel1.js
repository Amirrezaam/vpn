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
                    <AdminDashboardBox title="دسته بندی vpn ها" />
                    <AdminDashboardBox title="2دسته بندی vpn ها" />
                    <AdminDashboardBox title="3دسته بندی vpn ها" />
                </div>
            </div>
            <Footer />
        </>
    )
}
