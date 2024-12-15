import React from 'react';
import styles from './Button.module.css'

function Button({ link, children }) {
    return(
        <div className={styles.container}>
            <a href={link}>{children}</a>
        </div>
    )
}

export default Button