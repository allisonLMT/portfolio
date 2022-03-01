import React from 'react';
import styles from '../styles/navMenu.module.scss';

function NavMenu() {

    $(document).ready(function(){
        $('.navBurger').click(function(){
            $(this).toggleClass('open');
        });
    });

    return (
        <div className={styles.navBurger}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default NavMenu;