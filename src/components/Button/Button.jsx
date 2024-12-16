import React from 'react';
import styles from './Button.module.css'

function Button({ link, button }) {
    return(
        <div className={styles.container}>
            <a href={link}>{button}</a>
        </div>
    )
}

export default Button