import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';
import { TodoInputProps } from '../types/todo';

const TodoInput: React.FC<TodoInputProps> = ({ value, onChangeText, onSubmit }) => {
  return (
    <View>
      <TextInput
        placeholder="Enter new task..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Button title="Add Task" onPress={onSubmit} />
    </View>
  );
};

export default TodoInput; 