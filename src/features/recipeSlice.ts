import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  isFavorite?: boolean;
  image?: File;
}

export enum FilterOptions {
  All = 'all',
  Favorites = 'favorites',
}

type RecipeState = {
  recipeList: Recipe[];
  filter: FilterOptions;
}


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
    }
  }
})

export const {addRecipe, deleteRecipe, toggleFavorite, setRecipeFilter} = recipeSlice.actions;

export default recipeSlice.reducer;