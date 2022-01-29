import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';

import FavoritesContext from '../store/favorites-context';
import Products from './Products';

function Favorites() 
{  
    // Recoge los parámetros que se envian por URL:
    const [searchParams] = useSearchParams();
    // Recoge si hay un parámetro puesto:
    const filter = searchParams.get("filter") ?? "";

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    console.log(favoritesCtx.totalFavorites);

    if(favoritesCtx.totalFavorites !== 0)
    {
        content = <Products favs={favoritesCtx.favorites} filter={filter}/>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Favorites
