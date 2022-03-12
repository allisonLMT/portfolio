import React from 'react';
import styles from '../styles/previousNext.module.scss';
import arrowRight from '../images/icons/arrow-right-thin.svg';
import arrowLeft from '../images/icons/arrow-left-thin.svg';

function PreviousNext() {

    return (
        <div className={styles.pageNav}>
            <div className={styles.previous}>
                <a href="https://karalu.ca/"><img src={arrowLeft} alt="previous project" /> Previous</a>
            </div>
            <div className={styles.next}>
                <a href="https://karalu.ca/">Next <img src={arrowRight} alt="next project" /></a>
                
            </div>
        </div>
    )
}

export default PreviousNext;