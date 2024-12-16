import React from 'react';
import styles from './Button.module.css'

function Button({ link, buttonText = "Get started" }) {
    return(
        <div className={styles.container}>
            <a href={link}>{buttonText}</a>
        </div>
    )
}

export default Button