import React, { createContext, useState, useContext } from 'react';


const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

 
  const addToFavourites = (recipe) => {
    if (!favourites.some(fav => fav.idMeal === recipe.idMeal)) {
      setFavourites([...favourites, recipe]);
    }
  };

  
  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter(fav => fav.idMeal !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};


export const useFavs = () => useContext(FavouritesContext);