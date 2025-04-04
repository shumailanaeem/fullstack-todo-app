import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { TodoItemProps } from '../types/todo';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={{ fontSize: 16 }}>
        {todo.task} {todo.completed ? '✅' : '❌'}
      </Text>
      <TouchableOpacity onPress={() => onDelete(todo.id)} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onToggle(todo.id, todo.completed)} style={styles.toggleButton}>
        <Text style={styles.buttonText}>
          {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem; 