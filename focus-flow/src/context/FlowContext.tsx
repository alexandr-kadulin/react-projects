import { createContext, useContext, ReactNode, useState } from 'react';
import { TTask, TTaskWithoutId } from '../types';

interface IFlowContext {
  tasks: TTask[];
  addTask: (item: TTaskWithoutId) => void;
  removeTask: (id: string) => void;
}

const FlowContext = createContext<IFlowContext | undefined>(undefined);

export const FlowProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, seTasks] = useState<TTask[]>([]);

  const addTask = (item: TTaskWithoutId) => {
    seTasks([...tasks, { ...item, id: Date.now().toString() }]);
  };

  const removeTask = (id: string) => {
    seTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <FlowContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </FlowContext.Provider>
  );
};

export const useFlowContext = () => {
  const context = useContext(FlowContext);

  if (!context) {
    throw new Error('useFlow must be used within a FlowProvider');
  }

  return context;
};
