import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import styles from '../styles/pageProject.module.scss';
//import classes from 'classnames';
import NavMenu from '../components/NavMenu';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Accordion from '../components/Accordion';
import PreviousNext from '../components/PreviousNext';
import Footer from '../components/Footer';


function PageProject( ) {

    window.scrollTo(0, 0);

    const { id } = useParams();

    const restPath = 'https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project?acf_format=standard'; 
    //const restPath = `https://atredwell.com/portfolio/wp-json/wp/v2/portfolio-project/${id}?acf_format=standard`;
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

    let currentProjObj;
    let currentProjIndex;
    let prevID;
    let prevLabel = "prevL";
    let nextID;
    let nextLabel = "nextL";

    // console.log(typeof(id))
    // console.log(typeof(nextID))
    
    if ( isLoaded ) {

        function findProject() {
            for (let i=0; i < restData.length; i++) {
                //id is a string, so the project ID also needs to be a string for comparison
                let projIDstr = restData[i].id.toString();
                if ( projIDstr === id ) {   
                    currentProjObj = restData[i];
                    currentProjIndex = i;
                };
            };
            if (currentProjIndex === 0) {
                prevID = restData[restData.length-1].id; 
                nextID = restData[1].id;
            } else if (currentProjIndex === (restData.length-1)) {
                nextID = restData[0].id;
                prevID = restData[currentProjIndex - 1].id;
            } else {
                prevID = restData[currentProjIndex - 1].id;
                nextID = restData[currentProjIndex + 1].id;
            }

        }

        findProject();

        return(
            <div className='page-container' >
                <SkipNavLink />
                <NavMenu />
                <SkipNavContent />
                <div className='content-wrap' >
                    <div className={styles.marginWrap}>
                        <h1>{currentProjObj.title.rendered}</h1>
                        <div className={styles.infoWrap}>
                            <img src={currentProjObj.acf.cover_image.url} alt={currentProjObj.acf.cover_image.alt} className={styles.projectCoverImage}/>
                            <section className={styles.projectInfo}>
                                
                                { currentProjObj.acf.project_overview_content &&
                                <section>
                                    <h2>Project Overview</h2>
                                    <p>{currentProjObj.acf.project_overview_content}</p>
                                </section>
                                }

                                { currentProjObj.acf.role_content &&
                                <section>
                                    <h3>Role</h3>
                                    <p>{currentProjObj.acf.role_content}</p>
                                </section>
                                }

                                { currentProjObj.acf.languages_tools &&
                                <section>
                                    <h3>Languages &amp; Tools</h3>
                                    <ul>
                                        {currentProjObj.acf.languages_tools.map((oneRow, i) => 
                                            <li key={i}>{oneRow.tool}</li>
                                        )}
                                    </ul>
                                </section>
                                }
                            
                                { currentProjObj.acf.requirements &&
                                    <section>
                                        <h3>Requirements</h3>
                                        <ul>
                                            {currentProjObj.acf.requirements.map((oneRow, i) => 
                                                <li key={i}>{oneRow.requirement}</li>
                                            )}
                                        </ul>
                                    </section>
                                }
                                {/* Portfolio ID is "45", don't render a link to project on Portfolio page */}
                                {(id !== "45") && <Button url={currentProjObj.acf.project_url} btnText="Live Project" />}
                            </section>
                            
                        </div>
                    </div>  
                    
                    { currentProjObj.acf.feature &&    
                        <section className={styles.marginWrap}>
                            <h2 className={styles.featureHeader}>Features</h2>
                            <div className={styles.features}>
                                {currentProjObj.acf.feature.map((oneRow, i) => 
                                    <FeatureCard key={i} feature={oneRow}/>
                                )}
                            </div>
                        </section>  
                    }
                    
                    <Accordion section="process" project={currentProjObj}/>
                    <Accordion section="design" project={currentProjObj}/>
                    <Accordion section="development" project={currentProjObj}/>
                    <Accordion section="conclusion" project={currentProjObj}/>
                    <PreviousNext prevID={prevID} prevLabel={prevLabel} nextID={nextID} nextLabel={nextLabel}/>
                </div> {/* end content-wrap */}
                
                <Footer />
            </div>
        )
        };
        return <img src="loading.gif" alt="Loading" className="loading" id="loading" />
};

export default PageProject;