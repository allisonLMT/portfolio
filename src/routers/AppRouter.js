import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageHome2 from '../pages/PageHome2';
import PageAbout from '../pages/PageAbout';
import PagePortfolio from '../pages/PagePortfolio';
import PageProject from '../pages/PageProject';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';



function AppRouter() {

    // ${featuredImageObject.media_details.sizes.medium_large.source_url} 768w,
    // ${featuredImageObject.media_details.sizes.large.source_url} 1024w,

    const featuredImage = ( featuredImageObject ) => {
        let imgWidth = featuredImageObject.media_details.sizes.full.width;
        let imgHeight = featuredImageObject.media_details.sizes.full.height;
        let img = `<img src="${featuredImageObject.media_details.sizes.full.source_url}" 
            width="${imgWidth}"
            height="${imgHeight}"
            alt="${featuredImageObject.alt_text}"
            srcset="${featuredImageObject.media_details.sizes.full.source_url} ${imgWidth}w, 
            ${featuredImageObject.media_details.sizes.medium.source_url} 300w"
            sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
        return {__html: img}
      }

    return (
            <Routes>
                <Route path='/' exact element={<PageHome />} />
                <Route path='home2' element={<PageHome2 />} />
                <Route path='about' element={<PageAbout />} />
                <Route path='portfolio' element={<PagePortfolio featuredImage={featuredImage} />} />
                <Route path='/project/:id' element={<PageProject />} />
                <Route path='contact' element={<PageContact />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        
    );

};

export default AppRouter;