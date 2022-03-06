import React from 'react';
import styles from '../styles/featureCard.module.scss';


function FeatureCard ({ feature }) {

    return (
        <div className={styles.featureCard}>
            {feature.feature_title && <h3>{feature.feature_title}</h3>}
            {/* need to add the screen recording in a short circuit here */}
            {feature.feature_content && <p>{feature.feature_content}</p>}
        </div>
    )
}

export default FeatureCard;