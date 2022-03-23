import React, { useState, Fragment } from 'react';
import classes from 'classnames';
import Highlight from 'react-highlight';
import styles from '../styles/accordion.module.scss';
import {ReactComponent as ArrowUp} from '../images/icons/arrow-up.svg';
import {ReactComponent as ArrowDown} from '../images/icons/arrow-down.svg';


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
                                
                                <>
                                    <li key={i}>{oneRow.content}</li>
                                    { oneRow.code_snippet &&
                                        <Highlight className="hljs" key={i}>
                                            {oneRow.code_snippet}
                                        </Highlight>
                                    }
                                </>
                                
                            )}
                            
                        </ul>
                    }
                    {content.code_snippet &&
                        <pre className="language-jsx">`{content.code_snippet}</pre>
                    }
                </div> 
            </section>
            }
        </>
    )
};

export default Accordion;