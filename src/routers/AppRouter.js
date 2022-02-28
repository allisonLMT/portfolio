import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PagePortfolio from '../pages/PagePortfolio';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';


function AppRouter() {

    return (
        <div>
            <Routes>
                <Route path='/' exact element={<PageHome />} />
                <Route path='about' element={<PageAbout />} />
                <Route path='portfolio' element={<PagePortfolio />} />
                <Route path='contact' element={<PageContact />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    );

};

export default AppRouter;