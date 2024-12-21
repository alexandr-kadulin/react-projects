import { render } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { Form } from './';
import { getFormElements } from '../../utils';

describe('Form', () => {
  let user: UserEvent;
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
    user = userEvent.setup();
    render(<Form onSubmit={mockOnSubmit} />);
  });

  it('renders form elements correctly', () => {
    const { titleInput, descriptionInput, categorySelect, submitButton } =
      getFormElements();
    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(categorySelect).toHaveValue('');
    expect(submitButton).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const { submitButton } = getFormElements();
    await user.click(submitButton);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submits form with valid data and resets form fields', async () => {
    const user = userEvent.setup();
    const { titleInput, descriptionInput, categorySelect, submitButton } =
      getFormElements();
    await user.type(titleInput, 'New Task');
    await user.type(descriptionInput, 'Task Description');
    await user.selectOptions(categorySelect, 'urgent');
    await user.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'New Task',
      description: 'Task Description',
      category: 'urgent',
    });
    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(categorySelect).toHaveValue('');
  });
});
