import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/navMenu.module.scss';
import classes from 'classnames';

function NavMenu() {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggle the state on the navBurger, triggered onclick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={styles.navBar}>
                <Link to='/' className={styles.siteTitle} onClick={() => { setIsOpen(false) } }>Allison Tredwell</Link>
                <div className={ classes( styles.navBurger, { [styles.open] : isOpen } ) } 
                    onClick={() => { handleToggle() } }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <nav className={styles.desktopNav}>
                    <NavLink to='/about' className={styles.slide} >about</NavLink>
                    <NavLink to='/portfolio' className={styles.slide} >portfolio</NavLink>
                    <NavLink to='/contact' className={styles.slide} >contact</NavLink>
                </nav>
            </div>
            <nav className={ classes( styles.navMenu, { [styles.open] : isOpen }) }>
                <NavLink to='/' className={styles.slide} >home</NavLink>
                <NavLink to='/about' className={styles.slide} >about</NavLink>
                <NavLink to='/portfolio' className={styles.slide} >portfolio</NavLink>
                <NavLink to='/contact' className={styles.slide} >contact</NavLink>
            </nav>
        </div>  
    );
};

export default NavMenu;