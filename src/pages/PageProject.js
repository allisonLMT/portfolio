import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import styles from '../styles/pageProject.module.scss';
import classes from 'classnames';
import NavMenu from '../components/NavMenu';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Accordion from '../components/Accordion';
import PreviousNext from '../components/PreviousNext';
import Footer from '../components/Footer';


function PageProject( {featuredImage} ) {

    window.scrollTo(0, 0);

    const { id } = useParams();

    const restPath = `https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project/${id}?acf_format=standard&_embed`;
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
                <SkipNavLink />
                <NavMenu />
                <SkipNavContent />
                <div className='content-wrap' >
                    <div className={styles.marginWrap}>
                        <h1>{restData.title.rendered}</h1>
                        <div className={styles.infoWrap}>
                            {/* {restData._embedded['wp:featuredmedia'][0] &&
                                    <figure dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                                } */}
                                <img src={restData.acf.cover_image.url} alt={restData.acf.cover_image.alt} className={styles.projectCoverImage}/>
                            <section className={styles.projectInfo}>
                                
                                { restData.acf.project_overview_content &&
                                <section>
                                    <h2>Project Overview</h2>
                                    <p>{restData.acf.project_overview_content}</p>
                                </section>
                                }

                                { restData.acf.role_content &&
                                <section>
                                    <h3>Role</h3>
                                    <p>{restData.acf.role_content}</p>
                                </section>
                                }

                                { restData.acf.languages_tools &&
                                <section>
                                    <h3>Languages &amp; Tools</h3>
                                    <ul>
                                        {restData.acf.languages_tools.map((oneRow, i) => 
                                            <li key={i}>{oneRow.tool}</li>
                                        )}
                                    </ul>
                                </section>
                                }
                            
                                { restData.acf.requirements &&
                                    <section>
                                        <h3>Requirements</h3>
                                        <ul>
                                            {restData.acf.requirements.map((oneRow, i) => 
                                                <li key={i}>{oneRow.requirement}</li>
                                            )}
                                        </ul>
                                    </section>
                                }
                                {/* Portfolio ID is "45", don't render a link to project on Portfolio page */}
                                {(id !== "45") && <Button url={restData.acf.project_url} btnText="Live Project" />}
                            </section>
                            
                        </div>
                        
                    </div>  

                    
                   
                    { restData.acf.feature &&    
                        <section className={styles.marginWrap}>
                            <h2 className={styles.featureHeader}>Features</h2>
                            <div className={styles.features}>
                                {restData.acf.feature.map((oneRow, i) => 
                                    <FeatureCard key={i} feature={oneRow}/>
                                )}
                            </div>
                        </section>  
                    }
                    
                    <Accordion section="process" project={restData}/>
                    <Accordion section="design" project={restData}/>
                    <Accordion section="development" project={restData}/>
                    <Accordion section="conclusion" project={restData}/>
                    <PreviousNext />
                </div> {/* end content-wrap */}
                
                <Footer />
            </div>
        )
        };
        return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageProject;