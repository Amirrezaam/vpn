import { useState } from 'react'
import logo from '../../assets/images/image1.jpg'
import styles from "./Header.module.css"
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/login">ورود / ثبت نام</Link>
                    </li>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>صفحه اصلی</NavLink>
                    </li>
                    <li>
                        <NavLink to="/robot" className={({ isActive }) => isActive ? styles.active : ""}>لینک ربات</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : ""}>طرح ها</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-vio" className={({ isActive }) => isActive ? styles.active : ""}>درباره vio vpn</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className={`${styles.responsive_navbar} ${openMenu ? styles.show : styles.hide}`}>
                <ul>
                    <li>
                        <Link to="/login">ورود / ثبت نام</Link>
                    </li>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>صفحه اصلی</NavLink>
                    </li>
                    <li>
                        <NavLink to="/robot" className={({ isActive }) => isActive ? styles.active : ""}>لینک ربات</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : ""}>طرح ها</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-vio" className={({ isActive }) => isActive ? styles.active : ""}>درباره vio vpn</NavLink>
                    </li>
                </ul>
                <button className={styles.close_btn} onClick={() => setOpenMenu(false)}>
                    <i className="fa fa-close" aria-hidden="true"></i>
                </button>
            </nav>
            <button className={styles.responsive_menu_btn} onClick={() => setOpenMenu(true)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
        </header>
    )
}
