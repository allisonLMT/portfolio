import React from 'react';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';



function PagePortfolio() {

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