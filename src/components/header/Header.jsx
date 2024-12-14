import styles from './Header.module.css'

function Header() {
    return (
      <>
      <div className="headerBar">
        <p className={styles.title}>Pixcel</p>
            <div className="navigationBar">
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </div>
      </div>
      </>
    )
  }
  
  export default Header
  