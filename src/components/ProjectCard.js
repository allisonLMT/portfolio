import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/projectCard.module.scss';
import Button from '../components/Button';

function ProjectCard({ project, featuredImage }) {

    return (
        <article key={project.id} className={styles.card}>
            <Link to={`/project/${project.id}`} className={styles.info} >
                {/* {project._embedded['wp:featuredmedia'][0] &&
                    <figure dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                } */}
                {/* <img src={project._embedded['wp:featuredmedia']['0'].source_url} alt={project._embedded['wp:featuredmedia']['0'].alt_text} /> */}
                <img src={project.acf.cover_image.url} alt={project.acf.cover_image.alt} />
                <h2>{project.title.rendered}</h2>
                <p>{project.acf.one_liner}</p>
            </Link>
            <Button url={`/project/${project.id}`} btnText="Learn More" />
        </article>
    );
};

export default ProjectCard;