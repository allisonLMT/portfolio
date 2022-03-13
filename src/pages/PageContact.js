import React, { useState, useEffect } from 'react';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
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
                    <div className={styles.phone}><img src={restData.acf.image.url} alt={restData.acf.image.alt} /></div>
                    <h3>{restData.acf.contact_content[0].line}</h3>
                    <p>{restData.acf.contact_content[1].line}</p>
                    <p>{restData.acf.contact_content[2].line}</p>
                    <p className={styles.email}>allison.tredwell@gmail.com</p>
                </div>
                <Footer />
            </div>
        );
    }

    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageContact;