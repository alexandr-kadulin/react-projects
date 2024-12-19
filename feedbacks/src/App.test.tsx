import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getFormElements } from './utils';

describe('App', () => {
  it('renders heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Feedbacks App' })
    ).toBeInTheDocument();
  });

  it('adds a new feedback when form is submitted', async () => {
    const user = userEvent.setup();
    render(<App />);
    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();
    await user.type(emailInput, 'test@example.com');
    await user.selectOptions(ratingSelect, '5');
    await user.type(textArea, 'long feedback');
    await user.click(submitButton);
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('⭐'.repeat(5))).toBeInTheDocument();
    expect(screen.getByText('long feedback')).toBeInTheDocument();
  });
});
