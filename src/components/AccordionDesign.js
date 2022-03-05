import React from 'react';
import styles from '../styles/accordion.module.scss';
import classes from 'classnames';
import AccordionHeader from '../components/AccordionHeader';


function AccordionDesign() {

    return (
        <section>
            <AccordionHeader />
            <div>
            {/* <div className={ classes( styles.accordionContent, { [styles.open] : isOpen} ) } > */}
                {/* this needs to hold the content */}
                <p>inside content</p>
                <p>hello!</p>
            </div>
        </section>
    )
};

export default AccordionDesign;