import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pageHome.module.scss';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';

function PageHome() {


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
                <NavMenu />
                <div className='content-wrap' >
                    <Link to="/about">
                        <img src={restData.acf.about_image.url} alt={restData.acf.about_image.alt} className={styles.about}/>
                    </Link>
                    <div className={styles.accent}></div>
                    <Link to="/portfolio">
                        <img src={restData.acf.portfolio_image.url} alt={restData.acf.portfolio_image.alt} className={styles.work}/>
                    </Link>
                    
                    <Link to="/contact">
                        <img src={restData.acf.contact_image.url} alt={restData.acf.contact_image.alt} className={styles.contact}/>
                    </Link>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />;
};
export default PageHome;