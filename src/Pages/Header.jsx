import styles from './Header.module.css'
import logo from '/pixcel_logo.png'
import Button from '../components/Button/Button.jsx'

function Header() {
    return (
      <>
      <div className={styles.headerBar}>
        <div className={styles.title}>Pixcel</div>
          <div className={styles.right}>
            <div className={styles.navigationBar}>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
            {/* <img src={logo} alt="Pixcel's logo" /> */}
          </div>
      </div>
      <div className={styles.textContainer}>
        <p style={{ fontWeight: '500', fontSize: '1.2rem'}}>Hand-coded with care,</p>
        <p>our websites are crafted with empathy to redefine 
          your digital presence, focusing on what truly matters to you.</p>
      </div>
      <div className={styles.detailsContainer}>
        <p>100% Handmade</p>
        <p>Fully Responsive</p>
        <p>Optimized Page Speed</p>
        <p>SEO</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button link="#">Get started</Button>
      </div>
      </>
    )
  }
  
  export default Header
  