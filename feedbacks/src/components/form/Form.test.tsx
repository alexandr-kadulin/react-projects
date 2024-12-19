import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './';
import { getFormElements } from '../../utils';

describe('Form', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders form elements correctly', () => {
    render(<Form onSubmit={mockOnSubmit} />);
    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();
    expect(emailInput).toHaveValue('');
    expect(ratingSelect).toHaveValue('');
    expect(textArea).toHaveValue('');
    expect(submitButton).toBeInTheDocument();
  });

  it('shows error message when review is too short', async () => {
    const user = userEvent.setup();
    render(<Form onSubmit={mockOnSubmit} />);
    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();
    await user.type(emailInput, 'test@example.com');
    await user.selectOptions(ratingSelect, '5');
    await user.type(textArea, 'short');
    await user.click(submitButton);
    expect(
      screen.getByText('Feedback must be at least 10 characters long')
    ).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<Form onSubmit={mockOnSubmit} />);
    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();
    await user.type(emailInput, 'test@example.com');
    await user.selectOptions(ratingSelect, '5');
    await user.type(textArea, 'long feedback');
    await user.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      rating: '5',
      text: 'long feedback',
    });
  });
});
