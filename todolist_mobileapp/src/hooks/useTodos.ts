import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { todoService } from '../services/todoService';
import { Todo } from '../types/todo';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const fetchTodos = useCallback(async (): Promise<void> => {
    try {
      const data = await todoService.fetchTodos();
      if (Array.isArray(data)) {
        setTodos(data);
      } else {
        console.error('Unexpected response format:', data);
        setTodos([]);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
      Alert.alert('Error', 'Could not fetch tasks');
    }
  }, []);

  const handleAddTodo = useCallback(async (): Promise<void> => {
    if (!newTask.trim()) {
      Alert.alert('Error', 'Task cannot be empty!');
      return;
    }

    try {
      const newTodo = await todoService.addTodo(newTask);
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setNewTask('');
    } catch (error) {
      Alert.alert('Error', 'Could not add task');
    }
  }, [newTask]);

  const handleDeleteTodo = useCallback(async (id: number): Promise<void> => {
    try {
      await todoService.deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      Alert.alert('Error', 'Could not delete task');
    }
  }, []);

  const handleToggleTodo = useCallback(async (id: number, currentStatus: boolean): Promise<void> => {
    try {
      const updatedTodo = await todoService.updateTodoStatus(id, currentStatus);
      setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      Alert.alert('Error', 'Could not update task status');
    }
  }, []);

  return {
    todos,
    newTask,
    setNewTask,
    fetchTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
}; 