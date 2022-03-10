import React from 'react';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';


function PageNotFound() {

    return (
        <div className='page-container' >
            <SkipNavLink />
            <NavMenu />
            <SkipNavContent />
            <div className='content-wrap' >
                <h1>Page Not Found</h1>
            </div>
            <Footer />
        </div>
    );

};

export default PageNotFound;