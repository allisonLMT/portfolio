import React, { useState, useEffect} from 'react';
import Button from '../components/Button';
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer';


function PageAbout() {

    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/pages/11';
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
                    {/* Add img here of myself, with blur-zoom */}
                    <h2>{restData.acf.education}</h2>
                    <ul>
                        {restData.acf.education_content.map((school, i) =>
                        <li key={i} >{school.education}</li>
                        )}
                    </ul>
                    <h2>{restData.acf.languages_tools}</h2>
                    <ul>
                        {restData.acf.languages_tools_content.map((tool, i) =>
                            <li key={i} >{tool.languages_tools}</li>
                        )}
                    </ul>
                    <h2>{restData.acf.my_approach}</h2>
                    {restData.acf.my_approach_content[0].approach}
                    <Button url='contact' btnText="Contact Me" />
                </div>
                <Footer />
            </div>
        );
    }
    return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageAbout;