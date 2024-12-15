import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './TaskForm.style';

interface TaskFormProps {
  taskTitle: string;
  taskDescription: string;
  setTaskTitle: (title: string) => void;
  setTaskDescription: (description: string) => void;
  addTask: () => void;
}

const TaskForm = ({
  taskTitle,
  taskDescription,
  setTaskTitle,
  setTaskDescription,
  addTask,
}: TaskFormProps) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Digite o título da tarefa"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        value={taskDescription}
        onChangeText={setTaskDescription}
        placeholder="Digite a descrição da tarefa"
        placeholderTextColor="#888"
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
};

export default TaskForm;
