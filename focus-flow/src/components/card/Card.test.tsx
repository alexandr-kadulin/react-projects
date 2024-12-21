import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ICard, Card } from './';

const mockProps: ICard = {
  id: '1',
  title: 'Test Task',
  description: 'Test Description',
  category: 'urgent',
  removeTask: vi.fn(),
};

describe('Card', () => {
  it('renders card with correct content', () => {
    render(<Card {...mockProps} />);
    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Task' })
    ).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('urgent')).toBeInTheDocument();
  });

  it('calls removeTask when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<Card {...mockProps} />);
    await user.click(screen.getByRole('button', { name: 'Delete task : 1' }));
    expect(mockProps.removeTask).toHaveBeenCalledWith('1');
  });
});
