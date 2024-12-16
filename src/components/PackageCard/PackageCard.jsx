import styles from './PackageCard.module.css';
import Button from '../Button/Button.jsx'


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
                <div className={styles.buttonContainer}>
                  <Button link="#" button="Get started" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default PackageCard;
