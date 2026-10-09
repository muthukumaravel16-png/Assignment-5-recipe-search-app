import React from 'react';
import { Link } from 'react-router-dom';
import { useFavs } from '../context/FavouritesContext';

const RecipeCard = ({ recipe }) => {
  const { addToFavourites } = useFavs();

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px' }}>
      <img src={recipe?.strMealThumb} alt={recipe?.strMeal} style={{ width: '100%' }} />
      <h3>{recipe?.strMeal}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        
        <Link to={`/recipes/${recipe?.idMeal}`} style={{ color: 'blue' }}>View Details</Link>
        <button onClick={() => addToFavourites(recipe)} style={{ backgroundColor: '#ff6347', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
          ❤️ Save
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;