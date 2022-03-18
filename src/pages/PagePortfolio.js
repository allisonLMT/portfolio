import React, { useState, useEffect } from 'react';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import styles from '../styles/pagePortfolio.module.scss';
import NavMenu from '../components/NavMenu.js';
import ProjectCard from '../components/ProjectCard.js';
import Footer from '../components/Footer.js';
import classes from 'classnames';



function PagePortfolio( ) {

    window.scrollTo(0, 0);

    //gets all of the posts in the 'portfolio-project' CPT in an array
    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project?acf_format=standard'
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

        let projectIDarr = [];
        restData.map((project) => projectIDarr.push(project.id));
      
        
        return(
            <div className='page-container' >
                <SkipNavLink />
                <NavMenu />
                <SkipNavContent />
                <div className={classes('content-wrap')} >
                    <h1>Portfolio</h1>
                    <div className={styles.projects}>
                        {restData.map((eachProject, i) =>
                            <ProjectCard key={eachProject.id} project={restData[i]} />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />;
};

export default PagePortfolio;