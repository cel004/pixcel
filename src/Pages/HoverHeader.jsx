import { useState, useEffect } from 'react';
import styles from './HoverHeader.module.css'
import menu from '/menu.svg'
import logo from '/logo.svg'

function HoverHeader(){
    // const [isVisible, setIsVisible] = useState(false);

    // const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //         setIsVisible(true);
    //     } else {
    //         setIsVisible(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return(
        <>
            <div className ={styles.container}>
                <div className={styles.headerBar}>
                        <div className={styles.title}> 
                            <img src={ logo } alt="Pixcel's logo" />
                            Pixcel
                        </div>
                        <div className={styles.menu}>
                            <img src={menu} alt="Menu button" />
                        </div>
                    </div>
                <div className={styles.bar}/>
            </div>
        </>
    )
}

export default HoverHeader;