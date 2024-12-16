import styles from './AddonCard.module.css';


function PackageCard({ title, children, price, monthly }) {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                {children}
                <div className={styles.prices}>
                  <h3 className={styles.price}>{price}</h3>
                  <h4 className={styles.monthly}>{monthly}</h4>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PackageCard;
