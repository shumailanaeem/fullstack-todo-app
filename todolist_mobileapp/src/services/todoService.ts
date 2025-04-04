import axios from 'axios';
import { Todo } from '../types/todo';
import env from '../config/env';

const API_URL = env.API_URL;

export const todoService = {
  fetchTodos: async (): Promise<Todo[]> => {
    try {
      const response = await axios.get<Todo[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  },

  addTodo: async (task: string): Promise<Todo> => {
    try {
      const response = await axios.post<Todo>(API_URL, { task, completed: false });
      return response.data;
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  },

  deleteTodo: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  },

  updateTodoStatus: async (id: number, currentStatus: boolean): Promise<Todo> => {
    try {
      const response = await axios.put<Todo>(`${API_URL}/${id}`, { completed: !currentStatus });
      return response.data;
    } catch (error) {
      console.error('Error updating todo status:', error);
      throw error;
    }
  },
}; 