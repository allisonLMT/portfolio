import React, { useState, useEffect } from 'react';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import Clipboard from 'react-clipboard.js';
import copy from '../images/icons/copy.svg';
import styles from '../styles/pageContact.module.scss';
import classes from 'classnames';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';



function PageContact() {

    window.scrollTo(0, 0);

    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/pages/13?acf_format=standard';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            if ( response.ok ) {
                const data = await response.json();
                setData(data);
                setLoadStatus(true);
            } else {
                setLoadStatus(false);
            };
        };
        fetchData();
    }, [restPath] );


    if ( isLoaded ) {
        return(
            <div className='page-container' >
                <SkipNavLink />
                <NavMenu />
                <SkipNavContent />
                <div className={classes('content-wrap', styles.contactWrap)} >
                    <h1>{restData.title.rendered}</h1>
                    <h3 className={styles.accent}>{restData.acf.contact_content[0].line}</h3>
                    <div className={styles.smalltext}>
                        <p>{restData.acf.contact_content[1].line}</p>
                        <p>{restData.acf.contact_content[2].line}</p>
                    </div>
                    <div className={styles.email}>
                        <p>allison.tredwell@gmail.com</p>
                    <Clipboard data-clipboard-text="allison.tredwell@gmail.com" >
                        <img src={copy} alt="copy icon" />
                    </Clipboard>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageContact;