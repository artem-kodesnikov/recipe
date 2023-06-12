import { object, string } from 'yup';

export let recipeValidationSchema = object({
  title: string().required().min(3, 'must be at least 3 characters long').max(30, 'must be no longer than 30'),
  description: string().required().min(5, 'must be at least 5 characters long'),
  ingredients: string().required(),
  instructions: string().required(),
});