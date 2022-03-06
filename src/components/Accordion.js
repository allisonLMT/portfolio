import React, { useState } from 'react';
import classes from 'classnames';
import styles from '../styles/accordion.module.scss';
import arrowUp from '../images/icons/arrow-up-thin.svg';
import arrowDown from '../images/icons/arrow-down-thin.svg';



function Accordion({ section }) {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggle the state of the accordion, triggered onClick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <div className={styles.accordionHeader}
            onClick={() => { handleToggle() } }>
                {/* needs to take the section title passed from the specific Accordion (design, etc) and display it as a title */}
                <h2>Section Name</h2>
                <img src={ isOpen ? arrowUp : arrowDown } alt="accordion open/close icon" />
               {/* can I pass the process/design/dev to select the type of content? */}
            </div>
            <div className={ classes( styles.accordionContent, { [styles.open] : isOpen} ) }>
                <h3>section sub-heading</h3>
                <p>content</p>
            </div> 
        </section>
    )
};

export default Accordion;