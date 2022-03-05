import React, { useState } from 'react';
import styles from '../styles/accordion.module.scss';
import arrowUp from '../images/icons/arrow-up-thin.svg';
import arrowDown from '../images/icons/arrow-down-thin.svg';


function AccordionHeader() {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggle the state of the accordion, triggered onClick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    return (
            <div className={styles.accordionHeader}
            onClick={() => { handleToggle() } }>
                {/* needs to take the section title passed from the specific Accordion (design, etc) and display it as a title */}
                <h2>Section Name</h2>
                <img src={ isOpen ? arrowUp : arrowDown } alt="accordion open/close icon" />
               
            </div> 
    )
};

export default AccordionHeader;