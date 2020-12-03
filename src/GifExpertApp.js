
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    //const categorias = ['aviones', 'carros', 'motos'];
    const [categories, setCategories] = useState(['aviones'])

    // const handleAdd = () =>{
    //     const newElement  = 'barcos';
    //     setCategories( cats => [...categories, newElement] );
    // };


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* {<button onClick={ handleAdd }>Agregar</button>} */}
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category} />
                    )
                }
            </ol>
            
        </>
    )

}