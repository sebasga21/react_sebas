import { createContext } from 'react';
import { useState } from 'react';

// FavoritesContext es un componente:
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteProduct) => {},
    removeFavorite: (productId) => {},
    itemIsFavorite: (productId) => {}
});

// Para modificar el array de Favoritos:
export function FavoritesContextProvider(props) 
{
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteProduct)
    {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteProduct);
        });
    }

    function removeFavoriteHandler(productId)
    {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(product => product.id !== productId);
        });
    }

    function itemIsFavoriteHandler(productId)
    {
        return userFavorites.some(product => product.id === productId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;