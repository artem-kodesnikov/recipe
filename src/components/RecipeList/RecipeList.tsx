import React from 'react';
import List from '@mui/material/List';
import { useAppSelector } from '../../store/hooks';
import { RecipeCard } from '../RecipeCard/RecipeCard';

export const RecipeList = () => {
  const recipeList = useAppSelector(state => state.recipe.recipeList)
  console.log(recipeList)
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mb: 5 }}>
      {recipeList.map((recipe) =>
        <RecipeCard
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
        />
      )}
    </List>
  );
}
