import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import { use100vh } from 'react-div-100vh';
import classes from 'classnames';
import styles from '../styles/pageHome.module.scss';
import NavMenu from '../components/NavMenu.js';


function PageHome() {

    window.scrollTo(0, 0);

    const restPath = 'https://atredwell.com/wordpress-portfolio/wp-json/wp/v2/pages/7?acf_format=standard';
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

    const height = use100vh();
    
    if ( isLoaded ) {
        return(
            <div className='page-container' key={height} style={{height: height}}>
                <SkipNavLink />
                <NavMenu page={'home'}/>
                <SkipNavContent />
                <div className={styles.container}>
                    <div className={styles.about}>
                        <div className={styles.leftAboutAccent}></div>
                        <Link to="/about" className={styles.aboutImage}>
                            <img src={restData.acf.about_image.url} alt={restData.acf.about_image.alt} className={styles.slideRight}/>
                        </Link>
                        <div className={classes(styles.fadeIn, styles.aboutAccent)}></div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <p className={styles.firstLine}>hey, my name is...</p>
                            <h2>Allison Tredwell</h2>
                            <p>I'm a <strong>Front End Web Developer</strong> </p>
                            <p>based in Vancouver, BC.</p>
                        </div>
                    </div>
                    <div className={styles.work}>
                        <div className={classes(styles.fadeIn, styles.workAccent)}></div>
                        <Link to="/portfolio" className={styles.workImage}>
                            <img src={restData.acf.portfolio_image.url} alt={restData.acf.portfolio_image.alt} className={styles.slideLeft}/>
                        </Link>
                        <div className={styles.rightWorkAccent}></div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.leftContactAccent}></div>
                        <Link to="/contact" className={styles.contactImage}>
                            <img src={restData.acf.contact_image.url} alt={restData.acf.contact_image.alt} className={styles.slideRight}/>
                        </Link>
                        <div className={classes(styles.fadeIn,styles.contactAccent)}></div>
                    </div>
                </div>
            </div>
        );
    }
    return <img src="../loading.gif" alt="Loading" className="loading" id="loading" />;
};
export default PageHome;