import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifts';

export const useFetchGifts = (category) => {

    const [gifs, setGifs] = useState([]); 
    const [isLoading, setIsLoading] = useState(true)

    const fetchGifs = async () => {
        const gifs = await getGifs(category); 
        setGifs(gifs); 
        setIsLoading(false)
    };

    useEffect(() => {
        fetchGifs();
    }, [category] );

    return { 
        images : gifs,
        isLoading : isLoading
    }
}
