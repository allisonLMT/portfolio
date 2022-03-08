import React, { useState } from 'react';
import classes from 'classnames';
import styles from '../styles/accordion.module.scss';
import arrowUp from '../images/icons/arrow-up-thin.svg';
import arrowDown from '../images/icons/arrow-down-thin.svg';



function Accordion({ section, project }) {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggle the state of the accordion, triggered onClick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    let header = project.acf[section+"_header"];
    let content = project.acf[section+"_content"];

    return (
        <section>
            <div className={styles.accordionHeader}
            onClick={() => { handleToggle() } }>
                <h2>{header}</h2>
                <img src={ isOpen ? arrowUp : arrowDown } alt="accordion open/close icon" />
            </div>
            <div className={ classes( styles.accordionContent, { [styles.open] : isOpen} ) }>
                { Array.isArray(project.acf[section+"_content"]) &&
                    <div>
                        <ul>
                            {content.map((oneRow, i) => 
                                <li key={i}>{oneRow.content}</li>
                            )}
                        </ul>
                    </div>
                }
            </div> 
        </section>
    )
};

export default Accordion;