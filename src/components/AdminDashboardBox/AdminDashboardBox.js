import styles from './AdminDashboardBox.module.css'

export default function AdminDashboardBox({ title }) {
    return (
        <div className={styles.admin_panel_box}>
            <div className={styles.admin_panel_box_body}>
                <h3>{title}</h3>
            </div>
            <div className={styles.admin_panel_box_footer}>
                <button>مشاهده</button>
            </div>
        </div>
    )
}
