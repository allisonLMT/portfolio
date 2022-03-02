import React from 'react';
import styles from '../styles/pageHome.module.scss';
import NavMenu from '../components/NavMenu.js';


function PageHome() {

    return(
        <div className={styles.red}>
            <NavMenu />
            <h1>Home</h1>
            <p>test</p>
        </div>
    );
};

export default PageHome;