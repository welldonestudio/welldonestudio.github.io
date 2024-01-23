import React from 'react';

export default function Player() {
    const video = require('@site/static/video/aboutus_brand.mp4').default;
    return (
        <div
            style={{
                width: '100%',
                aspectRatio: '2880/1620',
            }}
        >
            <video
                muted
                playsInline
                autoPlay
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <source src={`${video}`} type="video/mp4"></source>
            </video>
        </div>
    )
}
