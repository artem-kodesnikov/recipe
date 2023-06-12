import { Container } from '@mui/material';
import React from 'react';
import { Header } from './components/Header/Header';
import { RecipeFilter } from './components/RecipeFilter/RecipeFilter';
import { RecipeList } from './components/RecipeList/RecipeList';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} maxWidth="sm">
        <RecipeFilter />
        <RecipeList />
      </Container>
    </>
  );
}

export default App;
