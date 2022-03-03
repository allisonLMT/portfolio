import React, { useState, useEffect } from 'react';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';



function PageContact() {

    window.scrollTo(0, 0);

    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/pages/13';
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
                <NavMenu />
                <div className='content-wrap' >
                    <h1>{restData.title.rendered}</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageContact;