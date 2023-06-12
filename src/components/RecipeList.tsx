import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useAppSelector } from '../store/hooks';

export const RecipeList = () => {
  const recipeList = useAppSelector(state => state.recipe.recipeList)
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {recipeList.map((recipe) => {
        const labelId = `checkbox-list-secondary-label-${recipe.id}`;
        return (
          <ListItem
            key={recipe.id}
            secondaryAction={
              <Checkbox
                edge="end"
                inputProps={{ 'aria-labelledby': labelId }}
                icon={recipe.isFavorite ? <StarIcon /> : <StarBorderIcon />}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${recipe.id + 1}`}
                  src={`/static/images/avatar/${recipe.id + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${recipe.id + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
