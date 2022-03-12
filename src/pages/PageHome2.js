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
                {/* <div className={classes('content-wrap')} > */}
                <div className={styles.container}>
                    <div className={styles.about}>
                        <div className={classes(styles.fadeIn, styles.aboutAccent)}></div>
                        <div className={styles.aboutImage}>
                            <img src={restData.acf.about_image.url} alt={restData.acf.about_image.alt} className={classes(styles.about, styles.slideRight)}/>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h2>Allison Tredwell</h2>
                        <h3>Front End Web Developer</h3>
                        <h3>Vancouver, BC</h3>
                    </div>
                    <div className={styles.work}>
                        <div className={classes(styles.fadeIn,styles.workAccent)}></div>
                        <Link to="/portfolio">
                            <div className={styles.workImage}>
                                <img src={restData.acf.portfolio_image.url} alt={restData.acf.portfolio_image.alt} className={classes(styles.work, styles.slideLeft)}/>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.contactImage}>
                            <img src={restData.acf.contact_image.url} alt={restData.acf.contact_image.alt} className={classes(styles.contact, styles.slideRight)}/>
                        </div>
                        <div className={classes(styles.fadeIn,styles.contactAccent)}></div>
                    </div>
                {/* </div> */}

                    {/* <div className={classes(styles.fadeIn, styles.aboutAccent)}></div>
                    <Link to="/about">
                        <div className={styles.colorize}>
                            <img src={restData.acf.about_image.url} alt={restData.acf.about_image.alt} className={classes(styles.about, styles.slideRight)}/>
                        </div>
                    </Link>
                    <div className={classes(styles.fadeIn, styles.workAccent)}></div>
                    <Link to="/portfolio">
                        <div className={classes(styles.colorize)}>
                            <img src={restData.acf.portfolio_image.url} alt={restData.acf.portfolio_image.alt} className={classes(styles.work, styles.slideLeft)}/>
                        </div>
                    </Link>
                    <div className={classes(styles.fadeIn, styles.contactAccent)}></div>
                    <Link to="/contact">
                        <div className={styles.colorize}>
                            <img src={restData.acf.contact_image.url} alt={restData.acf.contact_image.alt} className={classes(styles.contact, styles.slideRight)}/>
                        </div>
                    </Link> */}
                </div>
            </div>
        );
    }
    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />;
};
export default PageHome2;