import React from 'react';
import List from '@mui/material/List';
import { useAppSelector } from '../../store/hooks';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { FilterOptions } from '../../features/recipeSlice';

export const RecipeList = () => {
  const recipeList = useAppSelector(state => state.recipe.recipeList)
  const filter = useAppSelector((state) => state.recipe.filter);

  const filteredRecipeList = recipeList.filter(recipe => {
    if (filter === FilterOptions.All) {
      return true;
    } else if (filter === FilterOptions.Favorites) {
      return recipe.isFavorite;
    }
    return false;
  });

  console.log(filteredRecipeList)


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mb: 5 }}>
      {filteredRecipeList.map((recipe) =>
        <RecipeCard
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          isFavorite={recipe.isFavorite}
          image={recipe.image}
        />
      )}
    </List>
  );
}
