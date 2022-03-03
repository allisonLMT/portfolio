import React from 'react';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';



function PagePortfolio() {


    //similar to the Posts wp-rest. Will need to map through all of the posts of projects

    return(
        <div className='page-container' >
            <NavMenu />
            <div className='content-wrap' >
                <h1>Portfolio</h1>
            </div>
            <Footer />
        </div>
    );
};

export default PagePortfolio;