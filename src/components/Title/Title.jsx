import React from 'react';
import styles from './Title.module.css'

function Title({ children }) {
    return(
        <div className={styles.container}>
            <h2>{children}</h2>
        </div>
    )
}

export default Title