import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  isFavorite?: boolean;
}

type RecipeState = {
  recipeList: Recipe[]
}

const initialState: RecipeState = {
  recipeList: []
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
        isFavorite: false
      })
    },
    deleteRecipe(state, action: PayloadAction<string>) {
      state.recipeList = state.recipeList.filter((recipe) => recipe.id !== action.payload)
    },
  }
})

export const {addRecipe, deleteRecipe} = recipeSlice.actions;

export default recipeSlice.reducer;