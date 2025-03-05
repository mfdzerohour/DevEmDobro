import { Skeleton } from '@mui/material';
import React from 'react';

export const Skeletons = () => {
    return (
        <>
            <Skeleton variant='rounded' witdh={210} heigh={60}/>
            <Skeleton variant='rounded' witdh={210} heigh={60}/>
            <Skeleton variant='rounded' witdh={210} heigh={60}/>
        </>
    )
}