import React from 'react';
import styles from '../styles/featureCard.module.scss';


function FeatureCard ({ feature }) {

    return (
        <div className={styles.featureCard}>
            {feature.feature_title && <h4>{feature.feature_title}</h4>}
            {feature.feature_media &&
                <video src={feature.feature_media} autoPlay="autoplay" muted loop width='320'>
                    Your browser does not support the video tag.
                </video>
            }
            {feature.feature_content && <p>{feature.feature_content}</p>}
        </div>
    )
}

export default FeatureCard;