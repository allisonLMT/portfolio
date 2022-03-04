import React from 'react';
import NavMenu from '../components/NavMenu.js';
import Footer from '../components/Footer.js';

// should also recieve featuredImage in the AppRouter to use those images

function PageSingleProject() {

    return(
        <div className='page-container' >
            <NavMenu />
            <div className='content-wrap' >
                <h1>Single Project</h1>
            </div>
            <Footer />
        </div>
    );
};

export default PageSingleProject;