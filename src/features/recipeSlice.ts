import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { FilterOptions, Recipe, RecipeState } from "../types/Recipe.type";

const initialState: RecipeState = {
  recipeList: [],
  filter: FilterOptions.All,
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.recipeList.push({
        id: Math.random().toString(36).substring(2, 8),
        title: action.payload.title,
        description: action.payload.description,
        ingredients: action.payload.ingredients,
        instructions: action.payload.instructions,
        isFavorite: false,
        image: action.payload.image,
      })
    },
    deleteRecipe(state, action: PayloadAction<string>) {
      state.recipeList = state.recipeList.filter((recipe) => recipe.id !== action.payload)
    },

    toggleFavorite(state, action: PayloadAction<string>) {
      state.recipeList = state.recipeList.map((recipe) =>
        recipe.id === action.payload
        ? { ...recipe, isFavorite: !recipe.isFavorite }
        : recipe
      );
    },
    setRecipeFilter(state, action: PayloadAction<FilterOptions>) {
      state.filter = action.payload;
    },
  }
})

export const selectRecipeById = (recipeId: string) =>
  createSelector(
    (state: RootState) => state.recipe.recipeList,
    (recipeList) => recipeList.find((recipe: Recipe) => recipe.id === recipeId)
  );

export const {addRecipe, deleteRecipe, toggleFavorite, setRecipeFilter} = recipeSlice.actions;

export default recipeSlice.reducer;