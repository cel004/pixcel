import styles from './About.module.css'

function About() {
    return (
    <>
      <div className={styles.container}>
        <h2>Who We Are</h2>
        <p>Based in Toronto, we blend creativity with technicality to create digital experiences.</p>
        <p>We don’t just build websites; we build lasting relationships, understanding your business 
            inside and out to deliver solutions that drive real results.</p>
      </div>
      <div className={styles.circlesContainer}>
            <p className={styles.circle}>Flexibility</p>
            <p className={styles.circle}>Clarity</p>
            <p className={styles.circle}>Empathy</p>
      </div>
      <div className={styles.textContainer}>
        <p>• Adaptable to unique needs of any industry with 
            meaningful and tailored solutions.</p>
        <p>• Transparent communication that drives 
            purpose and ensures results.</p>
        <p>• Built with empathy and a genuine understanding, 
            always putting your best interests first.</p>
      </div>
      </>
    )
  }
  
  export default About
  