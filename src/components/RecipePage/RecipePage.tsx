import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { selectRecipeById } from '../../features/recipeSlice';
import { useAppSelector } from '../../store/hooks'
import { RecipePageHeader } from '../PageHeader/RecipePageHeader';

export const RecipePage = () => {
  const { id } = useParams();
  const recipeId = id || '';
  const recipe = useAppSelector(selectRecipeById(recipeId));
  if (!recipe) {
    return <div>Recipe not found</div>;
  }



  return (
    <>
      <RecipePageHeader />
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
        maxWidth="lg"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
            height: "80vh",
            width: '100%',
          }}
        >
          <Paper sx={{ width: '100%', p: 4 }} elevation={3}>
            <Typography sx={{
              textAlign: 'center',
              fontSize: 32,
              fontWeight: 700
            }}>
              Title:
              <br />
              <Typography sx={{ fontSize: 24, color: 'gray' }}>
                {recipe.title}
              </Typography>
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 24 }}>
              Descripton:
              <br />
              <Typography sx={{ fontSize: 18, color: 'gray', wordWrap: 'break-word' }}>
                {recipe.description}
              </Typography>
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 24 }}>
              Ingredients:
              <br />
              <Typography sx={{ fontSize: 18, color: 'gray', wordWrap: 'break-word' }}>
                {recipe.ingredients}
              </Typography>
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 24 }}>
              Instructions:
              <br />
              <Typography sx={{ fontSize: 18, color: 'gray', wordWrap: 'break-word' }}>
                {recipe.instructions}
              </Typography>
            </Typography>
            <Divider />
          </Paper>
          {recipe.image
            ? <img style={{ maxHeight: '300px' }} src={recipe.image} alt="recipe img" />
            : <Typography>'Here can be your image'</Typography>
          }
        </Box>
      </Container>
    </>
  )
}
