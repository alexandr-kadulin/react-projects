import { render, screen } from '@testing-library/react';
import { List } from './';
import { TFeedback } from '../../types';

const mockFeedbacks: TFeedback[] = [
  {
    email: 'test@example.com',
    rating: '4',
    text: 'Great product!',
  },
  {
    email: 'user@example.com',
    rating: '5',
    text: 'Excellent service',
  },
];

describe('List', () => {
  it('renders heading', () => {
    render(<List feedbacks={[]} />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Feedbacks' })
    ).toBeInTheDocument();
  });

  it('displays "No feedbacks yet" when feedbacks array is empty', () => {
    render(<List feedbacks={[]} />);
    expect(screen.getByText('No feedbacks yet')).toBeInTheDocument();
  });

  it('renders feedbacks correctly', () => {
    render(<List feedbacks={mockFeedbacks} />);
    mockFeedbacks.forEach((feedback) => {
      expect(screen.getByText(feedback.email)).toBeInTheDocument();
      expect(screen.getByText(feedback.text)).toBeInTheDocument();
      expect(
        screen.getByText('⭐'.repeat(Number(feedback.rating)))
      ).toBeInTheDocument();
    });
  });
});
