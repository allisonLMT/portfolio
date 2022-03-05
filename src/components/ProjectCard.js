import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/projectCard.module.scss';
import Button from '../components/Button';

function ProjectCard({ project, featuredImage }) {

   

    return (
        <article key={project.id} className={styles.card}>
            <Link to={`/project/${project.id}`} className={styles.info} >
                {/* image, title, tools used/one liner (use slug for now?), all linked to the project page (add after with Params) */}
                {/* {project._embedded['wp:featuredmedia'][0] &&
                    <figure dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                } */}
                <img src={project._embedded['wp:featuredmedia']['0'].source_url} alt={project._embedded['wp:featuredmedia']['0'].alt_text} />
                <h2>{project.title.rendered}</h2>
                <p>{project.slug}</p>
            </Link>
            <Button url={`/project/${project.id}`} btnText="Learn More" />
        </article>
    );
};

export default ProjectCard;