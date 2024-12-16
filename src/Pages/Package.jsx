import styles from './Package.module.css'
import PackageCard from '../components/PackageCard/PackageCard.jsx'
import Title from '../components/Title/Title.jsx'
import Button from '../components/Button/Button.jsx'

function Package(){
    return(
        <>
            <div className={styles.container}>
                <Title>Packages</Title>
                <PackageCard title="Lump Sum" price="$2500" monthly="+$30/mo">
                    <ul className={styles.features}>
                        <li>Design & development</li>
                        <li>$30/mo hosting</li>
                        <li>$100 fee per page after 3</li>
                        <li>Unlimited edits</li>
                        <li>Lifetime updates</li>
                    </ul>
                </PackageCard>
            </div>
        </>
    )
}

export default Package