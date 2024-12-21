import { FormEvent, useState } from 'react';
import { TTaskCategory, TTaskWithoutId } from '../../types';

interface IForm {
  onSubmit: (item: TTaskWithoutId) => void;
}

export const Form = ({ onSubmit }: IForm) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<TTaskCategory | ''>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !category) {
      return;
    }

    onSubmit({ title, description, category });
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium leading-none"
          >
            Title
          </label>
          <input
            type="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium leading-none"
          >
            Description
          </label>
          <input
            type="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium leading-none"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as TTaskCategory)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="urgent">Urgent</option>
            <option value="important">Important</option>
            <option value="normal">Normal</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};
