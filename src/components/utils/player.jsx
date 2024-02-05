import React from 'react';

export default function Player({video}) {
    return (
        <div
            style={{
                width: '100%',
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
