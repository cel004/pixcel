import styles from './ProcessCard.module.css';

function ProcessCard({ number, title, children }) {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <h3 className={styles.number}>{number}</h3>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </div>
    </div>
  );
}

export default ProcessCard;
