export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => Promise<void>;
  onToggle: (id: number, currentStatus: boolean) => Promise<void>;
} 