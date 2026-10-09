import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      setLoading(true);
      setError(null); 
      try {
        
        const res = await axios.get(`https://themealdb.com{id}`);
        
        if (res.data.meals && res.data.meals.length > 0) {
          
          setRecipe(res.data.meals[0]); 
        } else {
          setError('Recipe not found!');
        }
      } catch (err) {
        setError('Failed to load recipe details.');
      } finally {
        setLoading(false);
      }
    };
    fetchSingleRecipe();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p style={{ color: 'red', padding: '20px' }}>{error}</p>;
  if (!recipe) return null; 

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/recipes">⬅️ Back to Search</Link>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '300px', borderRadius: '8px' }} />
      <h3>Category: {recipe.strCategory} | Area: {recipe.strArea}</h3>
      <h4>Instructions:</h4>
      <p style={{ lineHeight: '1.6' }}>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
