import React from 'react';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';



function PageContact() {

    return(
        <div className='page-container' >
            <NavMenu />
            <div className='content-wrap' >
                <h1>Contact</h1>
            </div>
            <Footer />
        </div>
    );
};

export default PageContact;