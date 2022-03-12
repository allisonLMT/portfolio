import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import classes from 'classnames';
import styles from '../styles/pageHome2.module.scss';
import NavMenu from '../components/NavMenu.js';


function PageHome2() {


    window.scrollTo(0, 0);

    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/pages/7?acf_format=standard';
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            if ( response.ok ) {
                const data = await response.json();
                setData(data);
                setLoadStatus(true);
            } else {
                setLoadStatus(false);
            }
        }
        fetchData()
    }, [restPath])

    
    if ( isLoaded ) {
        return(
            <div className='page-container' >
                <SkipNavLink />
                <NavMenu />
                <SkipNavContent />
                <div className={styles.container}>
                    <div className={styles.about}>
                        <div className={classes(styles.fadeIn, styles.aboutAccent)}></div>
                        <Link to="/about" className={styles.aboutImage}>
                            <img src={restData.acf.about_image.url} alt={restData.acf.about_image.alt} className={styles.slideRight}/>
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h2>Allison Tredwell</h2>
                            <h3>Front End Web Developer</h3>
                            <h3>Vancouver, BC</h3>
                        </div>
                    </div>
                    <div className={styles.work}>
                        <div className={classes(styles.fadeIn,styles.workAccent)}></div>
                        <Link to="/portfolio" className={styles.workImage}>
                            <img src={restData.acf.portfolio_image.url} alt={restData.acf.portfolio_image.alt} className={styles.slideLeft}/>
                        </Link>
                    </div>
                    <div className={styles.contact}>
                        <Link to="/contact" className={styles.contactImage}>
                            <img src={restData.acf.contact_image.url} alt={restData.acf.contact_image.alt} className={styles.slideRight}/>
                        </Link>
                        <div className={classes(styles.fadeIn,styles.contactAccent)}></div>
                    </div>
                </div>
            </div>
        );
    }
    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />;
};
export default PageHome2;