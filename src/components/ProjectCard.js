import React from 'react';

function ProjectCard({ project }) {

    return (
        <article key={project.id}>
            {/* image, title, tools used/one liner (use slug for now?), all linked to the project page (add after with Params) */}
            {/* {project._embedded['wp:featuredmedia'][0] &&
                            <figure dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
            } */}

            {/* <img src={project.cover_image} alt="" /> */}
            <h2>{project.title.rendered}</h2>
            <p>{project.slug}</p>
        </article>
    );
};

export default ProjectCard;