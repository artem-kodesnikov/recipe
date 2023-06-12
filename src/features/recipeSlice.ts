import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Recipe = {
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
    addRecipe(state, action: PayloadAction) {

    },
    deleteRecipe(state, action: PayloadAction) {

    },
  }
})

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;