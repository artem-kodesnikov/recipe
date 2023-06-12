import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppDispatch } from '../../store/hooks';
import { deleteRecipe } from '../../features/recipeSlice';

type Props = {
  id: string;
  title: string;
  description: string;
}

export const RecipeCard: FC<Props> = ({ title, description, id }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteRecipe(id))
  }
  return (
    <Card sx={{ minWidth: 275, mb: 5 }}>
      <CardContent>
        <Typography noWrap={true} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography noWrap={false} variant="body2">
          {description}
        </Typography>
      </CardContent>
      <Checkbox
        edge="end"
        icon={<StarBorderIcon />}
        checkedIcon={<StarIcon />}
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