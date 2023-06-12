import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppDispatch } from '../../store/hooks';
import { deleteRecipe, toggleFavorite } from '../../features/recipeSlice';

type Props = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  isFavorite?: boolean;
  image?: File;
}

export const RecipeCard: FC<Props> = ({ title, description, id, isFavorite, ingredients, instructions, image }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteRecipe(id))
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id))
  }
  return (
    <Card sx={{ minWidth: 275, mb: 5 }}>
      {image
        ? <CardMedia
          sx={{ height: 140 }}
          image={URL.createObjectURL(image)}
        />
        : <CardMedia
          sx={{ height: 140, backgroundSize: "contain" }}
          image={'./image_not_found.svg'}
        />
      }

      <CardContent>
        <Typography noWrap={true} sx={{ fontSize: 14 }} gutterBottom>
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            Title:
          </Typography>
          {title}
        </Typography>
        <Typography noWrap={true} sx={{ fontSize: 14 }} gutterBottom>
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            Ingredients:
          </Typography>
          {ingredients}
        </Typography>
        <Typography noWrap={true} sx={{ fontSize: 14 }} gutterBottom>
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            Instructions:
          </Typography>
          {instructions}
        </Typography>
        <Typography noWrap={false} variant="body2">
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            Description:
          </Typography>
          {description}
        </Typography>
      </CardContent>
      <Checkbox
        edge="end"
        checked={isFavorite}
        icon={<StarBorderIcon />}
        checkedIcon={<StarIcon />}
        onClick={handleToggleFavorite}
      />
      <CardActions>
        <Button variant='contained' size="small">Learn More</Button>
        <Button
          onClick={handleDelete}
          variant='contained'
          color='error'
          endIcon={<DeleteForeverIcon />}
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}