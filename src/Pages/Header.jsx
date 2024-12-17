import styles from './Header.module.css'
import Button from '../components/Button/Button.jsx'

function Header() {
    return (
      <>
      {/* <div className={styles.headerBar}>
        <div className={styles.title}>Pixcel</div>
          <div className={styles.right}>
            <div className={styles.navigationBar}>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
          </div>
      </div> */}
      <div className={styles.textContainer}>
        <p style={{ fontWeight: '500', fontSize: '1.7rem', width: '70%'}}>Hand-coded with care,</p>
        <p>our websites are crafted with empathy to redefine 
          your digital presence, focusing on what truly matters to you.</p>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.details1}>
          <p>100% Handmade</p>
          <p>Fully Responsive</p>
        </div>
        <div className={styles.details2}>
          <p>Optimized Page Speed</p>
          <p>SEO</p>
        </div>
      </div>
      <p className={styles.textContainer2}>Never worry about your website again. We specialize in small
        business web design and development for clients.</p>
      <div className={styles.buttonContainer}>
        <Button link="#" buttonText="Get started" />
      </div>
      </>
    )
  }
  
  export default Header
  