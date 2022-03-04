import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project, featuredImage }) {

    return (
        <article key={project.id}>
            <Link to={`/project/${project.id}`}>

                {/* image, title, tools used/one liner (use slug for now?), all linked to the project page (add after with Params) */}
                {/* {project._embedded['wp:featuredmedia'][0] &&
                    <figure dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                } */}
                <img src={project._embedded['wp:featuredmedia']['0'].source_url} alt={project._embedded['wp:featuredmedia']['0'].alt_text} />
                <h2>{project.title.rendered}</h2>
                <p>{project.slug}</p>
            </Link>
        </article>
    );
};

export default ProjectCard;