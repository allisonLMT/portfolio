import React, { useState, Fragment } from 'react';
import classes from 'classnames';
import styles from '../styles/accordion.module.scss';
import {ReactComponent as ArrowUp} from '../images/icons/arrow-up-circle.svg';
//import arrowDown from '../images/icons/arrow-down-thin.svg';
import {ReactComponent as ArrowDown} from '../images/icons/arrow-down-circle.svg';


function Accordion({ section, project }) {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggle the state of the accordion, triggered onClick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    let header = project.acf[section+"_header"];
    let content = project.acf[section+"_content"];

    return (
        <>
            {/* only render an accordion if content exists */}
            {content &&
            <section className={styles.accordionSection}>
                <div className={classes(styles.accordionHeader, (isOpen && styles.headerActive))}
                onClick={() => { handleToggle() } }>
                    <h2>{header}</h2>
                    { isOpen ? <ArrowUp /> : <ArrowDown /> }
                </div>
                <div className={ classes( styles.accordionContent, { [styles.open] : isOpen} ) }>
                    { Array.isArray(project.acf[section+"_content"]) &&
                        <ul>
                            {content.map((oneRow, i) => 
                                <li key={i}>{oneRow.content}</li>
                            )}
                        </ul>
                    }
                </div> 
            </section>
            }
        </>
    )
};

export default Accordion;