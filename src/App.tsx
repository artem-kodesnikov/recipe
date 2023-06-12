import { Container } from '@mui/material';
import React from 'react';
import { Header } from './components/Header/Header';
import { RecipeList } from './components/RecipeList/RecipeList';

function App() {
  return (
    <>
      <Header/>
      <Container sx={{ display: 'flex', justifyContent: 'center'}} maxWidth="sm">
        <RecipeList />
      </Container>
    </>
  );
}

export default App;
