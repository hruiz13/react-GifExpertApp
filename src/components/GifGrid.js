
//import React, { useState, useEffect } from 'react'
//import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs( category );
    

    //se ejecuta SOLO cuando se renderiza por primera vez 
    /*
    useEffect( () => {
        getGifts( category )
            .then( setImages )
    }, [ category ])
    */
    // hasta aca

    

    //getGifts();

    return (
        <>
            <h3>{category}</h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> } 
        { <div className="card-grid">
                {
                    images.map( img => (
                       <GifGridItem 
                            key={img.id}
                            {...img}
                       />
                ))
                }

            
        </div> }
        </>
    )
}
