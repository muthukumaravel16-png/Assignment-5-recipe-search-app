import React from 'react';
import { useFavs } from '../context/FavouritesContext';
import RecipeCard from '../components/RecipeCard';

const Favourites = () => {
  const { favourites } = useFavs(); 

  return (
    <div style={{ padding: '20px' }}>
      <h2>❤️ Your Favourite Recipes</h2>
      {favourites.length === 0 ? (
        <p>No favourites added yet. Go explore some recipes!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {favourites.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
