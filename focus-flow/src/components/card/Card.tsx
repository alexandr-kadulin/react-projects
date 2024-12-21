import { Trash2 } from 'lucide-react';
import { TTask } from '../../types';

export interface ICard extends TTask {
  removeTask: (id: string) => void;
}

const categoryColors = {
  urgent: 'bg-red-500',
  important: 'bg-yellow-500',
  normal: 'bg-blue-500',
  low: 'bg-green-500',
};

export const Card = ({
  id,
  title,
  description,
  category,
  removeTask,
}: ICard) => {
  return (
    <article className="w-full rounded-lg border shadow-sm flex flex-col min-h-[160px]">
      <div className="flex flex-row items-center justify-between p-6 pb-2">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {title}
        </h3>
        <button
          className="inline-flex h-9 w-9 items-center justify-center"
          onClick={() => removeTask(id)}
          aria-label={`Delete task : ${id}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6 pt-2 flex flex-col flex-grow">
        <p className="text-sm mb-2">{description}</p>
        <div className="mt-auto">
          <div
            className={`inline-block ${
              categoryColors[category] || 'bg-gray-500'
            } text-white text-xs font-semibold px-2 py-1 rounded`}
          >
            {category}
          </div>
        </div>
      </div>
    </article>
  );
};
