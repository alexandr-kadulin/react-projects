import { useState } from 'react';
import { Form, List } from './components';
import { TFeedback } from './types';

const App = () => {
  const [feedbacks, setFeedbacks] = useState<TFeedback[]>([]);

  const addFeedback = (feedback: TFeedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  return (
    <main className="h-screen max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Feedbacks App</h1>
      <Form onSubmit={addFeedback} />
      <List feedbacks={feedbacks} />
    </main>
  );
};

export default App;
