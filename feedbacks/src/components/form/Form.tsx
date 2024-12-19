import { FormEvent, useState } from 'react';
import { TFeedback } from '../../types';

interface IForm {
  onSubmit: (feedback: TFeedback) => void;
}

export const Form = ({ onSubmit }: IForm) => {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');
  const [textValidationError, setTextValidationError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.length >= 10) {
      const feedbackToAdd = { email, rating, text };

      onSubmit(feedbackToAdd);
      setEmail('');
      setRating('');
      setText('');
      setTextValidationError('');
    } else {
      setTextValidationError('Feedback must be at least 10 characters long');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="rating" className="block mb-2">
          Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Rating</option>
          {[5, 4, 3, 2, 1].map((option) => {
            return (
              <option key={option} value={option}>
                {option} Star{option === 1 ? '' : 's'}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="text" className="block mb-2">
          Feedback
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 rounded"
          required
          rows={4}
        />
        {textValidationError ? (
          <p className="text-red-500 text-sm mt-1">{textValidationError}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>
  );
};
