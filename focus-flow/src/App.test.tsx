import { render, screen } from './test-utils';
import userEvent, { UserEvent } from '@testing-library/user-event';
import App from './App';
import { getFormElements } from './utils';

const addTestTask = async (user: UserEvent) => {
  const { titleInput, descriptionInput, categorySelect, submitButton } =
    getFormElements();
  await user.type(titleInput, 'New Task');
  await user.type(descriptionInput, 'Task Description');
  await user.selectOptions(categorySelect, 'urgent');
  await user.click(submitButton);
};

describe('App', () => {
  it('renders heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Focus Flow' })
    ).toBeInTheDocument();
  });

  it('adds a new task when form is submitted', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.queryAllByRole('article')).toHaveLength(0);
    await addTestTask(user);
    expect(screen.queryAllByRole('article')).toHaveLength(1);
    expect(
      screen.getByRole('heading', { level: 3, name: 'New Task' })
    ).toBeInTheDocument();
    expect(screen.getByText('Task Description')).toBeInTheDocument();
    expect(screen.getByText('urgent')).toBeInTheDocument();
  });

  it('removes a task when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    await addTestTask(user);
    await user.click(screen.getByRole('button', { name: /delete/i }));
    expect(screen.queryAllByRole('article')).toHaveLength(0);
    expect(
      screen.queryByRole('heading', { level: 3, name: 'New Task' })
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Task Description')).not.toBeInTheDocument();
    expect(screen.queryByText('urgent')).not.toBeInTheDocument();
  });
});
