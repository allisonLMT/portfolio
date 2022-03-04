import React, { useState, useEffect } from 'react';
import NavMenu from '../components/NavMenu.js';
import ProjectCard from '../components/ProjectCard.js';
import Footer from '../components/Footer.js';



function PagePortfolio( {featuredImage} ) {

    window.scrollTo(0, 0);

    //this path gets all of the posts in the 'portfolio-project' CPT in an array
    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project?_embed'
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
                    <h1>Portfolio</h1>
                    {restData.map((eachProject, i) =>
                        <ProjectCard key={eachProject.id} project={restData[i]} featuredImage={featuredImage} />
                    )}
                </div>
                <Footer />
            </div>
        );
    }
    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />;
};

export default PagePortfolio;