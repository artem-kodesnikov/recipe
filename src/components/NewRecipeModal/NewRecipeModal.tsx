import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Formik } from 'formik';
import { TextField } from 'formik-mui';
import { style, StyledBackDrop, StyledButtonsBox, StyledDescriptionField, StyledField, StyledForm, StyledLabel } from './modal.style';
import { Box, CircularProgress } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { addRecipe, Recipe } from '../../features/recipeSlice';
import { recipeValidationSchema } from '../../validation/RecipeValidation';

export const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button onClick={handleOpen} sx={{ mr: 2 }} variant="contained" color="success">New recipe</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              id: '',
              title: '',
              description: ''
            }}
            validationSchema={recipeValidationSchema}
            onSubmit={async (values: Recipe, { setSubmitting, resetForm }) => {
              dispatch(addRecipe(values))
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <StyledForm>
                <StyledBackDrop open={isSubmitting}>
                  <CircularProgress color="inherit" />
                </StyledBackDrop>
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <StyledField
                  id="title"
                  component={TextField}
                  name="title"
                  type="text"
                  placeholder="Enter your title"
                />
                <StyledLabel htmlFor="description">Description</StyledLabel>
                <StyledDescriptionField
                  component={TextField}
                  name="description"
                  type="text"
                  multiline
                  rows={6}
                  placeholder="Enter your todo description"
                />
                <StyledButtonsBox>
                  <Button variant='contained' color='success' onClick={submitForm}>Save</Button>
                </StyledButtonsBox>
              </StyledForm>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}