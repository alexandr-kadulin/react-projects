import { TTask } from '../../types';
import { Card } from '../';

interface IList {
  tasks: TTask[];
  removeTask: (id: string) => void;
}

export const List = ({ tasks, removeTask }: IList) => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Flow Board</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.length ? (
          tasks.map((task) => {
            return <Card key={task.id} {...task} removeTask={removeTask} />;
          })
        ) : (
          <p>No tasks yet</p>
        )}
      </div>
    </section>
  );
};
