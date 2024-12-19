import { screen } from '@testing-library/react';

export const getFormElements = () => {
  return {
    emailInput: screen.getByRole('textbox', { name: 'Email' }),
    ratingSelect: screen.getByRole('combobox', { name: 'Rating' }),
    textArea: screen.getByRole('textbox', { name: 'Feedback' }),
    submitButton: screen.getByRole('button', { name: 'Submit Feedback' }),
  };
};
