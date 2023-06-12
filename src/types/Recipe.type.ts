export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  isFavorite?: boolean;
  image?: string;
}

export enum FilterOptions {
  All = 'all',
  Favorites = 'favorites',
}

export type RecipeState = {
  recipeList: Recipe[];
  filter: FilterOptions;
}