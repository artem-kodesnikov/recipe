import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FilterOptions, setRecipeFilter } from '../../features/recipeSlice';

export const RecipeFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.recipe.filter);

  const handleFilterChange = (filter: FilterOptions) => {
    dispatch(setRecipeFilter(filter));
  }

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      aria-label="Platform"
    >
      <ToggleButton selected={filter === 'all'} onClick={() => handleFilterChange(FilterOptions.All)} value="all">All</ToggleButton>
      <ToggleButton selected={filter === 'favorites'} onClick={() => handleFilterChange(FilterOptions.Favorites)} value="favorite">Favorite</ToggleButton>
    </ToggleButtonGroup>
  );
}