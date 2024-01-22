import React from 'react';
import styles from '../../pages/index.module.css';

export default function Player() {
    const video = require('@site/static/video/banner.mp4').default;
    return (
        <div className={styles.videoContainer}>
            <video muted playsInline autoPlay>
                <source src={`${video}`} type="video/mp4"></source>
            </video>
        </div>
    )
}
