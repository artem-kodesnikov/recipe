import React, { ChangeEvent, useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  const [preview, setPreview] = useState('');

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
              description: '',
              ingredients: '',
              instructions: '',
              image: undefined,
            }}
            validationSchema={recipeValidationSchema}
            onSubmit={async (values: Recipe, { setSubmitting, resetForm }) => {
              dispatch(addRecipe(values));
              resetForm();
              setPreview('');
              setSubmitting(false);
            }}
          >
            {({ submitForm, isSubmitting, setFieldValue }) => {
              const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files && event.target.files[0];

                if (file) {
                  const imageURL = URL.createObjectURL(file);
                  setPreview(imageURL);
                  setFieldValue('image', file);
                }
              };

              return (
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
                  <StyledLabel htmlFor="ingredients">Ingredients</StyledLabel>
                  <StyledField
                    id="ingredients"
                    component={TextField}
                    name="ingredients"
                    type="text"
                    placeholder="Enter your ingredients"
                  />
                  <StyledLabel htmlFor="instructions">Instructions</StyledLabel>
                  <StyledField
                    id="instructions"
                    component={TextField}
                    name="instructions"
                    type="text"
                    placeholder="Enter your instructions"
                  />
                  <StyledLabel htmlFor="instructions">Add image</StyledLabel>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ mb: 2 }}
                  >
                    Upload File
                    <input
                      type="file"
                      onChange={handleImageChange}
                      hidden
                    />
                  </Button>
                  {preview && (
                    <img src={preview} alt="Preview" style={{
                      maxWidth: '100%',
                      marginTop: '1rem',
                      objectFit: 'contain',
                      maxHeight: '100px'
                    }} />
                  )}
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
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};
