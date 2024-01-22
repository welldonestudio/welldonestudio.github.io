import { CardMedia } from '@mui/material';
import React from 'react';

export default function Player() {
    return (
        <CardMedia
            component="video"
            image='/img/aboutus_brand.MP4'
            autoPlay
        />     
    )                  
}