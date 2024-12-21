import { render, screen } from '@testing-library/react';
import { TTask } from '../../types';
import { List } from './';

const mockTasks: TTask[] = [
  {
    id: '1',
    title: 'Item 1',
    description: 'Description 1',
    category: 'urgent',
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'Description 2',
    category: 'normal',
  },
];

vi.mock('../', () => {
  return {
    Card: () => <article>item card</article>,
  };
});

describe('List', () => {
  const mockRemoveTask = vi.fn();

  it('renders heading', () => {
    render(<List tasks={[]} removeTask={mockRemoveTask} />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Flow Board' })
    ).toBeInTheDocument();
  });

  it('displays "No feedbacks yet" when feedbacks array is empty', () => {
    const { queryAllByRole } = render(
      <List tasks={[]} removeTask={mockRemoveTask} />
    );
    expect(queryAllByRole('article')).toHaveLength(0);
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
  });

  it('renders correct number of item cards', () => {
    const { getAllByRole } = render(
      <List tasks={mockTasks} removeTask={mockRemoveTask} />
    );
    expect(getAllByRole('article')).toHaveLength(2);
  });
});
