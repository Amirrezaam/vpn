import styles from './AccountBox.module.css'

export default function AccountBox({name, price, attributes}) {
    return (
        <div className={styles.account_box}>
            <div className={styles.account_box_body}>
                <div className={styles.header}>
                    <h5>{name}</h5>
                </div>
                <span>{price}</span>
                <ul>
                    {
                        attributes.map(item => <li>{item}</li>)
                    }
                </ul>
            </div>
            <div className={styles.account_box_footer}>
                <button>خرید اکانت</button>
            </div>
        </div>
    )
}
