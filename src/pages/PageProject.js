import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import AccordionDesign from '../components/AccordionDesign';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

// should also recieve featuredImage in the AppRouter to use those images

function PageProject() {

    window.scrollTo(0, 0);

    const { id } = useParams();

    const restPath = `https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project/${id}?_embed`;
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
                    <h1>{restData.title.rendered}</h1>
                    <Button url={restData.acf.project_url} btnText="Live Project" />
                    <AccordionDesign />
                    <AccordionDesign />
                </div>
                <Footer />
            </div>
        )
        };
        return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageProject;