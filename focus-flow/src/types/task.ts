export type TTaskCategory = 'urgent' | 'important' | 'normal' | 'low';

export type TTask = {
  id: string;
  title: string;
  description: string;
  category: TTaskCategory;
};

export type TTaskWithoutId = Omit<TTask, 'id'>;
