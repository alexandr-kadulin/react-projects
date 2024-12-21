import { Form, List } from './components';
import { useFlowContext } from './context';

const App = () => {
  const { tasks, addTask, removeTask } = useFlowContext();

  return (
    <main className="h-screen container mx-auto p-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-8">Focus Flow</h1>
      <Form onSubmit={addTask} />
      <List tasks={tasks} removeTask={removeTask} />
    </main>
  );
};

export default App;
