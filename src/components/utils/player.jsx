import React from 'react';

export default function Player({video}) {
    return (
        <div
            style={{
                overflow: 'hidden',
                width: '100%',
                marginBottom: '-6px'
            }}
        >
            <video
                muted
                playsInline
                autoPlay
                style={{
                    width: '100%',
                }}
            >
                <source src={`${video}`} type="video/mp4" height={10} />
            </video>
        </div>
    )
}
