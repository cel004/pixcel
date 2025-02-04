import styles from './Package.module.css'
import PackageCard from '../components/PackageCard/PackageCard.jsx'
import Title from '../components/Title/Title.jsx'

function Package(){
    return(
    <>
    <div className={styles.container}>
        <Title>Packages</Title>
        <PackageCard title="Lump Sum" price="$2500" monthly="+$30/mo">
            <ul className={styles.lumpsum}>
                <li>Design & development</li>
                <li>$30/mo hosting</li>
                <li>$100 fee per page after 5</li>
                <li>Unlimited edits</li>
                <li>Lifetime updates</li>
            </ul>
        </PackageCard>
        <PackageCard title="Monthly" price="$200" monthly="per month">
            <p style ={{ textAlign: "center", marginTop: "-1.5rem", fontSize: "0.9rem", paddingBottom: "1rem"}}>A minimum of 12 months</p>
            <ul className={styles.monthly}>
                <li>Design & development</li>
                <li>$30/mo hosting</li>
                <li>$100 fee per page after 5</li>
                <li>Unlimited edits</li>
                <li>Lifetime updates</li>
            </ul>
        </PackageCard>
        <PackageCard title="Speciality" price="$2000" monthly="starting" buttonText="Get a quote">
            <ul className={styles.speciality}>
                <p>If our standard packages don’t fit your needs, 
                    request a quote tailored specifically to your website. </p>
                <p>We’ll work with you to create a solution that matches 
                    your vision and standards perfectly.</p>
            </ul>
        </PackageCard>
    </div>
    </>
    )
}

export default Package