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
                <Link to='/' className={styles.siteTitle}>Allison Tredwell</Link>
                <div className={ classes( styles.navBurger, { [styles.open] : isOpen } ) } 
                    onClick={() => { handleToggle() } }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>  
    );
};

export default NavMenu;