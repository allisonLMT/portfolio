import React from 'react';
import styles from '../styles/pageHome.module.scss';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';

function PageHome() {

    return(
        <div className='page-container' >
            <NavMenu />
            <div className='content-wrap' >
                <h1 className={styles.red}>Home</h1>
                <p>test</p>
            </div>
            <Footer />
        </div>
    );
};

export default PageHome;