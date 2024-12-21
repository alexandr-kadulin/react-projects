import { screen } from '@testing-library/react';

export const getFormElements = () => {
  return {
    titleInput: screen.getByRole('textbox', { name: 'Title' }),
    descriptionInput: screen.getByRole('textbox', { name: 'Description' }),
    categorySelect: screen.getByRole('combobox', { name: 'Category' }),
    submitButton: screen.getByRole('button', { name: 'Add Task' }),
  };
};
