import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import Div100vh from 'react-div-100vh';
import classes from 'classnames';
import styles from '../styles/pageHome2.module.scss';
import NavMenu from '../components/NavMenu.js';


function PageHome2() {

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
    console.log(restData);
    
    if ( isLoaded ) {
        return(
            <Div100vh className='page-container' >
                <SkipNavLink />
                <NavMenu page={'home'}/>
                <SkipNavContent />
                <div className={classes(styles.container, styles.colorShift)}>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <p className={styles.firstLine}>hey, my name is...</p>
                            <h2>Allison Tredwell</h2>
                            <p>I'm a <strong>Front End Web Developer</strong> </p>
                            <p>based in Vancouver, BC.</p>
                        </div>
                    </div>
                </div>
                  
                   
            </Div100vh>
        );
    }
    return <img src="../loading.gif" alt="Loading" className="loading" id="loading" />;
};
export default PageHome2;