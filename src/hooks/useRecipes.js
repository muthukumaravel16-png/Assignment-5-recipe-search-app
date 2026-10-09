import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecipes = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    if (!query) return;

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://themealdb.com{query}`);
        setData(response.data.meals || []); 
      } catch (err) {
        setError('Failed to fetch recipes. Please try again!');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]); 

  return { data, loading, error };
};

export default useRecipes;