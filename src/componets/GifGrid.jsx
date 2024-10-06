import React, { useEffect, useState } from 'react';
import { GifItem } from '../componets/GifItem.jsx';
import { useFetchGifts } from '../hooks/useFetchGifts.js';

export const SegmentCategory = ({ category }) => {

    const{ images , isLoading} = useFetchGifts( category );
    console.log(isLoading);
    return (
        <>
            <h1>{category}</h1>
            { isLoading && (<h2>...Cargando</h2>)}
            <div className='card-grid'>
                {images.map((image) => {
                    return(<GifItem key={image.id} {...image}/>) 
                })}
            </div>
        </>
    );
};
