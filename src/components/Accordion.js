import React, { useState } from 'react';
import styles from '../styles/accordion.module.scss';
import classes from 'classnames';
import arrowUp from '../images/icons/arrow-up-thin.svg';
import arrowDown from '../images/icons/arrow-down-thin.svg';


function Accordion() {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggle the state of the accordion, triggered onclick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={styles.accordionHeader}
            onClick={() => { handleToggle() } }>
                {/* needs to take the section title passed from the specific Accordion (design, etc) and display it as a title */}
                <h2>title</h2>
                <img src={ isOpen ? arrowUp : arrowDown } alt="accordion open/close icon" />
               
            </div>
            <div className={ classes( styles.accordionContent, { [styles.open] : isOpen} ) } >
                {/* this needs to hold the content */}
                <p>inside content</p>
                <p>hello!</p>
            </div>
        </div>
    )
};

export default Accordion;