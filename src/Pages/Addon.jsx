import styles from './Addon.module.css'
import AddonCard from '../components/AddonCard/AddonCard.jsx'
import Title from '../components/Title/Title.jsx'

function Addon(){
    return(
    <>
    <div className={styles.container}>
        <Title>Add-ons</Title>
        <AddonCard title="Rapid Turnaround" price="$300" monthly="starting">
            <p className={styles.description}>
            Your website, ready when you need it.
            </p>
        </AddonCard>
        <AddonCard title="Lifetime Updates" price="$50" monthly="per month">
            <p className={styles.description}>
            Keep your website up-to-date with 24/7 support.
            </p>
        </AddonCard>
        <AddonCard title="Unlimited Edits" price="$50" monthly="per hour">
            <p className={styles.description}>
            Make changes as needed with no limits.
            </p>
        </AddonCard>
    </div>
    </>
    )
}

export default Addon