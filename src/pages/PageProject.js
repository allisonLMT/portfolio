import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Accordion from '../components/Accordion';
import PreviousNext from '../components/PreviousNext';
import Footer from '../components/Footer';

// should also receive featuredImage function in the AppRouter to use those images

function PageProject() {

    window.scrollTo(0, 0);

    const { id } = useParams();

    const restPath = `https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project/${id}?acf_format=standard&embed`;
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
                    <section>
                        <h1>{restData.title.rendered}</h1>
                        { restData.acf.project_overview_content &&
                            <div>
                                <h2>Project Overview</h2>
                                <p>{restData.acf.project_overview_content}</p>
                            </div>
                        }

                        { restData.acf.role_content &&
                            <div>
                                <h3>Role</h3>
                                <p>{restData.acf.role_content}</p>
                            </div>
                        }

                        { restData.acf.languages_tools &&
                        <div>
                            <h3>Languages &amp; Tools</h3>
                            <ul>
                                {restData.acf.languages_tools.map((oneRow, i) => 
                                    <li key={i}>{oneRow.tool}</li>
                                )}
                            </ul>
                        </div>
                        }
                        
                        { restData.acf.requirements &&
                            <div>
                                <h3>Requirements</h3>
                                <ul>
                                    {restData.acf.requirements.map((oneRow, i) => 
                                        <li key={i}>{oneRow.requirement}</li>
                                    )}
                                </ul>
                            </div>
                        }
                    </section>
                    <Button url={restData.acf.project_url} btnText="Live Project" />
                    { restData.acf.feature &&        
                    <section>
                        <h2>Features</h2>
                        {restData.acf.feature.map((oneRow, i) => 
                                        <FeatureCard key={i} feature={oneRow}/>
                                    )}
                    </section>
                    }
                    
                    <Accordion section="process" project={restData}/>
                    <Accordion section="design" project={restData}/>
                    <Accordion section="development" project={restData}/>
                    <Accordion section="conclusion" project={restData}/>
                    <PreviousNext />
                </div>
                <Footer />
            </div>
        )
        };
        return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageProject;