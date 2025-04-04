import React, { useEffect } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import TodoItem from './src/components/TodoItem';
import TodoInput from './src/components/TodoInput';
import { styles } from './src/styles/styles';
import { useTodos } from './src/hooks/useTodos';
import { Todo } from './src/types/todo';

const App: React.FC = () => {
  const {
    todos,
    newTask,
    setNewTask,
    fetchTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const renderItem: ListRenderItem<Todo> = ({ item }) => (
    <TodoItem
      todo={item}
      onDelete={handleDeleteTodo}
      onToggle={handleToggleTodo}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List:</Text>
      
      <TodoInput
        value={newTask}
        onChangeText={setNewTask}
        onSubmit={handleAddTodo}
      />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default App; 