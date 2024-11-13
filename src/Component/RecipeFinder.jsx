import React, { useState } from 'react';

function RecipeFinder() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const searchRecipes = async () => {
    // Replace with actual API call
    const mockData = [{ name: 'Pasta' }, { name: 'Pizza' }];
    setRecipes(mockData);
  };

  return (
    <div>
      <h2>Recipe Finder</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeFinder;
